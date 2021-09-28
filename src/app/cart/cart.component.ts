import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../service/cart.service';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  price: any[] = [];

  carrito: Cart[] = []; // Aquí se carga los productos de carrito que tenemos en la db

  cartProducts: any[] = [];

  PricesArray: any[] = [];

  cargado: boolean = false;

  isLogged = false;

  // units: number = [];

  //Prueba para calcula precio
  ShowPrice: number;
  Sumaprecios: any[] = [];
  PrecioTotal: number = 0;
  PrecioTotalDecimal: string;

  //-----

  constructor(
    private cartService: CartService,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
    private tokenService: TokenService

  ) { }

  ngOnInit(): void {

    this.isLogged = this.tokenService.isLogged();

    console.log(this.isLogged)

    this.cargarCarrito();

  }

  TotalPrice(precio, cantidad) {

    // Modificamos la variable que muestra el precio total
    this.PrecioTotal = this.PrecioTotal + (Number(precio) * Number(cantidad))

    // this.PrecioTotalDecimal = this.DecimalPipe.transform(this.PrecioTotal, "1.2-2", 'es')

    console.log('tiene el precio?')
    console.log(this.PrecioTotal)

  }

  cargarCarrito(): void {

    this.cartService.lista().subscribe(
      data => {
        this.carrito = data; // Nos devuelve el cart de la db

        this.Sumaprecios = data;
        console.log('Este es el carrito: ')
        console.log(this.carrito);

        //    this.cargando = false;

        // Lo recorremos para sacar el nombre, precio. Además, añadimos a este array el quantity y el id.
        // Para sacar el nombre y precio, es necesario hacer un subscribe a produtoService.detail

        for (let nombre of this.carrito) {

          const idp = nombre.idProduct;

          this.productoService.detail(idp).subscribe(
            data => {

              data.quantity = nombre.quantity;
              data.idDB = nombre.id;

              this.cartProducts.push(data);   // Tenemos un array con todos los datos de la API + quantity + nombre

              this.TotalPrice(data.metadata.price, data.quantity);

              // // Modificamos la variable que muestra el precio total
              // this.PrecioTotal = this.PrecioTotal + (Number(data.metadata.price) * Number(data.quantity))

              // console.log('tiene el precio?')
              // console.log(this.PrecioTotal)


            },
            err => {
              this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
              });

            }
          );

          this.cargado = true;


        }

      },
      err => {
        console.log(err);
      }
    );

  }

  imprimeProducto(): void {
    console.log('ESTO ES EL IMPRIME: ')
    console.log(this.cartProducts)

  }

  resta(idproduct: string, quantity: number) {

    // quiero coger el array cartProducts, acceder al producto indicado y restarle/sumarle una unidad
    // Esto lo hago para que se muestre la modificación de la unidad directamente

    quantity = quantity - 1;

    // paso 1: acceder al array que tiene como idProduct, idproduct
    let coincide = this.cartProducts.find(producto => producto.id == idproduct);

    // paso 2: sustituir su quantity
    coincide.quantity = quantity;


    // Llama al servidor para modificar el quantity en la base de datos.

    const cart = new Cart(idproduct, 'pruebaid', quantity);
    this.cartService.save(cart).subscribe(
      data => {


      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });

      }
    );

    this.PrecioResta(idproduct); // Restamos 1 al precio total

  }



  PrecioResta(idproduct) {
    this.productoService.detail(idproduct).subscribe(
      data => {

        this.PrecioTotal = this.PrecioTotal - Number(data.metadata.price);   // Restamos 1 al precio total

        console.log('Con la resta sería: ' + this.PrecioTotal)

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });

      }
    );
  }


  suma(idproduct: string, quantity: number) {

    // Muestra directamente en la vista el cambio de las unidades

    quantity = quantity + 1;

    let coincide = this.cartProducts.find(producto => producto.id == idproduct);

    coincide.quantity = quantity;


    // Llama al servidor para modificar el quantity en la base de datos.

    const cart = new Cart(idproduct, 'pruebaid', quantity);
    this.cartService.save(cart).subscribe(
      data => {
        // this.toastr.success('Añadido a carrito', '', {
        //   timeOut: 3000
        // });
        // this.router.navigate(['/productos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });

      }
    );

    this.PrecioSuma(idproduct); // Sumamos 1 al precio total que se muestra en la vista
  }


  PrecioSuma(idproduct) {
    this.productoService.detail(idproduct).subscribe(
      data => {

        this.PrecioTotal = this.PrecioTotal + Number(data.metadata.price);   // Sumamos 1 al precio total que se muestra en la vista

        console.log('Con la resta sería: ' + this.PrecioTotal)

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });

      }
    );
  }



  pagar() {

    for (let cart of this.carrito) {

      // console.log(cart.metadata.price)

      this.PricesArray.push({ price: cart.idPrice, quantity: cart.quantity })
    }

    console.log('imprimimos el pricesarray')
    //console.log(this.PricesArray)

    this.checkout(this.PricesArray)

  }


  priceId() {

    // console.log(productoId)

    for (let cart of this.cartProducts) {


      // console.log(cart.id)

      this.productoService.price(cart.id).subscribe(
        data => {
          this.price = data; // lo carga en el Array que hemos creado, llamado productos


          // console.log(this.price.data[0].id);

          cart.idPrice = this.price.data[0].id;

          this.PricesArray.push({ price: cart.idPrice, quantity: cart.quantity })

        },
        err => {
          console.log(err);
        }
      );


    }
    this.checkout(this.PricesArray)

  }
  // this.productoService.price(productoId).subscribe(
  //   data => {
  //     this.price = data; // lo carga en el Array que hemos creado, llamado productos

  //     console.log('imprimimos price');
  //     console.log(this.price.data[0].id);

  //     let PriceId = this.price.data[0].id;

  //     this.checkout(PriceId);

  //   },
  //   err => {
  //     console.log(err);
  //   }
  // );




  pruebaArray() {
    let cartArray: any[] = [];
    cartArray.push({ price: 'price_1JRykpEDzo7bolN0pL6nAUjv', quantity: 1 }, { price: 'price_1JRwekEDzo7bolN0BFSLdzXs', quantity: 1 })
    console.log('imprimimos el cartArray')
    console.log(cartArray)

    //  this.checkout(cartArray);
    // console.log(pricesArray)
  }


  checkout(pricesArray) {

    // console.log(pricesArray)

    // console.log('llega a función checkout y el id es: ' + PriceId)
    var stripe = stripe('pk_test_51JRiEIEDzo7bolN088LIgi5eh0JTbRj3EurNrzaXPvxNxsahf4UNZFIhYIoSEBoa9Hg9KIuyCXozhsugpXWGToyW00N8wnTgEu');

    // var checkoutButton = document.getElementById('checkout-button-price_1JRykpEDzo7bolN0pL6nAUjv');
    // checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */


    stripe.redirectToCheckout({
      lineItems: pricesArray
      // [
      //   {price: 'price_1JRykpEDzo7bolN0pL6nAUjv', quantity: 1},
      //   {price: 'price_1JRwekEDzo7bolN0BFSLdzXs', quantity: 1}
      // ]
      ,
      //Esto sería la dirección de la tarjeta, de momento no la necesito
      // billingAddressCollection: 'required', 
      shippingAddressCollection:
      {
        allowedCountries: ['ES', 'US', 'CH', 'DE', 'GB', 'NZ'],
      },
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: window.location.protocol + '//http://localhost:4200/lista',
      cancelUrl: window.location.protocol + '//http://localhost:4200/canceled',
    })
      .then(function (result) {
        if (result.error) {
          /*
           * If `redirectToCheckout` fails due to a browser or network
           * error, display the localized error message to your customer.
           */
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    // });
  }

  comprobar(id: number) {
    console.log(id)
  }

  borrar(id: number) {

    this.cartService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto eliminado del carrito', '', {
          timeOut: 3000
        });
        this.cargarCarrito();
        window.location.reload();


      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
      }
    );
  }

}
