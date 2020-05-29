import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1stComponent } from './child1st/child1st.component';
import { FormsModule } from '@angular/forms';
import { DeleteWithNwithoutRefreshingComponent } from './delete-with-nwithout-refreshing/delete-with-nwithout-refreshing.component';
import { CreatWithNWithoutRfreshingComponent } from './creat-with-nwithout-rfreshing/creat-with-nwithout-rfreshing.component';
import { CreatWithourefreshComponent } from './creat-withourefresh/creat-withourefresh.component';
import { UpdateWithRefreshComponent } from './update-with-refresh/update-with-refresh.component';
import { UpdateMainComponent } from './update-main/update-main.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1stComponent,
    DeleteWithNwithoutRefreshingComponent,
    CreatWithNWithoutRfreshingComponent,
    CreatWithourefreshComponent,
    UpdateWithRefreshComponent,
    UpdateMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
