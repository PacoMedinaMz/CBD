
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WindowsdbComponent } from './windowsdb/windowsdb.component';
import { LinuxdbComponent } from './linuxdb/linuxdb.component';
import { AltaswinComponent } from './altaswin/altaswin.component';
import { BajaswinComponent } from './bajaswin/bajaswin.component';
import { ConsultaswinComponent } from './consultaswin/consultaswin.component';
import { CambioswinComponent } from './cambioswin/cambioswin.component';
import { AltaslnxComponent } from './altaslnx/altaslnx.component';
import { BajaslnxComponent } from './bajaslnx/bajaslnx.component';
import { CambioslnxComponent } from './cambioslnx/cambioslnx.component';
import { ConsultaslnxComponent } from './consultaslnx/consultaslnx.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WindowsdbComponent,
    LinuxdbComponent,
    AltaswinComponent,
    BajaswinComponent,
    ConsultaswinComponent,
    CambioswinComponent,
    AltaslnxComponent,
    BajaslnxComponent,
    CambioslnxComponent,
    ConsultaslnxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
