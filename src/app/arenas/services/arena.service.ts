import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Arena} from '../models/Arena';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArenaService {

  constructor(private http: HttpClient) {
  }

  getRequestOptions() {
    const tempHeaders = {
      'Content-Type': 'application/json',
      observe: 'response',
      // 'time':'4444'
      // 'Cache-Control': cache?cache:'no-cache',
    };

    tempHeaders['authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuZ2JhcmVuYS5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2NTkwNTkxMTYsImV4cCI6MTY2MTIxOTExNiwibmJmIjoxNjU5MDU5MTE2LCJqdGkiOiJQRGRCOXVDMzJIN3RDeFhqIiwic3ViIjoxOTM0ODMsInBydiI6IjNjMWE5ZGY4YjMzNTM4YTA0NzM0NTBmM2E5YWJkMTBiZjBiNTE0MzEiLCJoYXNfc3RvcmVfZWFybHlfYWNjZXNzIjp0cnVlLCJpc19hZG1pbiI6ZmFsc2V9.QFL0Ws1HqxxBeGQjwvG8dYMOfxJ_1Xr7QxXVStFbU7U';
    const httpOptions = {
      headers: new HttpHeaders(tempHeaders)
    };
    return httpOptions;
  }

  fetchTodos() {
    return this.http.get<Arena[]>('https://api.community.gbarena.com/api/arenas/myArenas', this.getRequestOptions()).pipe(
      map((response: any) => {
        return response.data;
      }));
  }

  deleteTodo(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  addTodo(payload: Arena) {
    return this.http.post<Arena>('https://jsonplaceholder.typicode.com/todos', payload);
  }

  updateTodo(payload: Arena, id: number) {
    return this.http.put<Arena>(`https://jsonplaceholder.typicode.com/todos/${id}`, payload);
  }


}
