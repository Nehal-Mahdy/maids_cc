import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {


  private baseUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}


  // fetching data and using localStorage storage as cashing mechanism
  getUsersList(): Observable<any[]> {
    const cachedUsers = localStorage.getItem('usersList');
    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    } else {
      // Make two requests, one for each page
      const page1$ = this.http.get(`${this.baseUrl}?page=1`);
      const page2$ = this.http.get(`${this.baseUrl}?page=2`);

      // Combine the results of both requests
      return forkJoin([page1$, page2$]).pipe(
        map((results: any[]) => {
          const usersPage1 = results[0].data;
          const usersPage2 = results[1].data;
          const usersList = [...usersPage1, ...usersPage2];

          // Cache the users list in localStorage
          localStorage.setItem('usersList', JSON.stringify(usersList));
          return usersList;
        }),
        catchError(error => {
          console.error('Error fetching users list:', error);
          return of([]); 
        })
      );
    }
  }

  // fetching details of a specific user and cashing user's details 
  getUserDetails(id: number): Observable<any> {
    const cachedUserDetails = localStorage.getItem(`usersList[${id-1}]`);

    if (cachedUserDetails) {
      return of(JSON.parse(cachedUserDetails));
    } else {
      return this.http.get(`${this.baseUrl}/${id}`).pipe(
        tap(userDetails => {
          // Cache the user details in localStorage
          localStorage.setItem(`userDetails${id}`, JSON.stringify(userDetails));
        })
      );
    }
  }
}
