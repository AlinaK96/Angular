import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  getUsers(): User[] {
    return [
      new User('Ben', 45),
      new User('Маx', 25),
      new User('Rita', 35),
      new User('Bob', 26)
    ]
  }

  constructor() { }
}
