import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

import { IndexComponent } from '../index/index.component';
import { Sinid } from '../models/sinid';

import { DecimalPipe } from '@angular/common'; // para decimal pipe
import { Cart } from '../models/cart';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: any[] = [];

  cartProduct: Cart[];

  price: any[] = [];
  
  cargado: boolean = false;
  
  // productosCartera: Producto[] = [];

  cargando: boolean = true;

  duplicado: Producto[] = [];

  listaAdmin: Producto[] = [];

  isAdmin = false;

  //Para cargar usuario
  isLogged = false;
  nombreUsuario: string = '';


  filterPost = '';

  constructor(

    private cartService: CartService,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router,
    private DecimalPipe: DecimalPipe
  ) { }

  ngOnInit() {

    this.cargarProductos(); // Carga los productos


    this.isAdmin = this.tokenService.isAdmin();

    //  ---------

    let arrayprices: any[] = 
    [
    {
      price: 'price_1JRykpEDzo7bolN0pL6nAUjv'
    },
    {
      price: 'price_1JRwekEDzo7bolN0BFSLdzXs'
    }
  ]

  for(let pri of arrayprices){
    console.log(pri.price);
  }


  }

  // SistemaEuropeo(SistemaAmericano :number){ // Lo modifico
  //   let TerConComa = this.DecimalPipe.transform(SistemaAmericano, "1.2-2", 'es')
  //   return TerConComa;
  // }



  cargarProductos(): void {



    this.productoService.lista().subscribe(
      data => {
        this.productos = data; // lo carga en el Array que hemos creado, llamado productos

        console.log('imprimimos productos');
        console.log(this.productos);
        
        this.cargado = true;

      },
      err => {
        console.log(err);
      }
    );

  }


  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto eliminado', '', {
          timeOut: 3000
        });
        this.cargarProductos();

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
      }
    );
  }

  addCart(productoId: string, quantity: number){   // TIENE QUE RECIBIR EL PRODUCTID Y EL QUANTITY

    console.log('Este es el producto id: ' + productoId);
    console.log('Esta es la cantidad: ' + quantity);

  }



}
