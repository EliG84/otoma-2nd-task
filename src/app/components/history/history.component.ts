import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { routingModel } from 'src/app/model/routing.model';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnDestroy {

  dataSource$ = this.historyService.history_public$;
  columns = ['Amount', 'From', 'To', 'Date'];
  appRoutes = routingModel;
  dateFomat = 'dd/YY HH:mm';
  dateColumn = 'Date';

  constructor(private historyService: HistoryService) { }

  ngOnDestroy(): void {
      this.historyService.overwriteSessionStorage();
  }

}
