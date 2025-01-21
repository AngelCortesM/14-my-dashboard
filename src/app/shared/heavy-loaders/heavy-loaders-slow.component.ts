import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `
    <div class="heavy-loaders-slow">
      <section [ngClass]="['w-full h-[600px]', cssClass]">
        <h1>Heavy Loaders Slow</h1>
        <p>heavy-loaders-slow works!</p>
      </section>
    </div>
  `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) public cssClass!: string;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
  }
}
