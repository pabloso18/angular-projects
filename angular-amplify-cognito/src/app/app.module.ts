import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular'

import { AppRoutes } from './app.routing';

import { FullComponent } from './layout/full/full.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AmplifyAngularModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
