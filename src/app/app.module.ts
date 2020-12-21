import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableWorkerComponent } from './ui/table-worker/table-worker.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { FormsModule } from '@angular/forms';
import { EditformWorkerComponent } from './ui/editform-worker/editform-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkerComponent,
    AddformWorkerComponent,
    EditformWorkerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
