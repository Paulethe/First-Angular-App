import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy_users';


@Component({
  selector: 'app-root',  
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId? : string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;

  }
} 