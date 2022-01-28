import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveTab, routingModel } from './model/routing.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: routingModel.CONVERTER,
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: routingModel.CONVERTER,
        loadChildren: () => import('./components/converter/converter.module').then((m) => m.ConverterModule),
        data: {activeTab: ActiveTab.CONVERTER}
      },
      {
        path: routingModel.HISTORY,
        loadChildren: () => import('./components/history/history.module').then((m) => m.HistoryModule),
        data: {activeTab: ActiveTab.HISTORY}
      },
      {
        path: '**',
        redirectTo: routingModel.CONVERTER
      }
    ],
  },
  {
    path: '**',
    redirectTo: routingModel.CONVERTER
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
