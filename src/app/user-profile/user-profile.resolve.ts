import { Injectable }             from '@angular/core';
import { Router, Resolve,  ActivatedRouteSnapshot } from '@angular/router';

import { GithubsearchService } from '../shared/githubsearch.service';
import {UserProfile} from "./userProfile";

@Injectable()
export class UserPofileResolve implements Resolve<UserProfile> {
  constructor(private githubsearchService: GithubsearchService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<UserProfile>|boolean {
    const id:string = route.params['id'];

    return this.githubsearchService.getUserProfile(id).then(userProfile => {
      if (userProfile) {
        return userProfile;
      } else { // id not found
        this.router.navigate(['/']);
        return false;
      }
    });
  }
}
