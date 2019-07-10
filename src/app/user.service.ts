import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({ // UserService DI 가능
  providedIn: 'root' // root 컴포넌트에서 사용 가능 - 모든 컴포넌트에서 사용 가능
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  add(a: number=0, b: number = 0): number {
    return a + b;
  }

  //사용자 전체보기
  getAllUsers(){
    const userDataUrl = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(userDataUrl)
      .subscribe(function(res){
        console.log(res);
      });

  }

  getUserByUserId(): Observable<any>{
    const userDataUrl = 'https://jsonplaceholder.typicode.com/users/3';
    return this.http.get(userDataUrl);
      // .subscribe(function(res){
      //   console.log(res);
      // });

  }
  //사용자 상세보기
  viewDetail(a: number=0, b: number = 0){
    return a + b;
  }
  //사용자 등록
  insert(a: number=0, b: number = 0){
    return a + b;
  }
  //사용자 수정
  modify(a: number=0, b: number = 0){
    return a + b;
  }
  //사용자 삭제
  delete(a: number=0, b: number = 0){
    return a + b;
  }
}
