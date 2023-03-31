import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  @Input() options: { value: string; label: string }[] = [];
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Output() controlChange = new EventEmitter<FormControl>();

  formControl: FormControl | undefined;

  ngOnInit() {
    this.formControl = this.formGroup.get(this.controlName) as FormControl;
    this.controlChange.emit(this.formControl);
    this.formControl.setValue(this.options[2].value);
  }
}
