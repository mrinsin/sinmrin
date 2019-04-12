import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { slideInAnimation } from './app.animation'
import { MessageService } from './messages/message.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})

export class AppComponent {
  pageTitle = 'Mrinsin';
  isLoading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  get shouldShowTweets(): boolean {
    return this.messageService.showTweets;
  }

  set shouldShowTweets(value:boolean) {
    this.messageService.showTweets = value;
  }

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { 
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent)
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart){
      this.isLoading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError){
      this.isLoading = false;
    }
  }

  showTwitterFeed(): void {
    this.router.navigate([ { outlets: { twitter: ['tweets']} } ]);
    this.shouldShowTweets = true;
  }

  hideTwitterFeed(): void {
    this.router.navigate([ { outlets: { twitter: null} } ]);
    this.shouldShowTweets = false;
  }

  logOut(): void {
    this.authService.logout();

    this.router.navigate(['welcome']);
  }
}
