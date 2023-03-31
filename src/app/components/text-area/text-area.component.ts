import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextAreaComponent),
    },
  ],
})
export class TextAreaComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() biggerLabel?: boolean = false;
  @Input() color: 'turquoise' | 'rouge' | 'mauve' | 'bleu' | '' = '';
  @Input() hasLeftBorder: boolean = false;
  @Input() formErrorValidation: string = '';

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
