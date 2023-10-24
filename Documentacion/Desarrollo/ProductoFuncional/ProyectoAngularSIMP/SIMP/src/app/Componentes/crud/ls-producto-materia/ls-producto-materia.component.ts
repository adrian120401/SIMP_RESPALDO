import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/servicios/Productos/productos.service';
import { ProductoMateriaModel } from 'src/app/Modelos/Producto_Materia.model';

@Component({
  selector: 'app-ls-producto-materia',
  templateUrl: './ls-producto-materia.component.html',
  styleUrls: ['./ls-producto-materia.component.css']
})
export class LsProductoMateriaComponent implements OnInit {

  UnidadBusqueda = ""
  productosMateria: Observable<ProductoMateriaModel[]> | undefined

  constructor(private productosMateriaService: ProductosService){}

  ngOnInit() {
      this.productosMateria = this.productosMateriaService.obtenerProductoMaterias();
  }

  borrarProductoMateria(IdProductoMateria: string){
    this.productosMateriaService.eliminarProductoMateria(IdProductoMateria).subscribe(data=>{
      console.log(data);
    })

    this.productosMateria = this.productosMateriaService.obtenerProductoMaterias();
  }

}
