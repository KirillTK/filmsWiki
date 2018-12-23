import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatExpansionModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatDialogModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class MaterialComponentModule {
}
