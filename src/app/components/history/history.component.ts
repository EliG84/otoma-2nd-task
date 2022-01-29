import { HistoryService } from './history.service';
import { routingModel } from 'src/app/model/routing.model';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  dataSource$ = this.historyService.history_public$;
  columns = ['Amount', 'From', 'To', 'Date'];
  appRoutes = routingModel;
  dateFomat = 'dd/YY HH:mm';
  dateColumn = 'Date';
  amountColumn = 'Amount';

  constructor(private historyService: HistoryService) { }
}
