import {Injectable}     from '@angular/core';
import {Route, CanLoad, Router} from '@angular/router';

@Injectable()
export class AboutGuard implements CanLoad {
  static trick: number = 0;
  constructor(private router: Router) {}

  canLoad(route: Route): boolean {
    AboutGuard.trick++;
    console.log('AboutGuard.trick ' + AboutGuard.trick);

    return !(AboutGuard.trick % 4);
  }
}
