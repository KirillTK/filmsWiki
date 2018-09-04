import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-review-text-area',
  styleUrls: ['./review-text-area.component.scss'],
  templateUrl: './review-text-area.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReviewTextAreaComponent),
      multi: true
    }]
})

export class ReviewTextAreaComponent implements ControlValueAccessor {
  @ViewChild('textIput') public textReview: ElementRef ;
  private onChange: (value: any) => void;
  private onChangeSave: (value: any) => void;
  private onTouched: () => void;
  private onTouchedSave: () => void;

  constructor() {
    // Nothing
  }

  public registerOnChange(fn: any): void {
    const thisSaved: any = this;
    this.onChangeSave = fn;
    this.onChange = (value: any) => {
      thisSaved.onChangeSave(value);
    };
  }

  public registerOnTouched(fn: any): void {
    const thisSaved: any = this;
    this.onTouchedSave = fn;
    this.onTouched = () => {
      thisSaved.onTouchedSave();
    };
  }

  public writeValue(obj: any): void {
  }

  public onTextChange(event: any) {
    this.onChange(this.textReview.nativeElement.value);
  }

}
