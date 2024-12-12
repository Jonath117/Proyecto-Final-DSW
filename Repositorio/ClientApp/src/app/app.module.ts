import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BusquedaAvanzadaComponent } from './busqueda-avanzada/busqueda-avanzada.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { VerArchivosComponent } from './ver-archivos/ver-archivos.component';
import { VerDocumentoComponent } from './ver-documento/ver-documento.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'subir-archivo', component: SubirArchivoComponent },
  { path: 'perfil', component: PerfilComponent }, // Nueva ruta
  { path: '', redirectTo: '/subir-archivo', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BusquedaAvanzadaComponent,
    IniciarSesionComponent,
    PerfilComponent,
    RegistrarseComponent,
    SubirArchivoComponent,
    VerArchivosComponent,
    VerDocumentoComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'busqueda-avanzada',component: BusquedaAvanzadaComponent},
      { path: 'iniciar-sesion', component: IniciarSesionComponent},
      { path: 'perfil', component: PerfilComponent},
      { path: 'registrarse', component: RegistrarseComponent},
      { path: 'subir-archivo', component: SubirArchivoComponent},
      { path: 'ver-archivos', component: VerArchivosComponent},
      { path: 'ver-documento', component: VerDocumentoComponent}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
