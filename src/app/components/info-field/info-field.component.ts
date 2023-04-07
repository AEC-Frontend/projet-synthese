import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-field',
  templateUrl: './info-field.component.html',
  styleUrls: ['./info-field.component.scss'],
})
export class InfoFieldComponent {
  @Input() label!: string;
  @Input() info!: string;
}
