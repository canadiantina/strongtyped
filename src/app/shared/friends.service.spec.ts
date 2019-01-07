import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Friend } from './friend.model';
import { Gender } from './gender.enum';
import { FriendsService } from './friends.service';

fdescribe('FriendsService', () => {
  const baseUrl = 'http://localhost:3004';
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let friendsService: FriendsService;
  let friend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
      ],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    friendsService = TestBed.get(FriendsService);

    friend = {
      'id': 1,
      'firstName': 'Michelle',
      'lastName': 'Mulroy',
      'gender': Gender.Female,
      'fav': true
    };
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#construction', () => {
    it('should be created', () => {
      expect(friendsService).toBeDefined();
    });
  });

  describe('#getFriends', () => {
    it('should get all friends', () => {
      const expectedFriends: Friend[] = [friend];

      friendsService.getFriends()
        .subscribe(data => {
          expect(data).toEqual(expectedFriends);
        });

      const req = httpTestingController.expectOne(`${baseUrl}/friends`);

      expect(req.request.method).toEqual('GET');
      req.flush(expectedFriends);
    });
  });

  describe('#putFriends', () => {
    it('should put friend', () => {
      const expectedFriend: Friend = friend;

      friendsService.saveFriend(friend)
        .subscribe(data => {
          expect(data).toEqual(expectedFriend);
        });

      const req = httpTestingController.expectOne(`${baseUrl}/friends/1`);

      expect(req.request.method).toEqual('PUT');
      req.flush(expectedFriend);
    });
  });

  describe('#postFriends', () => {
    it('should post friend', () => {
      const expectedFriend: Friend = friend;

      friendsService.addFriend(friend)
        .subscribe(data => {
          expect(data).toEqual(expectedFriend);
        });

      const req = httpTestingController.expectOne(`${baseUrl}/friends/`);

      expect(req.request.method).toEqual('POST');
      req.flush(expectedFriend);
    });
  });
});
