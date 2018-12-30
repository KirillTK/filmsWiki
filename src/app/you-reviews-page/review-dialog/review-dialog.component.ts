import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Review} from '../../shared/model/review';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class DialogReview {

  public textReview: string;

  public documentForm: FormGroup;
  private reviewControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(1000)
  ]);
  private opinionMovieControl = new FormControl('', [
    Validators.required
  ]);


  constructor(
    public dialogRef: MatDialogRef<DialogReview>,
    @Inject(MAT_DIALOG_DATA) public data: Review, private formBuilder: FormBuilder) {
    this.documentForm = this.formBuilder.group({
      'review': this.reviewControl,
      'opinion': this.opinionMovieControl
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
