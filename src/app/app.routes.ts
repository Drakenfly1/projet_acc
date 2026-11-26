import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { ConferenceList } from './components/conference-list/conference-list';
import { FriendsList } from './components/friends-list/friends-list';
import { Notifications } from './components/notifications/notifications';
import { Speakers } from './components/speakers/speakers';
import { Calendar } from './components/calendar/calendar';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'profile', component: Profile },

  { path: 'conferences', component: ConferenceList },

  { path: 'friends', component: FriendsList },

  { path: 'notifications', component: Notifications },

  { path: 'speakers', component: Speakers },

  { path: 'calendar', component: Calendar },

  { path: '**', redirectTo: '' }

];