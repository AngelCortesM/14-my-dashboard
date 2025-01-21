import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';

@Component({
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titlelabel = computed(() => {
    if (this.user()) {
      return `User: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return 'Informacion del usurio';
  });

  // constructor() {
  //   this.route.params.subscribe((params) => {
  //     console.log(params);
  //   });
  // }
}
