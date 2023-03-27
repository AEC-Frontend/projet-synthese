import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upper-nav-link',
  templateUrl: './upper-nav-link.component.html',
  styleUrls: ['./upper-nav-link.component.scss'],
})
export class UpperNavLinkComponent {
  @Input() onClick!: (redirect: string) => void;
  @Input() color!: string;
  @Input() label!: string;
  @Input() redirect!: string;

  constructor(private router: Router) {}

  handleClick() {
    console.log('Button clicked');
    this.router.navigate([this.redirect]);
  }
}
