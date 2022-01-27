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
        loadChildren: () => import('./components/converter/converter-routing.module').then((m) => m.ConverterRoutingModule),
        data: {activeTab: ActiveTab.CONVERTER}
      },
      {
        path: routingModel.HISTORY,
        loadChildren: () => import('./components/history/history-routing.module').then((m) => m.HistoryRoutingModule),
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
