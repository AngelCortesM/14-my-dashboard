import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name} `
  );
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016-09-14',
  });
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2016-09-14',
  };
  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('ChangeDetectionComponent: setTimeout');
    }, 3000);
  }
}
