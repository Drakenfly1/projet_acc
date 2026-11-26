import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  showNotifications: boolean = false;

  notifications: string[] = [
    'Une nouvelle conférence est disponible.',
    'Bienvenue sur Conference App !'
  ];

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

}