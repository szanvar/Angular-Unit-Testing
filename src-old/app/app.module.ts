import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { MarvellouspipePipe } from './marvellouspipe.pipe';
import { DataDirective } from './data.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MarvellouspipePipe,
    DataDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
