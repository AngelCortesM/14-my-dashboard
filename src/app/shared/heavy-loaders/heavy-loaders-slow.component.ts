import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  template: `
    <div class="heavy-loaders-slow">
      <h1>Heavy Loaders Slow</h1>
      <p>heavy-loaders-slow works!</p>
    </div>
  `,
  styles: [
    `
      .heavy-loaders-slow {
        background: #f9f9f9;
        padding: 20px;
        text-align: center;
      }
    `,
  ],
})
export class HeavyLoadersSlowComponent {}
