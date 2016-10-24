import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {ReplaySubject} from "rxjs";
import 'rxjs/add/operator/toPromise';
import {Jsonp, URLSearchParams} from '@angular/http';

@Injectable()
export class GithubsearchService {

  private clientId = "5fd529216b8a0dc7d6b0";
  private githubProfileUrl: string = 'https://api.github.com/users';
  private githubRepos: string = '/repos';
  private githubFollowers: string = '/followers';
  private githubFollowing: string = '/following';
  private useCache = true;
  static cache: any = {};

  constructor(private http: Http) {
    this.initCache();
  }

  initCache()  {
      this.http.get('./fallbackData.json').toPromise().then((response: Response) => {
        GithubsearchService.cache = response.json();
      });
  }

  private getUserUrl(userid: string) {
    return `${this.githubProfileUrl}/${userid}`;
  }

  getUserProfile(userid: string) {
    const url = this.getUserUrl(userid);
    if (GithubsearchService.cache[userid]) {
      let project: ReplaySubject<any> = new ReplaySubject(1);
       project.next(GithubsearchService.cache[userid].userProfile);
       project.complete();
      return project.toPromise();
    }
    return this.http.get(url)
      .toPromise()
      .then((response: Response) => {
        var profile = response.json();
        console.log('profile.login ' + profile.login);
        if (!profile.login) {
          return false;
        }
        console.log('profile ' + profile);

        GithubsearchService.cache[userid] = {userProfile: {}};
        ['avatar_url', 'name', 'login', 'company', 'userid', 'location', 'email', 'blog', 'created_at'].forEach(field =>
          GithubsearchService.cache[userid].userProfile[field] = profile[field]
        );
        return profile;
      })
  }

  getRepos(userid: string) {
    const url = this.getUserUrl(userid) + this.githubRepos;
    if (GithubsearchService.cache[userid] && GithubsearchService.cache[userid].repos) {
      let project: ReplaySubject<any> = new ReplaySubject(1);
      project.next(GithubsearchService.cache[userid].repos);
      project.complete();
      return project.toPromise();
    }
    return this.http.get(url)
      .toPromise()
      .then((response: Response) => {
        var repos = response.json();
        console.log('repos ' + repos);
        GithubsearchService.cache[userid].repos = repos.map(repo => {
          return {name: repo.name, html_url: repo.html_url};
        });
        return repos
      })
  }

  getFollowers(userid: string) {
    const url = this.getUserUrl(userid) + this.githubFollowers;
    return this.http.get(url)
      .toPromise()
      .then((response: Response) => {
        const followers = response.json();
        GithubsearchService.cache[userid].followers = followers.map( user => { return {login: user.login}} );
        return followers;
      })
  }

  getFollowing(userid: string) {
    const url = this.getUserUrl(userid) + this.githubFollowing;
    return this.http.get(url)
      .toPromise()
      .then((response: Response) => {
        const following = response.json();
        GithubsearchService.cache[userid].followers = following.map( user => { return {login: user.login}} );
        return following;
      })
  }

  public showCache() {
    const str = JSON.stringify(GithubsearchService.cache);
    console.log(str);
  }

}
