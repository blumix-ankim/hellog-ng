import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Todo } from '../../model/Todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() kim;

  userService1: Object;
  todos: Array<Todo>;
  // 상속

  constructor(private userService: UserService, private todoService: TodoService) { // 파라미터 선언만으로 userService injection

  }

  ngOnInit() {
    // alert('렌더링 직전');
    this.userService.getUserByUserId().subscribe((res) => {
      this.userService1 = res;
      // console.log(res);
    });

    this.todoService.getAllTodos().subscribe((res) => {
      this.todos = res;
    });

  }



}
