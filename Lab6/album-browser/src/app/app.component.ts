/// app.component.ts
import { Component } from '@angular/core'; // <-- must be @angular/core
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  providers: [
    provideHttpClient(), 
    provideRouter(routes)
  ]
})
export class AppComponent {}