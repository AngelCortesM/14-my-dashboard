import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-output',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent {}
