import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
})
export class SaveButtonComponent {
  @Input() label!: 'Sauvegarder' | 'Mettre à jour';
  @Input() color!: 'turquoise' | 'rouge' | 'mauve' | 'bleu';
}
