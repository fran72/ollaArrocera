import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroImagenPipe } from './filtro-imagen.pipe';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [FiltroImagenPipe, ImagenPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
