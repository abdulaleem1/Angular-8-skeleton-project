import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './services/config.service';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER, useFactory: configFactory, deps: [ConfigService], multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TODO: Find a better place for this
export function configFactory(provider: ConfigService) {
  let configs = [
    provider.loadConfig(),
  ];

  let splashScreenExit = new Promise((resolve, reject) => {
    Promise.all(configs).then(() => {
      $('.splash-screen').animate({ top: '100%' },400,() => resolve(true));
    });
  });

  return () => splashScreenExit;
}
