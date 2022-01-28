import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { ActiveTab, routingModel, routingNames } from '../../../model/routing.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  routes$: Observable<{route: string, name: string, active: boolean}[]> | undefined;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.routes$ = this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd && event.snapshot.data['activeTab']),
      map((event) => {
      return [
        {
          route: routingModel.CONVERTER,
          name: routingNames.CONVERTER,
          active: (event as ActivationEnd).snapshot.data['activeTab'] === ActiveTab.CONVERTER,
        },
        {
          route: routingModel.HISTORY,
          name: routingNames.HISTORY,
          active: (event as ActivationEnd).snapshot.data['activeTab'] === ActiveTab.HISTORY,
        }
      ]
    }))
  }
}
