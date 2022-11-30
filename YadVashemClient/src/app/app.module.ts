import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonyModule } from './testimony/testimony.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'src/menu/menu.module';
// import { TabsModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestimonyModule,
    // TabsModule,
    BrowserAnimationsModule,
    MenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
