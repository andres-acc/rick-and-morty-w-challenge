import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages: number = 10;
  currentPage: number = 1;

  changePage(page: number): void {
    this.currentPage = page;
  }
}
