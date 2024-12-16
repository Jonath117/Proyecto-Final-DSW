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
import { CrearProyectoComponent } from './subir-archivo/subir-archivo.component';
import { VerArchivosComponent } from './ver-archivos-pendientes/ver-archivos-pendientes.component';
import { VerDocumentoComponent } from './ver-documento/ver-documento.component';
import { AuthService } from '../services/auth.service';
import { AreasConocimientoService } from '../services/areas-conocimiento.service';
import { ProyectosRecientes } from './proyectos-recientes/proyectos-recientes.component';
import { CommonModule } from '@angular/common';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { VerArchivosAdminComponent } from './ver-pendientes-admin/ver-pendientes-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'busqueda-avanzada',component: BusquedaAvanzadaComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'subir-archivo', component: CrearProyectoComponent},
  { path: 'ver-archivos-pendientes', component: VerArchivosComponent},
  { path: 'ver-documento/:id', component: VerDocumentoComponent},
  { path: 'proyectos-recientes', component: ProyectosRecientes},
  { path: 'admin-usuarios', component: AdminUsuariosComponent},
  { path: 'ver-pendientes-admin', component: VerArchivosAdminComponent }
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
    CrearProyectoComponent,
    VerArchivosComponent,
    VerDocumentoComponent,
    ProyectosRecientes,
    AdminUsuariosComponent,
    VerArchivosAdminComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AreasConocimientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
