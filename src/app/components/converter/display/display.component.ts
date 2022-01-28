import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConvertionResponse } from 'src/app/model/data.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent {

  @Input()
  data: ConvertionResponse | null | undefined;

}
