import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CentralComponent } from './central/central.component';
import { NavbarComponent } from './compartidos/navbar/navbar.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { InventarioGeneralComponent } from './Componentes/TablasVista/inventario-general/inventario-general.component';
import { LoginComponent } from './Componentes/login/login.component';
import { EntradasInventarioComponent } from './Componentes/TablasVista/entradas-inventario/entradas-inventario.component';
import { PlantillaProductoComponent } from './Componentes/TablasVista/plantilla-producto/plantilla-producto.component';
import { SalidasComponent } from './Componentes/TablasVista/salidas/salidas.component';
import { ProductoMateriaPrimaComponent } from './Componentes/TablasVista/producto-materia-prima/producto-materia-prima.component';

import { NotificacionesComponent } from './Componentes/notificaciones/notificaciones.component';
import { FormularioUsuariosComponent } from './Componentes/TablasVista/usuarios/UsuariosC/formulario-usuarios/formulario-usuarios.component';
import { RolComponent } from './Componentes/TablasVista/usuarios/RolC/TablaRol/rol.component';
import { EstadoComponent } from './Componentes/TablasVista/usuarios/Estadoc/TablaEstado/estado.component';
import { RolFormularioComponent } from './Componentes/TablasVista/usuarios/RolC/rol-formulario/rol-formulario.component';
import { EstadoFormularioComponent } from './Componentes/TablasVista/usuarios/Estadoc/estado-formulario/estado-formulario.component';
import { UsuariosComponent } from './Componentes/TablasVista/usuarios/UsuariosC/TablaUsuarios/usuarios.component';
import { EdProveedorComponent } from './Componentes/crud/ed-proveedor/ed-proveedor.component';
import { LsProveedorComponent } from './Componentes/crud/ls-proveedor/ls-proveedor.component';
import { LsMotivoComponent } from './Componentes/crud/ls-motivo/ls-motivo.component';
import { EdMotivoComponent } from './Componentes/crud/ed-motivo/ed-motivo.component';
import { LsUbicacionComponent } from './Componentes/crud/ls-ubicacion/ls-ubicacion.component';
import { EdUbicacionComponent } from './Componentes/crud/ed-ubicacion/ed-ubicacion.component';
import { LsExistenciasComponent } from './Componentes/crud/ls-existencias/ls-existencias.component';
import { EdExistenciasComponent } from './Componentes/crud/ed-existencias/ed-existencias.component';
import { LsMovimientoComponent } from './Componentes/crud/ls-movimiento/ls-movimiento.component';
import { EdMovimientoComponent } from './Componentes/crud/ed-movimiento/ed-movimiento.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InventarioGeneralComponent,
    LoginComponent,
    EntradasInventarioComponent,
    PlantillaProductoComponent,
    SalidasComponent,
    ProductoMateriaPrimaComponent,
    UsuariosComponent,
    NotificacionesComponent,
    CentralComponent,
    FormularioUsuariosComponent,
    RolComponent,
    EstadoComponent,
    RolFormularioComponent,
    EstadoFormularioComponent,
    EdProveedorComponent,
    LsProveedorComponent,
    LsMotivoComponent,
    EdMotivoComponent,
    LsUbicacionComponent,
    EdUbicacionComponent,
    LsExistenciasComponent,
    EdExistenciasComponent,
    LsMovimientoComponent,
    EdMovimientoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
