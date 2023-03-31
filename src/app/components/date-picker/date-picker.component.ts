import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Output() controlChange = new EventEmitter<FormControl>();

  formControl: FormControl | undefined;

  ngOnInit() {
    this.formControl = this.formGroup.get(this.controlName) as FormControl;
    this.controlChange.emit(this.formControl);
    this.formControl.setValue(new Date());
  }
}
