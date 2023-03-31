import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TitleInputComponent),
    },
  ],
})
export class TitleInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() color!: 'turquoise' | 'rouge' | 'mauve' | 'bleu';

  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;
  isDisabled: boolean = false;

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}
