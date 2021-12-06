import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  @Input() width = '1em';
  @Input() height = '1em';
  @Input() name: string = '';

  public get icon(): string {
    return `assets/icons/bootstrap-icons.svg#${this.name}`;
  }
}
