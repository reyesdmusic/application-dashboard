import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApplicationsTableComponent } from './components/applications-table/applications-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplicationsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
