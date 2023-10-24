import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantillaProductoModel } from 'src/app/Modelos/Plantilla_Producto.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';

@Component({
  selector: 'app-plantilla-producto',
  templateUrl: './plantilla-producto.component.html',
  styleUrls: ['./plantilla-producto.component.css']
})
export class PlantillaProductoComponent {
  PlantillaBusqueda = ""
  plantillaProductos: Observable<PlantillaProductoModel[]> | undefined


  constructor(private plantillaService: ProductosService){}

  ngOnInit() {
    this.plantillaProductos = this.plantillaService.obtenerPlantillaProductos();
}

buscarPlantillaProducto(){
  this.plantillaProductos = this.plantillaService.obtenerPlantillaProducto(this.PlantillaBusqueda)
}

borrarPlantillaProducto(id:string){
  this.plantillaService.eliminarPlantillaProducto(id).subscribe(data=>{
    console.log(data);
  })

  this.plantillaProductos = this.plantillaService.obtenerPlantillaProductos()
}
}
