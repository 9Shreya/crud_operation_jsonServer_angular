import { UpdateMainComponent } from './update-main/update-main.component';
import { UpdateWithRefreshComponent } from './update-with-refresh/update-with-refresh.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1stComponent } from './child1st/child1st.component';
import { DeleteWithNwithoutRefreshingComponent } from './delete-with-nwithout-refreshing/delete-with-nwithout-refreshing.component';
import { CreatWithNWithoutRfreshingComponent } from './creat-with-nwithout-rfreshing/creat-with-nwithout-rfreshing.component';
import { CreatWithourefreshComponent } from './creat-withourefresh/creat-withourefresh.component';

const routes: Routes = [
  {
    path: 'child1st',
    component: Child1stComponent,
  },
  {
    path: 'delete',
    component: DeleteWithNwithoutRefreshingComponent,
  },
  {
    path: 'creat',
    component: CreatWithNWithoutRfreshingComponent,
  },
  {
    path: 'creaat',
    component: CreatWithourefreshComponent,
  },
  {
    path: 'update',
    component: UpdateWithRefreshComponent,
  },
  {
    path: 'modify',
    component: UpdateMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
