/***
 *    ███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗    ██╗   ██╗███████╗███████╗██████╗ ███████╗
 *    ████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝    ██║   ██║██╔════╝██╔════╝██╔══██╗██╔════╝
 *    ██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗█████╗██║   ██║███████╗█████╗  ██████╔╝███████╗
 *    ██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝╚════╝██║   ██║╚════██║██╔══╝  ██╔══██╗╚════██║
 *    ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗    ╚██████╔╝███████║███████╗██║  ██║███████║
 *    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝     ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝
 *
 *    ███████╗███████╗██████╗ ██╗   ██╗██╗ ██████╗███████╗
 *    ██╔════╝██╔════╝██╔══██╗██║   ██║██║██╔════╝██╔════╝
 *    ███████╗█████╗  ██████╔╝██║   ██║██║██║     █████╗
 *    ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║██║     ██╔══╝
 *    ███████║███████╗██║  ██║ ╚████╔╝ ██║╚██████╗███████╗
 *    ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝ ╚═════╝╚══════╝
 *
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IUserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

/***
 *    ┌─┐┌─┐┌┐┌┌─┐┌┬┐┬─┐┬ ┬┌─┐┌┬┐┌─┐┬─┐
 *    │  │ ││││└─┐ │ ├┬┘│ ││   │ │ │├┬┘
 *    └─┘└─┘┘└┘└─┘ ┴ ┴└─└─┘└─┘ ┴ └─┘┴└─
 */
  public constructor(private _httpClient: HttpClient) { }

/***
 *    ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
 *    │││├┤  │ ├─┤│ │ ││└─┐
 *    ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
 */
  public getUsers$(): Observable<Array<IUserModel>> {
    return this._httpClient.get('/assets/fake-data/users.fake-data.json').
      pipe(map((objects: Array<any>) => objects.map((object: any) => {
        return {
          username: object['username'],
          email: object['email'],
          gender: object['gender'],
          password: object['password']
        };
      })));
  }

  public findUser$(): Observable<IUserModel | null> {
    return interval(1000).pipe(
      switchMap((n: number) => this.getUsers$().pipe(
        map((users: Array<IUserModel>) => {
          const randomIndex: number = Math.floor(Math.random() * users.length);
          return (n % (Math.floor(Math.random() * 5) + 2) === 0) ? users[randomIndex] : null;
        })
      ))
    );
  }

}
