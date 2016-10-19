import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GithubsearchService } from '../githubsearch.service';

@Component({
  selector: 'github-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private githubsearchService: GithubsearchService) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      let userid = params['userid'];
      this.repos = this.githubsearchService.getRepos(userid)
    });
  }    

}
