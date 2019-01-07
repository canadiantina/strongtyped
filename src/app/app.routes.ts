import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { PeopleFormComponent } from './people/people-form/people-form.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      {
        path: '',
        component: PersonListComponent
      },
      {
        path: 'add',
        component: PeopleFormComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'people',
    pathMatch: 'full'
  },
];
