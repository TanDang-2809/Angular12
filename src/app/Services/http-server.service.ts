import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';//private là kiểu khai báo nội bộ
  private REST_API_SERVER_RANDOM_USERS = 'https://randomuser.me/api/?results=';
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'//tên và giá trị
      })
    };
  constructor(private httpClient : HttpClient) {}

  public getComments(): Observable<any>{//Observable kiểu trả về
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public postComments(payload: any): Observable<any>{//Observable kiểu trả về//payload object
    const url = `${this.REST_API_SERVER}/comments`;
    console.log('postComment = ', url);
    console.log('postComment : payload ', payload);
    return this.httpClient.post<any>(url, payload,this.httpOptions);
  }

  public getRandomUsers(users: number = 1): Observable<any>{//Observable kiểu trả về
    const url = `${this.REST_API_SERVER_RANDOM_USERS}` + users;
    console.log(' getRandomUsers : ',url);
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
