import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class GithubsearchService {
  
  private clientId = "5fd529216b8a0dc7d6b0";
  //private clientSecret = "55870b4d7c343a69e6185a426d5d2dc274d39d86";
  private clientSecret = "1d0dbf7aa1dcfe302a378bdd4240a93bc53d4207";
  private githubProfileUrl: string = 'https://api.github.com/users';
  private githubRepos: string = '/repos';
  private githubFollowers: string = '/followers';
  private githubFollowing: string = '/following';
  
  constructor(private http: Http) { }

  private getUserUrl (userid: string) {
    return `${this.githubProfileUrl}/${userid}`;
  }

  getUserProfile(userid: string) {
    const url = this.getUserUrl(userid);
    return this.http.get(url)
      .toPromise()
      .then(function(response){
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
  }

  getRepos(userid: string) {
    const url = this.getUserUrl(userid) + this.githubRepos;
    return this.http.get(url)
      .toPromise()
      .then(function(response){
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);    
  }

  getFollowers(userid: string) {
    const url = this.getUserUrl(userid) + this.githubFollowers;
    return this.http.get(url)
      .toPromise()
      .then(function(response){
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);    
  }  

  getFollowing(userid: string) {
    const url = this.getUserUrl(userid) + this.githubFollowing;
    return this.http.get(url)
      .toPromise()
      .then(function(response){
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);    
  }  

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
