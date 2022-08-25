import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextFieldType } from '@shared/components/text-field';
import { Observable, Subject, take } from 'rxjs';
import { AccountService } from '@services/account.service';
import { User } from '@core/models';
import { isEmpty } from '@core/utils/object.util';
import { LoadingService } from '@core/services';
import { SliderItem } from '@shared/components/slider';
import { HomeSliderSlidesMock } from '@/app/mocks';
import { AuthService } from '@features/auth/services/auth.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  readonly textFieldType = TextFieldType;

  slides: SliderItem[] = HomeSliderSlidesMock;

  get currentUser$(): Observable<User> {
    return this.accountService.currentUser$;
  }

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
  ) {}

  ngOnInit() {
    this.loadingService.isLoading = true;
    this.fetchCurrentUser()
      .pipe(take(1))
      .subscribe(() => (this.loadingService.isLoading = false));
  }

  private fetchCurrentUser(): Observable<User> {
    console.log(this.accountService.currentUser);
    console.log(isEmpty(this.accountService.currentUser));
    return isEmpty(this.accountService.currentUser) && this.authService.authorized
      ? this.accountService.getCurrentUser()
      : this.accountService.currentUser$;
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }
}
