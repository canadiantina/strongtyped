import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/shared/friend.model';
import { Gender } from 'src/app/shared/gender.enum';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/shared/friends.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})

export class PeopleFormComponent implements OnInit {

  model: Friend = {
    id: null,
    firstName: '',
    lastName: '',
    gender: Gender.Undisclosed,
    fav: false,
  };
  submitted = false;
  genders = Gender;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private friendService: FriendsService) { }

  addNewPersonForm = this.formBuilder.group({
    firstName: [this.model.firstName, [Validators.required]],
    lastName: [this.model.lastName, [Validators.required]],
    gender: [this.model.gender],
    fav: [this.model.fav]
  });

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.addFriend(this.addNewPersonForm.value);
  }

  private addFriend(detail: Friend) {
    this.friendService.addFriend(detail)
      .subscribe(data => {
        detail = data;
        this.router.navigate(['/people']);
      }, error => {
      });
  }
}
