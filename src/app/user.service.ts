import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return ['Alice', 'Bob', 'Charlie'];
  }

  // get, post, put, delete
  getUserFromApi() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
  
  // get, post, put, delete
  addUserData(userData: any) {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/users', userData);
  }

  
  // get, post, put, delete
  updateUserData(id: string, userData: any) {
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/users/${id}`, userData);
  }

  deleteUserData(id: string) {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
