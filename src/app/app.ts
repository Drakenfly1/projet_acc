import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Banner } from './components/banner/banner';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Banner,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}