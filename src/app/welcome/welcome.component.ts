import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GithubsearchService } from '../githubsearch.service';

@Component({
  selector: 'github-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcome = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private githubsearchService: GithubsearchService) {}

  ngOnInit() {
    // this.route.parent.params.subscribe((params: Params) => {
    //   let userid = params['userid'];
    //   this.welcome = this.githubsearchService.getWelcome(userid)
    // });
  }    

}
