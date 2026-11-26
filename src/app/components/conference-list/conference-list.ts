import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  searchTitle: string = '';

  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrez les nouveautés Angular.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Découvrez les Signals Angular.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Découvrez les technologies Web.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 40,
      nbParticipants: 40
    }
  ];

  get filteredConferences(): Conference[] {
    return this.conferences.filter(conference =>
      conference.date.getTime() >=
        new Date().setHours(0, 0, 0, 0) &&
      conference.title.toLowerCase().includes(
        this.searchTitle.trim().toLowerCase()
      )
    );
  }

  remainingPlaces(conference: Conference): number {
    return conference.maxParticipants -
           conference.nbParticipants;
  }

  register(conference: Conference): void {
    if (this.remainingPlaces(conference) > 0) {
      conference.nbParticipants++;
    }
  }

  showDetails(conference: Conference): void {
    this.selectedConference = conference;
  }
}