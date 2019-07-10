import { Component } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '나의 친구 ng';

  kim: User = {
    id: 1,
    name: 'angular',
    age: 80,
    hobby: ['camera','gamble','','--', undefined, null],
    address: 'inchon'
  };
}
