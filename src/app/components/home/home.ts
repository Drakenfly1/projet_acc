import { Component } from '@angular/core';
import { Profile } from '../profile/profile';
import { FriendsList } from '../friends-list/friends-list';
import { Notifications } from '../notifications/notifications';

@Component({
  selector: 'app-home',
  imports: [
    Profile,
    FriendsList,
    Notifications
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}