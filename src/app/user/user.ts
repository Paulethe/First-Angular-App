import { Component, EventEmitter, Output, input } from '@angular/core';
import { type user } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<user>();
  readonly selected = input.required<boolean>();
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return 'assets/users/' + this.user().avatar;
  }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
