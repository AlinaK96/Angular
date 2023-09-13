import { Component } from '@angular/core';
import { User } from './models/User.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'inputForm';

  name!: string; 
  age!: any

  users: User[] = []

  constructor(private userService: UserService){
    this.users = this.userService.getUsers()
  }

  SaveUser():void {
    if (!(this.name === '' && this.age === null))
    this.users.push(new User(this.name, this.age))
    this.clearUser()
  }
  clearUser(): void {
    this.name = ''
    this.age = null
  }
}
