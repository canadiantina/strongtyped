import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { ShowPersonComponent } from './people/show-person/show-person.component';
import { RouterModule } from '@angular/router';

import {
  routes,
} from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullNamePipe } from './shared/full-name-pipe';
import { PeopleFormComponent } from './people/people-form/people-form.component';
import { EnumToArrayPipe } from './shared/enum-to-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonListComponent,
    ShowPersonComponent,
    DashboardComponent,
    FullNamePipe,
    PeopleFormComponent,
    EnumToArrayPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
