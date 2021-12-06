import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public hideSidebar = true;
  @Output() triggerSidebar = new EventEmitter<boolean>();

  constructor(public router: Router) { }

  public sidebarCollapseClicked(): void {
    this.hideSidebar = !this.hideSidebar;
    this.triggerSidebar.emit(this.hideSidebar);
  }
}
