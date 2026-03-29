import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active-link">Home</a> | 
      <a routerLink="/about" routerLinkActive="active-link">About</a> | 
      <a routerLink="/albums" routerLinkActive="active-link">Albums</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [`.active-link { font-weight: bold; color: blue; }`]
})
export class AppComponent {}