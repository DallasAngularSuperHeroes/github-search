import { Injectable }             from '@angular/core';
import {Router, Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { GithubsearchService } from '../shared/githubsearch.service';
import {UserProfile} from "../shared/userProfile";
import {Observable} from "rxjs/Rx";
import {UserProfileComponent} from "./user-profile.component";

@Injectable()
export class UserProfileResolve implements Resolve<UserProfile>, CanActivate {
  constructor(private githubsearchService: GithubsearchService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<UserProfile>|boolean {
    const userid:string = route.params['userid'];
    if (!userid) {
      return false;
    }
    return this.githubsearchService.getUserProfile(userid).then(userProfile => {
      if (userProfile && userProfile.login) {
        return userProfile;
      } else { 
        return false;
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot): Promise<UserProfile>|boolean {
    return !route.params['userid'].startsWith('a');
  }

  // canDeactivate(component: WelcomeComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {
  //   return !component.userid;
  // }
}
