import { activeTab } from 'src/app/app.consts';
import { filter, map, Observable, skip } from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActiveTab, routingModel, routingNames } from '../../../model/routing.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  routes = [
    {
      route: routingModel.CONVERTER,
      name: routingNames.CONVERTER,
    },
    {
      route: routingModel.HISTORY,
      name: routingNames.HISTORY,
    }
  ];
}
