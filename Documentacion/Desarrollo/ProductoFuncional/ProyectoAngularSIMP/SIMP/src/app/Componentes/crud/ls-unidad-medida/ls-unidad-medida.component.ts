import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
import { UnidadMedidaModel } from 'src/app/Modelos/Unidad_Medida.model';

@Component({
  selector: 'app-ls-unidad-medida',
  templateUrl: './ls-unidad-medida.component.html',
  styleUrls: ['./ls-unidad-medida.component.css']
})
export class LsUnidadMedidaComponent implements OnInit {

  UnidadBusqueda = ""
  unidades: Observable<UnidadMedidaModel[]> | undefined

  constructor(private unidadService: ProductosService){}

  ngOnInit() {
      this.unidades = this.unidadService.obtenerUnidadMedidas();
  }

  buscarUnidadMedida(){
    this.unidades = this.unidadService.obtenerUnidadMedida(this.UnidadBusqueda)
  }

  borrarUnidadMedida(id:string){
    this.unidadService.eliminarUnidadMedida(id).subscribe(data=>{
      console.log(data);
    })

    this.unidades = this.unidadService.obtenerUnidadMedidas()
  }

}
