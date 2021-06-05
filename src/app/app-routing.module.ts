import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { FooterComponent } from '../app/footer/footer.component';
import {WindowsdbComponent} from '../app/windowsdb/windowsdb.component';
import {LinuxdbComponent} from '../app/linuxdb/linuxdb.component';

//windows
import {AltaswinComponent} from '../app/altaswin/altaswin.component';
import {BajaswinComponent} from '../app/bajaswin/bajaswin.component';
import {CambioswinComponent} from '../app/cambioswin/cambioswin.component';
import {ConsultaswinComponent} from '../app/consultaswin/consultaswin.component';

//linux
import {AltaslnxComponent} from '../app/altaslnx/altaslnx.component';
import {BajaslnxComponent} from '../app/bajaslnx/bajaslnx.component';
import {CambioslnxComponent} from '../app/cambioslnx/cambioslnx.component';
import {ConsultaslnxComponent} from '../app/consultaslnx/consultaslnx.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'wdb', component: WindowsdbComponent },
  { path: 'ldb', component: LinuxdbComponent },

  //windows
  { path: 'altaswin', component: AltaswinComponent },
  { path: 'bajaswin', component: BajaswinComponent },
  { path: 'cambioswin', component: CambioswinComponent },
  { path: 'consultaswin', component: ConsultaswinComponent },

  //linux
  { path: 'altaslnx', component: AltaslnxComponent },
  { path: 'bajaslnx', component: BajaslnxComponent },
  { path: 'cambioslnx', component: CambioslnxComponent },
  { path: 'consultaslnx', component: ConsultaslnxComponent },
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

