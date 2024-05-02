import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatSidenavModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
