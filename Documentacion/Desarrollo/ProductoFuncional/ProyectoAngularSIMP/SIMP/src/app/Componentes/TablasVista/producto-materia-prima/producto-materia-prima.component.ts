import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoMateriaPrimaModel } from 'src/app/Modelos/Producto_Materia_Prima.model';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
@Component({
  selector: 'app-producto-materia-prima',
  templateUrl: './producto-materia-prima.component.html',
  styleUrls: ['./producto-materia-prima.component.css']
})
export class ProductoMateriaPrimaComponent {
  ProductosMateriaPrimaBusqueda = "";
  ProductosMateriaPrimaModel: Observable<ProductoMateriaPrimaModel[]> | undefined;


  constructor(
    private ProductosService: ProductosService) { }



  ngOnInit() {
    this.ProductosMateriaPrimaModel = this.ProductosService.obtenerProductosMateriaPrima();
  }

  buscarProductoMateriaPrima(){
    this.ProductosMateriaPrimaModel = this.ProductosService.obtenerProductoMateriaPrima(this.ProductosMateriaPrimaBusqueda)
  }

  borrarProductoMateriaPrima(id: string){
    this.ProductosService.eliminarProductoMateriaPrima(id).subscribe((data) => {
      console.log(data)
    })

    this.ProductosMateriaPrimaModel = this.ProductosService.obtenerProductosMateriaPrima();
  }
}
