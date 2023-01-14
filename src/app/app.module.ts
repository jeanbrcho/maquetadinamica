import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AcercadeModule } from './@components/acercade/acercade.module';
import { ContactoModule } from './@components/contacto/contacto.module';
import { EditaracercadeModule } from './@components/editaracercade/editaracercade.module';
import { EducacionModule } from './@components/educacion/educacion.module';
import { ExperienciaModule } from './@components/experiencia/experiencia.module';
import { HabilidadesModule } from './@components/habilidades/habilidades.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { ProyectosModule } from './@components/proyectos/proyectos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcercadeModule,
    ContactoModule,
    EditaracercadeModule,
    EducacionModule,
    ExperienciaModule,
    HabilidadesModule,
    NavbarModule,
    ProyectosModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
