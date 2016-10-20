import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GithubsearchService } from '../shared/githubsearch.service';

@Component({
  selector: 'github-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private githubsearchService: GithubsearchService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let userid = params['userid'];
      this.githubsearchService.getUserProfile(userid)
      .then( userProfile => {
        console.log('userprofile component', userProfile);
        this.userProfile = userProfile
      });
    });
  }    

}
