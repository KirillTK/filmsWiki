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
  MatDatepickerModule, MatNativeDateModule, MatSelectModule
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
    MatSelectModule
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
    MatSelectModule
  ]
})
export class MaterialComponentModule {
}
