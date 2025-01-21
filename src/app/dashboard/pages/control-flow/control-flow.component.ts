import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
type Grade = 'A' | 'B' | 'F';
@Component({
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public toggleContent() {
    this.showContent.update((value) => !value);
    this.grade.update((value) => (value === 'A' ? 'B' : 'A'));
  }
}
