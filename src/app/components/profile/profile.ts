import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user = {
    name: 'Kenzas',
    email: 'kenzas@esprit.tn'
  };

}