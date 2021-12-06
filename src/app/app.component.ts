import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'library';
  public hideSidebar = true;

  public sidebarTriggered(hideSidebar: boolean): void {
    this.hideSidebar = hideSidebar;
  }
}
