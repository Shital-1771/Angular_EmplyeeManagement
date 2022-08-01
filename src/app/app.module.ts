import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpListComponent } from './component/emp-list/emp-list.component';
import { DeptListComponent } from './component/dept-list/dept-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
