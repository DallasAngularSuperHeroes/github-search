import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GithubsearchService } from '../shared/githubsearch.service';

@Component({
  selector: 'github-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userid: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private githubsearchService: GithubsearchService) {}

  ngOnInit() {
    // this.route.parent.params.subscribe((params: Params) => {
    //   let userid = params['userid'];
    //   this.welcome = this.githubsearchService.getWelcome(userid)
    // });
  }

  onUserid() {
    if (this.userid) {
      this.router.navigate(['/user', this.userid]);
    }
  }

  onKeyup(event) {
    if (event && event.code === 'Enter')  {
      this.onUserid();
    }
  }

  hasData() {
    return !!this.userid;
  }

}
