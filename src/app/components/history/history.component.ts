import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnDestroy {

  history$ = this.historyService.history_public$;

  constructor(private historyService: HistoryService) { }

  ngOnDestroy(): void {
      this.historyService.overwriteSessionStorage();
  }

}
