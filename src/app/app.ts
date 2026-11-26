import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Banner } from './components/banner/banner';
import { ConferenceList } from './components/conference-list/conference-list';
import { Search } from './components/search/search';
import { Speakers } from './components/speakers/speakers';
import { Calendar } from './components/calendar/calendar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Banner,
    ConferenceList,
    Search,
    Speakers,
    Calendar,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}