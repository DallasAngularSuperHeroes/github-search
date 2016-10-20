import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GithubsearchService } from '../shared/githubsearch.service';

@Component({
  selector: 'github-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  following = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private githubsearchService: GithubsearchService) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      let userid = params['userid'];
      this.following = this.githubsearchService.getFollowing(userid)
    });
  }    

}
