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

  statusFilter: string = 'all';

  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrez les nouveautés Angular et les bonnes pratiques de développement web.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Découvrez la programmation réactive avec les Signals Angular.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Découvrez les nouvelles technologies et les tendances du développement Web.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 40,
      nbParticipants: 40
    }
  ];

  get upcomingConferences(): Conference[] {

    const today = new Date().setHours(0, 0, 0, 0);

    return this.conferences.filter(
      conference => conference.date.getTime() >= today
    );
  }

  get filteredConferences(): Conference[] {

    return this.upcomingConferences.filter(conference => {

      const matchesTitle = conference.title
        .toLowerCase()
        .includes(this.searchTitle.trim().toLowerCase());

      const remaining = this.remainingPlaces(conference);

      const matchesStatus =
        this.statusFilter === 'all' ||
        (this.statusFilter === 'available' && remaining > 0) ||
        (this.statusFilter === 'full' && remaining === 0);

      return matchesTitle && matchesStatus;

    });

  }

  get totalConferences(): number {
    return this.upcomingConferences.length;
  }

  get availableConferences(): number {

    return this.upcomingConferences.filter(
      conference => this.remainingPlaces(conference) > 0
    ).length;

  }

  get fullConferences(): number {

    return this.upcomingConferences.filter(
      conference => this.remainingPlaces(conference) === 0
    ).length;

  }

  remainingPlaces(conference: Conference): number {

    return conference.maxParticipants -
           conference.nbParticipants;

  }

  occupancyRate(conference: Conference): number {

    if (conference.maxParticipants <= 0) {
      return 0;
    }

    return Math.min(
      100,
      (conference.nbParticipants /
       conference.maxParticipants) * 100
    );

  }

  register(conference: Conference): void {

    if (this.remainingPlaces(conference) > 0) {
      conference.nbParticipants++;
    }

  }

  showDetails(conference: Conference): void {
    this.selectedConference = conference;
  }

  closeDetails(): void {
    this.selectedConference = null;
  }

  resetFilters(): void {
    this.searchTitle = '';
    this.statusFilter = 'all';
  }

  getIcon(conference: Conference): string {

    switch (conference.id) {

      case 1:
        return 'bi-code-slash';

      case 2:
        return 'bi-lightning-charge';

      case 3:
        return 'bi-globe2';

      default:
        return 'bi-easel';

    }

  }

}