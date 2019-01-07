import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { FullNamePipe } from '../../shared/full-name-pipe';

@Component({
  selector: 'app-show-person',
  templateUrl: 'show-person.component.html',
  styleUrls: ['./show-person.component.css']
})

export class ShowPersonComponent implements OnInit {

  @Input() friend: Friend;
  @Output() notifyParent: EventEmitter<Friend> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  likeChange() {
    this.friend.fav = !this.friend.fav;
    this.notifyParent.emit(this.friend);
  }
}
