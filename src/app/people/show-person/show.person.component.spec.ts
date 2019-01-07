import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonComponent } from './show-person.component';
import { FullNamePipe } from '../../shared/full-name-pipe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Friend } from '../../shared/friend.model';
import { Gender } from '../../shared/gender.enum';

fdescribe('ShowPersonComponent', () => {
  let component: ShowPersonComponent;
  let fixture: ComponentFixture<ShowPersonComponent>;
  let nameDisplayEl: DebugElement;
  let favEl: DebugElement;
  let mockFavTrueFriend: Friend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowPersonComponent,
        FullNamePipe,
      ]
    });

    mockFavTrueFriend = {
      'id': 1,
      'firstName': 'Michelle',
      'lastName': 'Mulroy',
      'gender': Gender.Female,
      'fav': true
    };

    fixture = TestBed.createComponent(ShowPersonComponent);
    component = fixture.componentInstance;

    nameDisplayEl = fixture.debugElement.query(By.css('h5.mb-1'));
    favEl = fixture.debugElement.query(By.css('span.fa'));
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should display full name', () => {
    // Arrange
    component.friend = mockFavTrueFriend;
    fixture.detectChanges();

    // Act

    // Assert
    expect(nameDisplayEl.nativeElement.textContent).toContain('Michelle Mulroy');
  });

  it('should un-like a liked the friend when clicked on', () => {
    // Arrange
    component.friend = mockFavTrueFriend;
    fixture.detectChanges();

    // Act
    favEl.nativeElement.click();

    // Assert
    expect(component.friend.fav).toBe(false);
  });

  it('should like an un-liked the friend when clicked on', () => {
    // Arrange
    mockFavTrueFriend.fav = false;
    component.friend = mockFavTrueFriend;
    fixture.detectChanges();

    // Act
    favEl.nativeElement.click();

    // Assert
    expect(component.friend.fav).toBe(true);
  });

  it('heart click will emit event', () => {
    // Arrange
    spyOn(component.notifyParent, 'emit').and.callThrough();
    component.friend = mockFavTrueFriend;
    fixture.detectChanges();

    // Act
    favEl.nativeElement.click();

    // Assert
    expect(component.notifyParent.emit).toHaveBeenCalledWith(component.friend);
  });

});
