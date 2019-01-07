import { Component, OnInit } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { FriendsService } from 'src/app/shared/friends.service';
import { Router } from '@angular/router';

@Component({
  providers: [FriendsService],
  selector: 'app-person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent implements OnInit {
  displayBanner: boolean;
  friends: Friend[];

  constructor(private friendService: FriendsService,
    private router: Router) { }

  ngOnInit() {
    this.getFriends();
  }

  private getFriends() {
    this.friendService.getFriends()
      .subscribe(data => {
        this.friends = data;
      }, error => {
      });
  }

  private saveFriend(detail: Friend) {
    this.friendService.saveFriend(detail)
      .subscribe(data => {
        detail = data;
        this.displayBannerSuccess();
      }, error => {
      });
  }

  private displayBannerSuccess() {
    this.displayBanner = true;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  }

  persistToDb(friend: Friend) {
    this.saveFriend(friend);
  }
}
