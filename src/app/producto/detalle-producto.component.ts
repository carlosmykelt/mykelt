import { Cart } from './../models/cart';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { CartService } from '../service/cart.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any[] = [];

  price: any[] = [];

  quantity: number = 1;

  cargado: boolean = false;

  // producto: Producto = null;

  cargando: boolean = true;

  isLogged = false;  // variable de si está logueado

  constructor(
    private cartService: CartService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private tokenService: TokenService
  ) {

  }

  ngOnInit() {

    this.isLogged = this.tokenService.isLogged();

    const id = this.activatedRoute.snapshot.params.idProduct;

    console.log('Esto es lo que sale del snapshot params: ' + id);

    this.productoService.detail(id).subscribe(
      data => {
  
        this.producto = data;

        console.log('imprimiendo detalles')
        console.log(this.producto)

        this.cargado = true;


      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
        this.volver();
      }
    );


  }


  volver(): void {
    this.router.navigate(['/productos']);
  }


  resta(){
 
    this.quantity = this.quantity-1;


  }


  suma(){

    this.quantity = this.quantity+1;

  }



  
  addCart(productoId: string, quantity: number){   // TIENE QUE RECIBIR EL PRODUCTID Y EL QUANTITY

    console.log('Este es el producto id: ' + productoId);
    console.log('Esta es la cantidad: ' + quantity);



    this.productoService.price(productoId).subscribe(
      data => {
      

        console.log('imprimimos price');
        console.log(data.data[0].id);

        let idprice = data.data[0].id;

        this.crear(productoId, idprice, quantity);
        

      //  this.checkout(PriceId);

      },
      err => {
        console.log(err);
      }
    );



  }


  crear(productoId, idprice, quantity){

    const cart = new Cart(productoId, idprice, quantity);
    this.cartService.save(cart).subscribe(
      data => {
        this.toastr.success('Añadido a la cesta', '', {
          timeOut: 3000
        });
     
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });

      }
    );

  }

    // ------- COMENTO ESTOS DOS MÉTODOS, QUE IRÁN EN EL COMPONENTE DEL CARRITO ------

  priceId(productoId: string){

    // console.log(productoId)

    this.productoService.price(productoId).subscribe(
      data => {
       

        console.log('imprimimos price');
        console.log(data[0].id);

       // this.idprice = this.price.data[0].id;

        
        

      //  this.checkout(PriceId);

      },
      err => {
        console.log(err);
      }
    );

    
  }

}
