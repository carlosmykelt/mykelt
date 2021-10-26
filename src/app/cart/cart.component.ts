import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../service/cart.service';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

  //Prueba stripe
  declare var Stripe : any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  precio: any[] = [];

  carrito: Cart[] = []; // Aquí se carga los productos de carrito que tenemos en la db

  cartProducts: any[] = [];

  PricesArray: any[] = [];

  cargado: boolean = false;

  isLogged = false;

  livemode: boolean = false;

  // units: number = [];

  //Prueba para calcular precio
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
    private tokenService: TokenService,
    private titleService: Title,
    // private env: environment

  ) { }



  ngOnInit(): void {

    this.titleService.setTitle('Cesta | MYKELT');



    this.isLogged = this.tokenService.isLogged();

    console.log(this.isLogged)

    this.cargarCarrito();

  }

  boxChange(price: number, quantity: number, check: boolean){
    //Comprueba si este producto tiene el check
    //Si lo tiene, usa el método totalprice para añadirlo
    //Si no lo tiene, no lo añadas
// price
    console.log(price);
    console.log(quantity);
    console.log(check);
    

    if(check){
      console.log('check si');
      
      this.TotalPrice(price, quantity)
    }else{
      this.RemoveOfTotalPrice(price, quantity)
      
    }
  }


  TotalPrice(precio, cantidad) {

    // Modificamos la variable que muestra el precio total
    this.PrecioTotal = this.PrecioTotal + (Number(precio) * Number(cantidad))

    // this.PrecioTotalDecimal = this.DecimalPipe.transform(this.PrecioTotal, "1.2-2", 'es')

    console.log('tiene el precio?')
    console.log(this.PrecioTotal)

  }

  RemoveOfTotalPrice(precio, cantidad) {

    // Modificamos la variable que muestra el precio total
    this.PrecioTotal = this.PrecioTotal - (Number(precio) * Number(cantidad))

 

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


              this.PrecioTotal = 0;
              // this.TotalPrice(data.metadata.price, data.quantity);  Comentamos esta para ponerla en el check

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


        

        // this.PrecioTotal = this.PrecioTotal - Number(data.metadata.price);   // Restamos 1 al precio total

        console.log('Con la resta sería: ' + this.PrecioTotal)

        //Modificamos el array que se enviará al checkout
       for (let cart of this.carrito) {
     
         if(cart.idProduct == idproduct){
           cart.quantity = cart.quantity - 1
         }
      }


    // Recorremos el producto. Si el id coincide y además, el check es true, restamos al cuadro del precio
    for(let cartProduct of this.cartProducts){
      if(cartProduct.id == idproduct && cartProduct.livemode == true){
        //Resta al cuadro, el precio*quantity
        this.PrecioTotal = this.PrecioTotal - Number(data.metadata.price);
      }

    }

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



    this.PrecioSuma(idproduct); // Método para modificar las unidades que se enviarán al checkout y el precio de la vista
  }


  PrecioSuma(idproduct) {
  
    console.log(this.carrito);
    this.productoService.detail(idproduct).subscribe(
      data => {

       //Modificamos el array que se enviará al checkout
       for (let cart of this.carrito) {
        
          if(cart.idProduct == idproduct){
            cart.quantity = cart.quantity + 1
          }
       }

       // Recorremos el producto. Si el id coincide y además, el check es true, sumamos al cuadro del precio
       for(let cartProduct of this.cartProducts){
        if(cartProduct.id == idproduct && cartProduct.livemode == true){
          //Suma al cuadro, el precio*quantity
          this.PrecioTotal = this.PrecioTotal + Number(data.metadata.price);
        }
  
      }

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

      // Por cada registro del carrito, probamos todos los cartproducts
      for (let cartProduct of this.cartProducts){
        if(cartProduct.idDB == cart.id){
          console.log(cartProduct.idDB + ' ES IGUAL A ' + cart.id);
          
          if(cartProduct.livemode == true){
            console.log('ADEMÁS DE IGUAL, EL CHECK ES TRUE');
            
            this.PricesArray.push({ price: cart.idPrice, quantity: cart.quantity })
          }else{
            console.log(cartProduct.idDB + 'ERA IGUAL PERO NO ERA TRUE');
            
          }
          
        }
      }
      
      //Ve al cartProducts cuyo idDB es el id de carrito  --> bucle cartProducts, if idDB igual a cart.id. Continúa
      // if cartProducts.check es true, continúa -> hacemos el push
      


      // this.PricesArray.push({ price: cart.idPrice, quantity: cart.quantity })
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
          // this.precio = data; // lo carga en el Array que hemos creado, llamado productos


          // console.log(this.price.data[0].id);

          cart.idPrice = data[0].id;

          this.PricesArray.push({ price: cart.idPrice, quantity: cart.quantity })

        },
        err => {
          console.log(err);
        }
      );


    }
    this.checkout(this.PricesArray)

  }



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
    var stripe = Stripe(environment.stripeId);

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
      // successUrl: window.location.protocol + '//http://localhost:4200/productos',
      // cancelUrl: window.location.protocol + '//http://localhost:4200/cart',
      successUrl: environment.dominio + 'productos',
      cancelUrl: environment.dominio + 'cart',
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
