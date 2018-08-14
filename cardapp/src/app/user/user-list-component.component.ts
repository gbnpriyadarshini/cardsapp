import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})

export class UserListComponentComponent{

  constructor(public userService:UserService) { }

  users = this.userService.getUser();
}
