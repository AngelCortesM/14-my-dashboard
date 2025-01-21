import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [TitleComponent],
  template: `
    <app-title title="View Trasition 2"></app-title>
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />
      <div
        style="view-transition-name: hero2"
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
      ></div>
    </section>
  `,
})
export default class ViewTransitionComponent {}
