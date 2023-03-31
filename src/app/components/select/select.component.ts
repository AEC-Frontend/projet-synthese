import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() options: { value: string; label: string }[] = [];
  @Input() label!: string;
  @Input() color!: 'turquoise' | 'rouge' | 'mauve' | 'bleu';
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() hasLeftBorder: boolean = false;
  @Input() formErrorValidation: string = '';
  @Output() controlChange = new EventEmitter<FormControl>();

  formControl: FormControl | undefined;

  ngOnInit() {
    this.formControl = this.formGroup.get(this.controlName) as FormControl;
    this.controlChange.emit(this.formControl);
    this.formControl.setValue('');
  }
}
