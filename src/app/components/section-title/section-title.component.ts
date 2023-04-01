import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {
  @Input() title!: string;
  @Input() subtitle: string = '';
  @Input() entreprise: string = '';
  @Input() color!: 'turquoise' | 'rouge' | 'mauve' | 'bleu';

  hasEnterprise: boolean = !!this.entreprise;
  onlyTitle: boolean = !this.entreprise && !this.subtitle;
}
