/*
  <mat-card>

    <mat-card-title>	Card title
        <mat-card-subtitle>	Card subtitle
        <mat-card-content>	Primary card content. Intended for blocks of text
        <img mat-card-image>	Card image. Stretches the image to the container width
        <mat-card-actions>	Container for buttons at the bottom of the card
        <mat-card-footer>
  </mat-card>
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QueverComponent } from './quever/quever.component';
import { HomeComponent } from './home/home.component';
import { CambiodivComponent } from './cambiodiv/cambiodiv.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    QueverComponent,
    HomeComponent,
    CambiodivComponent,
    NavComponent,
    FooterComponent,
    TarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
