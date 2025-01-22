import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheetModule,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OptionsButtomSheetComponent } from './ui/options-buttom-sheet/options-buttom-sheet.component';

@Component({
  selector: 'app-material',
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule,
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css',
})
export default class MaterialComponent {
  constructor(private readonly _bottomSheet: MatBottomSheet) {}
  openBottonSheet(): void {
    this._bottomSheet.open(OptionsButtomSheetComponent);
  }
}
