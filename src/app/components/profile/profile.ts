import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [UpperCasePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user = {
    name: 'Kenzas',
    email: 'kenzas@esprit.tn'
  };

}