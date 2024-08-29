import { Component, signal } from '@angular/core';

import { TUTS_DATA } from '../mocked-data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  tutsData = signal(TUTS_DATA[0]);

  get url () {
    return 'https://angular.dev' + this.tutsData.url;
  } 

  toggleNav() {
    const randomIndex = Math.floor(Math.random() * TUTS_DATA.length);
    this.tutsData.set( TUTS_DATA[randomIndex] );
  }
}
