import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {ReplaySubject} from "rxjs";
import 'rxjs/add/operator/toPromise';
import {Jsonp, URLSearchParams} from '@angular/http';

@Injectable()
export class GithubsearchService {

  private githubProfileUrl: string = 'https://api.github.com/users';
  private githubRepos: string = '/repos';
  private githubFollowers: string = '/followers';
  private githubFollowing: string = '/following';
  private useCache = true;
  static cache: any = {};

  constructor(private http: Http) {
    this.initCache();
  }

  initCache() {
    this.http.get('./fallbackData.json').toPromise().then((response: Response) => {
      GithubsearchService.cache = response.json();
    });
  }

  private getUserUrl(userid: string) {
    return `${this.githubProfileUrl}/${userid}`;
  }


  private tryGetFromCache(userid: string, topic: string): Promise<any> {
    let cacheData = GithubsearchService.cache[userid]
    if (cacheData) {
      cacheData = cacheData[topic];
    }
    if (cacheData) {
      let project: ReplaySubject<any> = new ReplaySubject(1);

      project.next(cacheData);
      project.complete();
      return project.toPromise();
    } else {
      return Promise.reject(false);
    }
  }

  getUserProfile(userid: string): Promise<any> {
    const url = this.getUserUrl(userid);

    return this.tryGetFromCache(userid, 'userProfile')
      .catch(() => this.http.get(url).toPromise()
        .then((response: Response) => {
          const profile = response.json();
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
      );
  }

  getRepos(userid: string) {
    const url = this.getUserUrl(userid) + this.githubRepos;

    return this.tryGetFromCache(userid, 'repos')
      .catch(() => this.http.get(url)
        .toPromise()
        .then((response: Response) => {
          const repos = response.json();
          console.log('repos ' + repos);
          if (repos && repos.length) {
            GithubsearchService.cache[userid].repos = repos.map(repo => {
              return {name: repo.name, html_url: repo.html_url};
            });
          }
          return repos
        })
      );
  }

  getFollowers(userid: string) {
    const url = this.getUserUrl(userid) + this.githubFollowers;

    return this.tryGetFromCache(userid, 'followers')
      .catch(() => this.http.get(url)
        .toPromise()
        .then((response: Response) => {
          const followers = response.json();
          if (followers && followers.length) {
            GithubsearchService.cache[userid].followers = followers.map(user => {
              return {login: user.login}
            });
          }
          return followers;
        })
      );
  }

  getFollowing(userid: string) {
    const url = this.getUserUrl(userid) + this.githubFollowing;

    return this.tryGetFromCache(userid, 'following')
      .catch(() => this.http.get(url)
        .toPromise()
        .then((response: Response) => {
          const following = response.json();
          if (following && following.length) {
            GithubsearchService.cache[userid].following = following.map(user => {
              return {login: user.login}
            });
          }
          return following;
        })
      );
  }

  public showCache() {
    const str = JSON.stringify(GithubsearchService.cache);
    console.log(str);
  }

}
