(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-menu></app-menu> No lo ponemos aquí porque queremos que se recargue con botones distintos dependiendo de si está logueado o no -->\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n    <div class=\"container mb-5 text-center h1 mt-5\">\r\n        Inicia sesión o crea una cuenta con tu correo \r\n    </div>\r\n\r\n    <div class=\"container mb-5 d-flex justify-content-center\">\r\n        <div class=\"card col-lg-5 mt-5 mx-0 px-0\">\r\n            <div class=\"card-header\">\r\n                <ul class=\"nav nav-tabs justify-content-center\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" routerLink=\"/login\">Iniciar Sesión</a>\r\n                        <!-- va a login, tiene el active porque está en esta pestaña,\r\n                    en el registro tendrá el active en la etiqueta de registro -->\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" routerLink=\"/registro\">Crear Cuenta</a> <!-- va a registro -->\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #f=\"ngForm\" (ngSubmit)=\"onLogin()\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email</label>\r\n                        <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\"\r\n                            [(ngModel)]=\"email\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Contraseña</label>\r\n                        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"password\"\r\n                            required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\r\n                        <div *ngIf=\"cargandoLogin==true\" class=\"text-center my-5\"> \r\n                            <div class=\"spinner-border\" role=\"status\"></div> \r\n                        </div>\r\n\r\n                        <button class=\"btn boton shadow btn-block\" [disabled]=\"!f.valid\">\r\n                            <i class=\"fas fa-sign-in-alt\"></i> Iniciar Sesión</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n<div class=\"container mb-5 text-center h1 mt-5\">\r\n  Inicia sesión o crea una cuenta con tu correo \r\n</div>\r\n\r\n  <div class=\"container mb-5 d-flex justify-content-center\">\r\n    <div class=\"card col-lg-5 mt-5 mx-0 px-0\">\r\n      <div class=\"card-header \">\r\n        <ul class=\"nav nav-tabs justify-content-center\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/login\">Iniciar Sesión</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" routerLink=\"/registro\">Crear Cuenta</a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <!-- formulario de login -->\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onRegister()\" novalidate>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Nombre</label>\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" [(ngModel)]=\"name\" required>\r\n            <!-- ngModel, misma variable que en login.c.ts.\r\n                  Es required -->\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Contraseña</label>\r\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"password\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password_confirmation\">Confirmación</label>\r\n            <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control\" [(ngModel)]=\"password_confirmation\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Correo Electrónico</label>\r\n            <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n\r\n            <div *ngIf=\"cargandoRegistro==true\" class=\"text-center my-5\"> \r\n              <div class=\"spinner-border\" role=\"status\">                \r\n              </div> \r\n            </div>\r\n            <button class=\"btn boton shadow btn-block\" [disabled]=\"!f.valid\">\r\n              <i class=\"fas fa-sign-in-alt\"></i> Crear Cuenta</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"container my-5 col-11 col-sm-7 justify-content-center bg-white border rounded shadow-lg py-5 px-md-5\">\r\n        <div *ngIf=\"nombreUsuario\" class=\"m-lg-5\">\r\n\r\n            <div class=\"h5 mt-4\">Cuenta iniciada con el email {{userEmail}}.  </div>\r\n            <div class=\"h5 mt-4\">Puede acceder a la selección de productos. </div>\r\n\r\n            <div class=\"mt-5 d-flex justify-content-center\">\r\n                <button class=\"btn boton btn-block col-lg-4 shadow \" routerLink=\"/lista\">\r\n                    Ir a la lista\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"!nombreUsuario\" class=\"m-lg-5\">\r\n            <p class=\"h1\">Acceda a la lista de productos</p>\r\n            <p class=\"h5 mt-5 font-weight-normal\">\r\n                Esta lista contiene productos con un alto volumen de ventas.\r\n            </p>\r\n            <div class=\"d-flex justify-content-lg-center\">\r\n\r\n                <div class=\"mt-4 d-flex flex-column flex-lg-row mb-1 col-lg-10\">\r\n                    <div class=\"col d-flex justify-content-center mt-3\">\r\n                        <button class=\"btn btn-outline-dark btn-block\" routerLink=\"/login\">\r\n                            Iniciar Sesión\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"col d-flex justify-content-center mt-3\">\r\n                        <button class=\"btn boton shadow btn-block\" routerLink=\"/registro\">\r\n                            Registrarse\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light  bg-white mx-lg-5\">\r\n\r\n  <a class=\"navbar-brand my-sm-2\" href=\"#\"> Lista de productos </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse \" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav ml-auto text-center my-4 my-sm-2\">\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"p-3 menulink\" routerLink=\"/lista\">\r\n          <div class=\"btn menulink my-2\">Productos</div>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"p-3 menulink\" routerLink=\"/articulos\">\r\n          <div class=\"btn menulink my-2\">Artículos</div>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n        <a class=\" p-3\" routerLink=\"/login\">\r\n          <div class=\"btn menulink my-2\">Iniciar Sesión</div>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n        <a class=\"p-3 menulink\" routerLink=\"/registro\">\r\n          <div class=\"btn  boton shadow my-2\">Registrarse </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"isLogged\" (click)=\"onLogOut()\">\r\n        <a class=\"p-3 menulink\">\r\n          <div class=\"btn boton shadow my-2\"><i class=\"fas fa-power-off\"></i> Cerrar Sesión</div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/editar-post.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/editar-post.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n\n<div class=\"py-5\">\n\n    <div class=\" container col-lg-7 bg-white  my-5 py-4 px-3 \">\n        <form (ngSubmit)=\"onUpdate()\" novalidate #f=\"ngForm\">\n\n            <div class=\"form-group\">\n                <!-- capturarFile($event) -->\n                \n                <input (change)=\"captura($event)\" type=\"file\">  \n                <!-- Change detecta cuando el input tiene un cambio.\n                Le ponemos la función capturar con el parámetro evento -->\n            </div>  \n\n            <div *ngIf=\"previsualizacion\">\n                <img width=\"500px\" [src]=\"previsualizacion\" alt=\"\">\n            </div>\n            \n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"post.name\" required placeholder=\"Escribe aquí el nombre\">\n            </div>\n\n            <div class=\"form-group mt-5\">\n                <ckeditor  data=\"<p>Hello, world!</p><br>hello\" type=\"inline\" [config]=\"{ extraPlugins: 'divarea' }\" [(ngModel)]=\"post.body\" name=\"body\" ></ckeditor>\n            </div> \n        \n            <div class=\"d-flex justify-content-around mt-5\">\n            <a class=\"linkmin btn btn-block\" routerLink=\"/articulos\"> Volver </a>\n            <button class=\"btn boton btn-block\" [disabled]=\"!f.valid\">\n                Guardar\n            </button>\n            </div>\n        </form>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/full-post.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/full-post.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n\n\n\n  <!-- <div *ngIf=\"cargando==true\" class=\"text-center my-5\"> \n    <div class=\"spinner-border\" role=\"status\"></div> \n </div> -->\n\n<div *ngIf=\"post\" class=\"py-5\">\n  <div class=\"container col-lg-7 bg-white  my-5 py-4 px-3\">\n    <!-- [ngStyle]=\"{ width : 200px; }\" -->\n\n    <div class=\"display-4 font-weight-bold mb-5\">{{post.name}}</div> \n</div>\n\n<div class=\"mx-2\">\n      <img [src]=\"'http://127.0.0.1/storage/' + post.image\" class=\"img-fluid corner mx-auto d-block mb-5\" >\n</div>\n\n    <br>\n\n    <div class=\"container col-lg-7 bg-white  my-5 py-4 px-3\">\n      <div [innerHTML]=\"post.body\"></div>\n    </div>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/lista-post.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/lista-post.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n\n<div class=\"mb-5\">\n  <br>\n</div>\n\n\n<p class=\"h3 text-center\"> Artículos </p>\n  <br>\n\n<p class=\"text-center\">\n   <button class=\"btn btn-primary mb-5\" routerLink=\"nuevo\"> Crear artículo </button>\n</p> \n\n<!-- <div class=\"container d-flex justify-content-center\"> -->\n\n  <div class=\"container d-flex justify-content-around flex-wrap\"> \n    <div class=\"col-lg-5\" *ngFor=\"let post of posts\">\n\n    <!-- <a routerLink=\"/{{post.id}}\"> -->\n\n      <div class=\"card mb-5 cardstyle mx-0 my-0 px-4 pt-4 pb-0 corner shadow\">\n\n          <!-- {{post.image}}     intento con d-inline, miraré otro -->\n          <table class=\"table table-borderless d-inline\">\n            <tr>\n              <!-- <td> <img src=\"'http://localhost:4200/' + post.image\"> </td> -->\n              <a routerLink=\"/{{post.id}}\">\n                <img [src]=\"'http://127.0.0.1/storage/' + post.image\" class=\"img-fluid cornerlista mx-auto d-block\" >\n              </a>\n\n            </tr>\n            <tr>\n              <td>\n                <a class=\"h2\" routerLink=\"/{{post.id}}\">{{post.name}}</a>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                Probando. Este sería el header del artículo. Abajo tengo comentado la forma de mostrarlo bien.\n                <!-- <div [innerHTML]=\"post.body\"></div> -->\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <button class=\"btn btn-dark btn-block corner mt-3\" routerLink=\"/{{post.id}}\">Ver artículo </button>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <button class=\"btn btn-outline-dark btn-sm corner\" routerLink=\"editar/{{post.id}}\">Editar </button>\n                &nbsp;\n                <button class=\"btn btn-outline-dark btn-sm corner\" (click)=\"borrar(post.id)\">Borrar </button>\n              </td>  \n            </tr>\n\n              <!-- Ponemos div innerhtml para que renderice el html -->\n              <!-- {{post.body}} -->\n          </table>\n        \n      </div>\n    <!-- </a> -->\n    </div>\n  </div>\n<!-- \n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/nuevo-post.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/nuevo-post.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n\n    <!-- ckeditor -->\n    <!-- <script src=\"https://cdn.ckeditor.com/ckeditor5/29.1.0/classic/ckeditor.js\"></script> -->\n\n<!-- <div id=\"editor\">\n    <p>This is some sample content.</p>\n</div> -->\n\n\n\n<!-- <script>\n    ClassicEditor\n        .create( document.querySelector( '#editor' ) )\n        .catch( error => {\n            console.error( error );\n        } );\n</script> -->\n\n\n<div class=\"py-5\">\n    <!-- col-lg-4 -->\n    <!-- border rounded shadow-->\n    <div class=\" container col-lg-7 bg-white  my-5 py-4 px-3 \">\n        <!-- onCreate() -->\n        <form (ngSubmit)=\"crea()\" novalidate #f=\"ngForm\">\n\n\n            <div class=\"form-group\">\n                <!-- capturarFile($event) -->\n                \n                <input (change)=\"captura($event)\" type=\"file\">  \n                <!-- Change detecta cuando el input tiene un cambio.\n                Le ponemos la función capturar con el parámetro evento -->\n            </div>  \n\n            <div *ngIf=\"previsualizacion\">\n                <img width=\"500px\" [src]=\"previsualizacion\" alt=\"\">\n            </div>\n            \n\n            <div class=\"form-group\">\n                <!-- <label for=\"name\">Nombre</label> -->\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" required placeholder=\"Escribe aquí el nombre\">\n            </div>\n\n            <div class=\"form-group mt-5\">\n                \n                <!-- <label class=\"my-4\" for=\"body\">Cuerpo del artículo</label> -->\n                <!-- class=\"form-control\" -->\n\n                <!-- ESTE ES EL ANTERIOR, QUE ESTABA BIEN -->\n                <!-- <ckeditor  data=\"<p>Hello, world!</p><br>hello\" type=\"inline\" [config]=\"{ extraPlugins: 'divarea' }\" [(ngModel)]=\"body\" name=\"body\" ></ckeditor> -->\n                <!-- ESTE ES EL ANTERIOR, QUE ESTABA BIEN -->\n\n                <ckeditor [editor]=\"Editor\" data=\"<p>Hello, world!</p>\" [(ngModel)]=\"body\" name=\"body\"></ckeditor>\n\n\n            </div> \n\n            <!-- <div class=\"form-group\">\n                <label for=\"body\">Cuerpo del artículo</label>\n\n\n\n                <input type=\"textarea\" class=\"form-control\" id=\"body\" name=\"body\" [(ngModel)]=\"body\" required>\n            </div>             -->\n        \n            <div class=\"d-flex justify-content-around mt-5\">\n            <a class=\"linkmin btn btn-block\" routerLink=\"/articulos\"> Volver </a>\n            <button class=\"btn boton btn-block\" [disabled]=\"!f.valid\">\n                <!-- <i class=\"fas fa-plus-circle\"></i>  -->\n                Crear\n            </button>\n            </div>\n\n\n\n\n        </form>\n\n\n    </div>\n</div>\n\n\n<!-- \n<button class=\"btn btn-danger\" (click)=\"imprime()\">Imprime</button>\n\n<ckeditor data=\"<p>Hello, world!</p><br>hello\" type=\"inline\"  [(ngModel)]=\"body\" name=\"body\" readOnly=\"true\" ></ckeditor>\n -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/detalle-producto.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/detalle-producto.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n<div class=\"container  text-center mt-5 \">\r\n  <span class=\"\" id=\"\"></span>\r\n  </div>\r\n\r\n  <div *ngIf=\"cargando==true\" class=\"text-center my-5\"> \r\n    <div class=\"spinner-border\" role=\"status\"></div> \r\n </div>\r\n\r\n<div *ngIf=\"producto\" class=\"py-5\">\r\n  <div class=\"container my-4 py-4 px-md-3\">\r\n    <div class=\"card shadow\">\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\"><b>Name: </b>{{producto.name}}</li>\r\n        <li class=\"list-group-item\"><b>Price: </b>{{producto.price}}</li>\r\n      </ul>\r\n      \r\n      <div class=\"card-footer bg-white\">\r\n        <a class=\"linkmin btn btn-block\" routerLink=\"/lista\"> Volver </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/editar-producto.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/editar-producto.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n    <div *ngIf=\"cargandoeditar==true\" class=\"text-center my-5\"> \r\n        <div class=\"spinner-border\" role=\"status\"></div> \r\n     </div>\r\n     \r\n<div *ngIf=\"producto\" class=\"py-5\">\r\n\r\n\r\n\r\n    <div class=\"container col-lg-4 mt-5 bg-white border rounded my-5 py-4 px-3 shadow\">\r\n        <form (ngSubmit)=\"onUpdate()\" novalidate #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"nombre\">Nombre</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"producto.name\"\r\n                    required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"price\">Precio</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"producto.price\" required>\r\n            </div>\r\n \r\n            <button class=\"btn boton btn-block\" [disabled]=\"!f.valid\">\r\n                <i class=\"fas fa-pencil-alt\"></i> Actualizar</button>\r\n            <a class=\"linkmin btn btn-block\" routerLink=\"/lista\"> Volver </a>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"my-3\">\r\n        <br>\r\n    </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/lista-producto.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/lista-producto.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n<div class=\"mb-5\">\r\n  <br>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n\r\n  <span class=\"h1 font-weight-bold\">Productos </span>\r\n\r\n\r\n  <div class=\"form-group mt-5\">\r\n    <input type=\"text\" class=\"form-control\" name=\"filterPost\" placeholder=\"Buscar...\" [(ngModel)]=\"filterPost\">\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"mt-5 mb-0 table-responsive\">\r\n    <table class=\"table table-striped table-hover border\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Nombre</th>\r\n\r\n          <th scope=\"col\">Precio</th>\r\n          <th scope=\"col\">Ver</th>\r\n\r\n\r\n          <th scope=\"col\">Editar</th>\r\n\r\n          <th scope=\"col\">Borrar</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let producto of productos | filter:filterPost\">\r\n          <td class=\"align-middle\">{{producto.name}} </td>\r\n          <td class=\"align-middle\"> {{producto.price}}</td>\r\n          <td class=\"align-middle\"><button class=\"btn btn-outline-dark\" routerLink=\"/detalle/{{producto.id}}\"><i\r\n                class=\"far fa-eye\"></i> <!-- Ver --> </button></td>\r\n\r\n\r\n          <td class=\"align-middle\"><button class=\"btn btn-outline-dark\" routerLink=\"/editar/{{producto.id}}\"><i\r\n                class=\"far fa-edit\"></i> </button></td>\r\n          <td class=\"align-middle\"><button class=\"btn btn-outline-dark\" (click)=\"borrar(producto.id)\"><i\r\n                class=\"far fa-trash-alt\"></i> </button></td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n    <div *ngIf=\"cargando==true\" class=\"text-center my-5\">\r\n      <div class=\"spinner-border\" role=\"status\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"mt-4 mb-5\">\r\n    <button class=\"btn boton shadow btn-lg\" routerLink=\"/nuevo\">\r\n      <i class=\"fas fa-plus-circle\"></i> Nuevo Producto</button>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/nuevo-producto.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/nuevo-producto.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\r\n\r\n<div class=\" py-5\">\r\n    <div class=\"col-lg-4 container bg-white border rounded my-5 py-4 px-3 shadow\">\r\n        <form (ngSubmit)=\"onCreate()\" novalidate #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Nombre</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"price\">Precio</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"price\" required>\r\n            </div>            \r\n        \r\n\r\n            <button class=\"btn boton btn-block\" [disabled]=\"!f.valid\">\r\n                <i class=\"fas fa-plus-circle\"></i> Crear</button>\r\n            <a class=\"linkmin btn btn-block\" routerLink=\"/lista\"> Volver </a>\r\n        </form>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto/lista-producto.component */ "./src/app/producto/lista-producto.component.ts");
/* harmony import */ var _producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./producto/detalle-producto.component */ "./src/app/producto/detalle-producto.component.ts");
/* harmony import */ var _producto_nuevo_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto/nuevo-producto.component */ "./src/app/producto/nuevo-producto.component.ts");
/* harmony import */ var _producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto/editar-producto.component */ "./src/app/producto/editar-producto.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _auth_registro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/registro.component */ "./src/app/auth/registro.component.ts");
/* harmony import */ var _guards_prod_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/prod-guard.service */ "./src/app/guards/prod-guard.service.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _post_lista_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/lista-post.component */ "./src/app/post/lista-post.component.ts");
/* harmony import */ var _post_nuevo_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/nuevo-post.component */ "./src/app/post/nuevo-post.component.ts");
/* harmony import */ var _post_full_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/full-post.component */ "./src/app/post/full-post.component.ts");
/* harmony import */ var _post_editar_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/editar-post.component */ "./src/app/post/editar-post.component.ts");
















const routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"] },
    { path: 'login', component: _auth_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"]] },
    { path: 'registro', component: _auth_registro_component__WEBPACK_IMPORTED_MODULE_9__["RegistroComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"]] },
    { path: 'lista', component: _producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_3__["ListaProductoComponent"], canActivate: [_guards_prod_guard_service__WEBPACK_IMPORTED_MODULE_10__["ProdGuardService"]], data: { expectedRol: ['admin', 'user'] } },
    { path: 'detalle/:id', component: _producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_4__["DetalleProductoComponent"], canActivate: [_guards_prod_guard_service__WEBPACK_IMPORTED_MODULE_10__["ProdGuardService"]], data: { expectedRol: ['admin', 'user'] } },
    { path: 'nuevo', component: _producto_nuevo_producto_component__WEBPACK_IMPORTED_MODULE_5__["NuevoProductoComponent"], canActivate: [_guards_prod_guard_service__WEBPACK_IMPORTED_MODULE_10__["ProdGuardService"]], data: { expectedRol: ['admin', 'user'] } },
    { path: 'editar/:id', component: _producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_6__["EditarProductoComponent"], canActivate: [_guards_prod_guard_service__WEBPACK_IMPORTED_MODULE_10__["ProdGuardService"]], data: { expectedRol: ['admin', 'user'] } },
    { path: 'articulos', component: _post_lista_post_component__WEBPACK_IMPORTED_MODULE_12__["ListaPostComponent"] },
    { path: 'articulos/nuevo', component: _post_nuevo_post_component__WEBPACK_IMPORTED_MODULE_13__["NuevoPostComponent"] },
    { path: ':id', component: _post_full_post_component__WEBPACK_IMPORTED_MODULE_14__["FullPostComponent"] },
    { path: 'articulos/editar/:id', component: _post_editar_post_component__WEBPACK_IMPORTED_MODULE_15__["EditarPostComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'productos';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./producto/lista-producto.component */ "./src/app/producto/lista-producto.component.ts");
/* harmony import */ var _producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto/detalle-producto.component */ "./src/app/producto/detalle-producto.component.ts");
/* harmony import */ var _producto_nuevo_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto/nuevo-producto.component */ "./src/app/producto/nuevo-producto.component.ts");
/* harmony import */ var _producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./producto/editar-producto.component */ "./src/app/producto/editar-producto.component.ts");
/* harmony import */ var _interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/prod-interceptor.service */ "./src/app/interceptors/prod-interceptor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _auth_registro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/registro.component */ "./src/app/auth/registro.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _post_lista_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post/lista-post.component */ "./src/app/post/lista-post.component.ts");
/* harmony import */ var _post_nuevo_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./post/nuevo-post.component */ "./src/app/post/nuevo-post.component.ts");
/* harmony import */ var _post_editar_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./post/editar-post.component */ "./src/app/post/editar-post.component.ts");
/* harmony import */ var _post_full_post_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./post/full-post.component */ "./src/app/post/full-post.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");

























//import { CKEditorModule } from 'ckeditor4-angular';


// import * as bootstrap from "bootstrap";
// import * as $ from "jquery";
Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_20___default.a, 'es');
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_4__["ListaProductoComponent"],
            _producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_5__["DetalleProductoComponent"],
            _producto_nuevo_producto_component__WEBPACK_IMPORTED_MODULE_6__["NuevoProductoComponent"],
            _producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_7__["EditarProductoComponent"],
            _auth_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _auth_registro_component__WEBPACK_IMPORTED_MODULE_14__["RegistroComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
            _post_lista_post_component__WEBPACK_IMPORTED_MODULE_22__["ListaPostComponent"],
            _post_nuevo_post_component__WEBPACK_IMPORTED_MODULE_23__["NuevoPostComponent"],
            _post_editar_post_component__WEBPACK_IMPORTED_MODULE_24__["EditarPostComponent"],
            _post_full_post_component__WEBPACK_IMPORTED_MODULE_25__["FullPostComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                progressBar: true,
                progressAnimation: 'increasing',
                preventDuplicates: true,
                positionClass: 'toast-bottom-right',
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"]
        ],
        providers: [
            _interceptors_prod_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["interceptorProvider"],
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["DecimalPipe"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_19__["LOCALE_ID"], useValue: 'es' },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/login.component.css":
/*!******************************************!*\
  !*** ./src/app/auth/login.component.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_login_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/login-usuario */ "./src/app/models/login-usuario.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");







//Se utilizará para comprobar si estamos o no estamos logueados 
let LoginComponent = class LoginComponent {
    constructor(// inyectamos el tokenservice, auth, router y toastr
    tokenService, authService, router, toastr) {
        this.tokenService = tokenService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.cargandoLogin = false;
    }
    ngOnInit() {
    }
    // Método para hacer el login
    onLogin() {
        this.cargandoLogin = true;
        //inicializamos el loginusuario y le pasamos el usuario y el password
        this.loginUsuario = new _models_login_usuario__WEBPACK_IMPORTED_MODULE_4__["LoginUsuario"](this.email, this.password);
        window.localStorage.UserEmail = this.email;
        //Vamos a enviarlo al authservice
        this.authService.login(this.loginUsuario).subscribe(//loginusuario y nos suscribimos
        //loginusuario y nos suscribimos
        data => {
            this.tokenService.setToken(data.token);
            console.log(data.user);
            this.router.navigate(['/']); // lo mandamos al index
            this.cargandoLogin = false;
        }, err => {
            this.errMsj = err.error.message; // variable que habíamos creado para el error, saldrá el mensaje del backend
            this.toastr.error(this.errMsj, 'Error', {
                timeOut: 3000
            });
            this.cargandoLogin = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/registro.component.css":
/*!*********************************************!*\
  !*** ./src/app/auth/registro.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/registro.component.ts":
/*!********************************************!*\
  !*** ./src/app/auth/registro.component.ts ***!
  \********************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_nuevo_usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/nuevo-usuario */ "./src/app/models/nuevo-usuario.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");







let RegistroComponent = class RegistroComponent {
    constructor(tokenService, authService, router, toastr) {
        this.tokenService = tokenService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.cargandoRegistro = false;
    }
    ngOnInit() {
    }
    //Método para registrarse
    onRegister() {
        this.cargandoRegistro = true;
        this.nuevoUsuario = new _models_nuevo_usuario__WEBPACK_IMPORTED_MODULE_5__["NuevoUsuario"](this.name, this.password, this.password_confirmation, this.email);
        this.authService.nuevo(this.nuevoUsuario).subscribe(data => {
            this.toastr.success('Cuenta creada', '', {
                timeOut: 3000
            });
            this.router.navigate(['/login']); //va al login
            this.cargandoRegistro = false;
        }, err => {
            this.errMsj = err.error.mensaje;
            this.toastr.error(this.errMsj, 'Error', {
                timeOut: 3000
            });
            this.cargandoRegistro = false;
        });
    }
};
RegistroComponent.ctorParameters = () => [
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
RegistroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro.component.css */ "./src/app/auth/registro.component.css")).default]
    })
], RegistroComponent);



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let LoginGuard = class LoginGuard {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.tokenService.isLogged()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
};
LoginGuard.ctorParameters = () => [
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ "./src/app/guards/prod-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/prod-guard.service.ts ***!
  \**********************************************/
/*! exports provided: ProdGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdGuardService", function() { return ProdGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");




let ProdGuardService = class ProdGuardService {
    constructor(tokenService, // inyectamos tokenservice
    router // inyectamos router
    ) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(route, state) {
        const expectedRol = route.data.expectedRol;
        // está el rol real (el que tengo) y el esperado, es decir, el que espero tener
        // mi expectativa es ser administrador pero me quedo en un mero usuario
        this.realRol = this.tokenService.isAdmin() ? 'admin' : 'user';
        if (!this.tokenService.isLogged() || expectedRol.indexOf(this.realRol) < 0) {
            this.router.navigate(['/']); // Va al index porque no puedo acceder
            return false; // Devuelve false
        }
        return true; //En caso contrario, true
    }
};
ProdGuardService.ctorParameters = () => [
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] // inyectamos router
     }
];
ProdGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProdGuardService);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



 // para el decimal
let IndexComponent = class IndexComponent {
    constructor(tokenService, DecimalPipe) {
        this.tokenService = tokenService;
        this.DecimalPipe = DecimalPipe;
    }
    ngOnInit() {
        this.nombreUsuario = this.tokenService.getUserName();
        this.userEmail = window.localStorage.UserEmail;
    }
};
IndexComponent.ctorParameters = () => [
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"] }
];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/interceptors/prod-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/prod-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: ProdInterceptorService, interceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdInterceptorService", function() { return ProdInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorProvider", function() { return interceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");




let ProdInterceptorService = class ProdInterceptorService {
    constructor(tokenService) {
        this.tokenService = tokenService;
    } // Inyectamos el tokenservice
    intercept(req, next) {
        let intReq = req; // Es req interceptado, por eso el int
        const token = this.tokenService.getToken();
        if (token != null) { // si no es nulo
            intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            // intreq va a ser igual a req, le pasamos la autorización, el bearer y el token
        }
        return next.handle(intReq);
    }
};
ProdInterceptorService.ctorParameters = () => [
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
ProdInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProdInterceptorService);

const interceptorProvider = [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: ProdInterceptorService, multi: true }];
// Lo exportamos, abro llaves, el interceptor, prodinterceptoservice y el multi va a ser true


/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");



let MenuComponent = class MenuComponent {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.isLogged = false; // variable de si está logueado
    } // le inyectamos un tokenservice
    ngOnInit() {
        this.isLogged = this.tokenService.isLogged();
    }
    onLogOut() {
        this.tokenService.logOut();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/models/login-usuario.ts":
/*!*****************************************!*\
  !*** ./src/app/models/login-usuario.ts ***!
  \*****************************************/
/*! exports provided: LoginUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsuario", function() { return LoginUsuario; });
class LoginUsuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/models/nuevo-usuario.ts":
/*!*****************************************!*\
  !*** ./src/app/models/nuevo-usuario.ts ***!
  \*****************************************/
/*! exports provided: NuevoUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoUsuario", function() { return NuevoUsuario; });
class NuevoUsuario {
    constructor(name, password, password_confirmation, email) {
        this.name = name;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/models/producto.ts":
/*!************************************!*\
  !*** ./src/app/models/producto.ts ***!
  \************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
class Producto {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(value, arg) {
        if (arg === '' || arg.length < 2)
            return value; // tiene que introducir 2 letras mínimo
        const resultPosts = [];
        for (const post of value) {
            if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultPosts.push(post);
            }
            ;
        }
        ;
        return resultPosts;
    }
};
FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/post/editar-post.component.css":
/*!************************************************!*\
  !*** ./src/app/post/editar-post.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvZWRpdGFyLXBvc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/post/editar-post.component.ts":
/*!***********************************************!*\
  !*** ./src/app/post/editar-post.component.ts ***!
  \***********************************************/
/*! exports provided: EditarPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPostComponent", function() { return EditarPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");






let EditarPostComponent = class EditarPostComponent {
    constructor(postService, activatedRoute, toastr, router, sanitizer) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.router = router;
        this.sanitizer = sanitizer;
        // Si no recuerdo mal, para los modelos del form, es necesario iniciarlas.
        this.name = '';
        this.body = 'Escribe aquí el cuerpo del artículo';
        this.post = null;
        this.portada = null;
        // // El evento que le pasamos, crea una función tipo file, la lee y nos devuelve el base64
        this.extraerBase64 = ($event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    const unsafeImg = window.URL.createObjectURL($event);
                    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                    const reader = new FileReader();
                    reader.readAsDataURL($event);
                    reader.onload = () => {
                        resolve({
                            base: reader.result
                        });
                    };
                    reader.onerror = error => {
                        resolve({
                            base: null
                        });
                    };
                }
                catch (e) {
                    return null;
                }
            });
        });
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.postService.detail(id).subscribe(data => {
            this.post = data;
            // this.cargando = false;
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000,
            });
            this.router.navigate(['/']);
        });
    }
    onUpdate() {
        const id = this.activatedRoute.snapshot.params.id;
        const fd = new FormData();
        fd.append('id', id);
        fd.append('name', this.post.name);
        fd.append('body', this.post.body);
        fd.append('image', this.portada);
        //  fd.append('_method', 'PUT');
        // console.log(fd.get('id'));
        this.postService.update(fd).subscribe(data => {
            this.toastr.success('Artículo editado', '', {
                timeOut: 2000,
            });
            this.router.navigate(['/articulos']);
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000,
            });
        });
    }
    captura(event) {
        // console.log(event.target.files); // la img se encuentra dentro de target.files
        const archivoCapturado = event.target.files[0];
        this.extraerBase64(archivoCapturado).then((imagen) => {
            this.previsualizacion = imagen.base; // en esta variable almacenamos la codificación de la imagen, base64
            console.log(imagen);
        });
        this.portada = archivoCapturado;
        //     this.archivos.push(archivoCapturado); // En el array creado, incluímos la imagen
    }
};
EditarPostComponent.ctorParameters = () => [
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
EditarPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editar-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/editar-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editar-post.component.css */ "./src/app/post/editar-post.component.css")).default]
    })
], EditarPostComponent);



/***/ }),

/***/ "./src/app/post/full-post.component.css":
/*!**********************************************!*\
  !*** ./src/app/post/full-post.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvZnVsbC1wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/post/full-post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/post/full-post.component.ts ***!
  \*********************************************/
/*! exports provided: FullPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPostComponent", function() { return FullPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/post.service */ "./src/app/service/post.service.ts");





let FullPostComponent = class FullPostComponent {
    // image: File = null;
    constructor(postService, activatedRoute, toastr, router) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.router = router;
        this.post = null;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.postService.detail(id).subscribe(data => {
            this.post = data;
            // this.cargando = false;
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
            this.volver();
        });
    }
    // imagen(): void{
    //   this.postService.image(16).subscribe(
    //     dataimg => {
    //       console.log('hola');
    //       this.image = dataimg;
    //     }, 
    //     err => {
    //       this.toastr.error(err.error.mensaje, 'Error', {
    //         timeOut: 3000
    //       });
    //     }
    //   );
    // }
    volver() {
        this.router.navigate(['/articulos']);
    }
};
FullPostComponent.ctorParameters = () => [
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FullPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./full-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/full-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./full-post.component.css */ "./src/app/post/full-post.component.css")).default]
    })
], FullPostComponent);



/***/ }),

/***/ "./src/app/post/lista-post.component.css":
/*!***********************************************!*\
  !*** ./src/app/post/lista-post.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    background-color: #fefefe;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9saXN0YS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wb3N0L2xpc3RhLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/post/lista-post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/post/lista-post.component.ts ***!
  \**********************************************/
/*! exports provided: ListaPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPostComponent", function() { return ListaPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/post.service */ "./src/app/service/post.service.ts");




let ListaPostComponent = class ListaPostComponent {
    constructor(postService, toastr) {
        this.postService = postService;
        this.toastr = toastr;
        this.posts = [];
    }
    ngOnInit() {
        this.cargarPosts();
    }
    cargarPosts() {
        this.postService.lista().subscribe(data => {
            this.posts = data; // lo carga en el Array que hemos creado, llamado posts
        }, err => {
            console.log(err);
        });
    }
    borrar(id) {
        this.postService.delete(id).subscribe(data => {
            this.toastr.success('Artículo eliminado', '', {
                timeOut: 3000
            });
            this.cargarPosts();
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
        });
    }
};
ListaPostComponent.ctorParameters = () => [
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
ListaPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lista-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/lista-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lista-post.component.css */ "./src/app/post/lista-post.component.css")).default]
    })
], ListaPostComponent);



/***/ }),

/***/ "./src/app/post/nuevo-post.component.css":
/*!***********************************************!*\
  !*** ./src/app/post/nuevo-post.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ckeditor{\r\n    border-bottom: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9udWV2by1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wb3N0L251ZXZvLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNrZWRpdG9ye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/post/nuevo-post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/post/nuevo-post.component.ts ***!
  \**********************************************/
/*! exports provided: NuevoPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoPostComponent", function() { return NuevoPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);








let NuevoPostComponent = class NuevoPostComponent {
    constructor(postService, toastr, router, sanitizer) {
        this.postService = postService;
        this.toastr = toastr;
        this.router = router;
        this.sanitizer = sanitizer;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        this.name = '';
        this.body = 'Escribe aquí el cuerpo del artículo';
        this.archivos = [];
        this.portada = null;
        // capturarFile(event): any{
        //       // console.log(event.target.files); // la img se encuentra dentro de target.files
        //   const archivoCapturado = event.target.files[0];
        //   this.extraerBase64(archivoCapturado).then((imagen: any) => {
        //       this.previsualizacion = imagen.base; // en esta variable almacenamos la codificación de la imagen, base64
        //       console.log(imagen);
        //     });
        //   this.archivos.push(archivoCapturado); // En el array creado, incluímos la imagen
        // }
        // // El evento que le pasamos, crea una función tipo file, la lee y nos devuelve el base64
        this.extraerBase64 = ($event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    const unsafeImg = window.URL.createObjectURL($event);
                    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                    const reader = new FileReader();
                    reader.readAsDataURL($event);
                    reader.onload = () => {
                        resolve({
                            base: reader.result
                        });
                    };
                    reader.onerror = error => {
                        resolve({
                            base: null
                        });
                    };
                }
                catch (e) {
                    return null;
                }
            });
        });
        console.log(this.name);
    }
    ngAfterViewChecked() {
        let editor = this.ckEditor.instance;
        editor.config.height = '200';
        editor.config.toolbarGroups = [
            { name: 'document', groups: ['mode', 'document', 'doctools'] }
        ];
    }
    ngOnInit() {
    }
    // onCreate(): void{
    //   this.subirArchivo();
    //   // const post = new Post(this.name, this.body, formularioDeDatos);
    //   // this.postService.save(post).subscribe(
    //   //   data => {
    //   //     this.toastr.success('Artículo creado', '', {
    //   //       timeOut: 3000
    //   //     });
    //   //     this.router.navigate(['/articulos']);
    //   //   },
    //   //   err => {
    //   //     this.toastr.error(err.error.mensaje, 'Error', {
    //   //       timeOut: 3000
    //   //     });
    //   //   }
    //   // );
    // }
    // subirArchivo(): any {
    //   try {
    //   //  this.loading = true;
    //     const formularioDeDatos = new FormData(); // Es un archivo que tiene datos binarios, necesitamos un formdata
    //     this.archivos.forEach(archivo => {
    //       formularioDeDatos.append('files', archivo)    // Nombre que la api o servicio nos pida
    //       // ---------------------------------------CREO QUE DEBO INCLUIR archivo EN LA LLAMADA AL SERVICIO
    //      console.log('función subir')
    //       console.log(archivo);
    //     })
    //     const post = new Post(this.name, this.body, formularioDeDatos);
    //     this.postService.save(post).subscribe(
    //       data => {
    //         this.toastr.success('Artículo creado', '', {
    //           timeOut: 3000
    //         });
    //         this.router.navigate(['/articulos']);
    //       },
    //       err => {
    //         this.toastr.error(err.error.mensaje, 'Error', {
    //           timeOut: 3000
    //         });
    //       }
    //     );
    //     //  formularioDeDatos.append('_id', 'MY_ID_123')
    //   //   this.postService.save(post)
    //   //     .subscribe(res => {
    //   //  //     this.loading = false;
    //   //       console.log('Respuesta del servidor', res);
    //   //     }, () => {
    //   //  //     this.loading = false;
    //   //       alert('Error');
    //   //     })
    //   } catch (e) {
    //  //   this.loading = false;
    //     console.log('ERROR', e);
    //   }
    // }
    // ckeditor(){
    //     ClassicEditor
    // .create( document.querySelector( '#ckeditor' ) )
    // .catch( error => {
    //     console.error( error );
    // } );
    // }
    captura(event) {
        // console.log(event.target.files); // la img se encuentra dentro de target.files
        const archivoCapturado = event.target.files[0];
        this.extraerBase64(archivoCapturado).then((imagen) => {
            this.previsualizacion = imagen.base; // en esta variable almacenamos la codificación de la imagen, base64
            console.log(imagen);
        });
        this.portada = archivoCapturado;
        //     this.archivos.push(archivoCapturado); // En el array creado, incluímos la imagen
    }
    crea() {
        const fd = new FormData();
        fd.append('name', this.name);
        fd.append('body', this.body);
        fd.append('image', this.portada);
        this.postService.save(fd).subscribe(data => {
            this.toastr.success('Artículo creado', '', {
                timeOut: 3000
            });
            this.router.navigate(['/articulos']);
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
        });
        console.log('aquí estaría con el post mandado');
    }
};
NuevoPostComponent.ctorParameters = () => [
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorComponent"])
], NuevoPostComponent.prototype, "ckEditor", void 0);
NuevoPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nuevo-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nuevo-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/nuevo-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nuevo-post.component.css */ "./src/app/post/nuevo-post.component.css")).default]
    })
], NuevoPostComponent);



/***/ }),

/***/ "./src/app/producto/detalle-producto.component.css":
/*!*********************************************************!*\
  !*** ./src/app/producto/detalle-producto.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL2RldGFsbGUtcHJvZHVjdG8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/producto/detalle-producto.component.ts":
/*!********************************************************!*\
  !*** ./src/app/producto/detalle-producto.component.ts ***!
  \********************************************************/
/*! exports provided: DetalleProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProductoComponent", function() { return DetalleProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/producto.service */ "./src/app/service/producto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





let DetalleProductoComponent = class DetalleProductoComponent {
    constructor(productoService, activatedRoute, toastr, router) {
        this.productoService = productoService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.router = router;
        this.producto = null;
        this.cargando = true;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.productoService.detail(id).subscribe(data => {
            this.producto = data;
            this.cargando = false;
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
            this.volver();
        });
    }
    volver() {
        this.router.navigate(['/lista']);
    }
};
DetalleProductoComponent.ctorParameters = () => [
    { type: _service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DetalleProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detalle-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/detalle-producto.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detalle-producto.component.css */ "./src/app/producto/detalle-producto.component.css")).default]
    })
], DetalleProductoComponent);



/***/ }),

/***/ "./src/app/producto/editar-producto.component.css":
/*!********************************************************!*\
  !*** ./src/app/producto/editar-producto.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL2VkaXRhci1wcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/producto/editar-producto.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/producto/editar-producto.component.ts ***!
  \*******************************************************/
/*! exports provided: EditarProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProductoComponent", function() { return EditarProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/producto.service */ "./src/app/service/producto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





let EditarProductoComponent = class EditarProductoComponent {
    constructor(productoService, activatedRoute, toastr, router) {
        this.productoService = productoService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.router = router;
        this.producto = null;
        this.cargandoeditar = true;
    }
    //Para ver los detalles 
    ngOnInit() {
        const id = this.activatedRoute.snapshot.params.id;
        this.productoService.detail(id).subscribe(data => {
            this.producto = data;
            this.cargandoeditar = false;
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
            this.router.navigate(['/']);
        });
    }
    //Para actualizar la información
    onUpdate() {
        const id = this.activatedRoute.snapshot.params.id;
        this.productoService.update(id, this.producto).subscribe(data => {
            this.toastr.success('Producto actualizado', '', {
                timeOut: 3000
            });
            this.router.navigate(['/lista']);
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
        });
    }
};
EditarProductoComponent.ctorParameters = () => [
    { type: _service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditarProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editar-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/editar-producto.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editar-producto.component.css */ "./src/app/producto/editar-producto.component.css")).default]
    })
], EditarProductoComponent);



/***/ }),

/***/ "./src/app/producto/lista-producto.component.css":
/*!*******************************************************!*\
  !*** ./src/app/producto/lista-producto.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL2xpc3RhLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/producto/lista-producto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/producto/lista-producto.component.ts ***!
  \******************************************************/
/*! exports provided: ListaProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductoComponent", function() { return ListaProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/producto.service */ "./src/app/service/producto.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






 // para decimal pipe
let ListaProductoComponent = class ListaProductoComponent {
    constructor(productoService, toastr, tokenService, router, DecimalPipe) {
        this.productoService = productoService;
        this.toastr = toastr;
        this.tokenService = tokenService;
        this.router = router;
        this.DecimalPipe = DecimalPipe;
        this.productos = [];
        this.productosCartera = [];
        this.cargando = true;
        this.duplicado = [];
        this.listaAdmin = [];
        this.isAdmin = false;
        //Para cargar usuario
        this.isLogged = false;
        this.nombreUsuario = '';
        this.idcartera = 'juan';
        this.filterPost = '';
    }
    ngOnInit() {
        this.cargarProductos(); // Carga los productos
        this.isAdmin = this.tokenService.isAdmin();
    }
    // SistemaEuropeo(SistemaAmericano :number){ // Lo modifico
    //   let TerConComa = this.DecimalPipe.transform(SistemaAmericano, "1.2-2", 'es')
    //   return TerConComa;
    // }
    cargarProductos() {
        this.productoService.lista().subscribe(data => {
            this.productos = data; // lo carga en el Array que hemos creado, llamado productos
            this.cargando = false;
        }, err => {
            console.log(err);
        });
    }
    borrar(id) {
        this.productoService.delete(id).subscribe(data => {
            this.toastr.success('Producto eliminado', '', {
                timeOut: 3000
            });
            this.cargarProductos();
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
        });
    }
};
ListaProductoComponent.ctorParameters = () => [
    { type: _service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"] }
];
ListaProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lista-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/lista-producto.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lista-producto.component.css */ "./src/app/producto/lista-producto.component.css")).default]
    })
], ListaProductoComponent);



/***/ }),

/***/ "./src/app/producto/nuevo-producto.component.css":
/*!*******************************************************!*\
  !*** ./src/app/producto/nuevo-producto.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL251ZXZvLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/producto/nuevo-producto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/producto/nuevo-producto.component.ts ***!
  \******************************************************/
/*! exports provided: NuevoProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProductoComponent", function() { return NuevoProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/producto.service */ "./src/app/service/producto.service.ts");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/producto */ "./src/app/models/producto.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let NuevoProductoComponent = class NuevoProductoComponent {
    constructor(productoService, toastr, router) {
        this.productoService = productoService;
        this.toastr = toastr;
        this.router = router;
        this.name = '';
        this.price = null;
        // Popover que uso para informar al usuario del lugar donde se encuentra el ID de los vídeos de Youtube
        $(document).ready(function () {
            $('[data-toggle="popover"]').popover({
                placement: 'top',
                trigger: 'hover'
            });
        });
    }
    ngOnInit() {
    }
    //Crear uno nuevo
    onCreate() {
        const producto = new _models_producto__WEBPACK_IMPORTED_MODULE_3__["Producto"](this.name, this.price);
        this.productoService.save(producto).subscribe(data => {
            this.toastr.success('Producto creado', '', {
                timeOut: 3000
            });
            this.router.navigate(['/lista']);
        }, err => {
            this.toastr.error(err.error.mensaje, 'Error', {
                timeOut: 3000
            });
        });
    }
};
NuevoProductoComponent.ctorParameters = () => [
    { type: _service_producto_service__WEBPACK_IMPORTED_MODULE_2__["ProductoService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NuevoProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevo-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nuevo-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/producto/nuevo-producto.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nuevo-producto.component.css */ "./src/app/producto/nuevo-producto.component.css")).default]
    })
], NuevoProductoComponent);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authURL = 'http://127.0.0.1/api/';
    }
    nuevo(nuevoUsuario) {
        return this.httpClient.post(this.authURL + 'register', nuevoUsuario);
    }
    login(loginUsuario) {
        return this.httpClient.post(this.authURL + 'login', loginUsuario);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/post.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/post.service.ts ***!
  \*****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let PostService = class PostService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.postURL = 'http://127.0.0.1/api/posts';
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("_method", "PUT"); //Create new HttpParams
    }
    lista() {
        return this.httpClient.get(this.postURL);
    }
    image(id) {
        return this.httpClient.get(this.postURL + `/${id}/image`);
    }
    // public save(post: Post): Observable<any>{
    //   return this.httpClient.post<any>(this.postURL, post);
    // }
    save(post) {
        return this.httpClient.post(this.postURL, post);
    }
    // public save(post: Post, image: string): Observable<any>{
    //   return this.httpClient.post<any>(this.postURL, post);
    // }
    detail(id) {
        return this.httpClient.get(this.postURL + `/${id}`);
    }
    // public update(id: number, post: Post): Observable<any>{
    //   return this.httpClient.put<any>(this.postURL + `/${id}`, post);
    // }
    update(post) {
        return this.httpClient.post(this.postURL + `/` + post.get(`id`) + '?_method=PUT', post);
    }
    delete(id) {
        return this.httpClient.delete(this.postURL + `/${id}`);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/service/producto.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/producto.service.ts ***!
  \*********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let ProductoService = class ProductoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.productoURL = 'http://127.0.0.1/api/products';
    }
    lista() {
        return this.httpClient.get(this.productoURL);
    }
    detail(id) {
        return this.httpClient.get(this.productoURL + `/${id}`);
    }
    save(producto) {
        return this.httpClient.post(this.productoURL, producto);
    }
    update(id, producto) {
        return this.httpClient.put(this.productoURL + `/${id}`, producto);
    }
    delete(id) {
        return this.httpClient.delete(this.productoURL + `/${id}`);
    }
};
ProductoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductoService);



/***/ }),

/***/ "./src/app/service/token.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const TOKEN_KEY = 'AuthToken'; // de clave
let TokenService = class TokenService {
    constructor(router) {
        this.router = router;
        //Creamos un array con los roles
        this.roles = [];
    }
    //getter y setter
    setToken(token) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token); // token key y el token que le estamos pasando como parámetro
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
    isLogged() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
    getUserName() {
        if (!this.isLogged()) {
            return null;
        }
        // el token tiene un aspecto similar a este: dijsdnfdjinf.fasidjnffi.fisjdfnsdif 
        // se compone de: header, payload y firma
        // ahora nos interesa el payload
        // Para sacarlo, lo primero que hacemos es convertir la cadena en un array de cadenas
        const token = this.getToken();
        const payload = token.split('.')[1];
        //split convierte un array a partir de un caracter, le ponemos posición 1 para acceder al payload
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded); // parseamos a JSON
        const username = values.sub;
        return username;
    }
    isAdmin() {
        if (!this.isLogged()) {
            return false;
        }
        // el token tiene un aspecto similar a este: dijsdnfdjinf.fasidjnffi.fisjdfnsdif 
        // se compone de: header, payload y firma
        // ahora nos interesa el payload
        // lo primero que hacemos es convertir la cadena en un array de cadenas
        const token = this.getToken();
        const payload = token.split('.')[1];
        //split convierte un array a partir de un caracter, le ponemos posición 1 para acceder al payload
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded); // parseamos a JSON
        //    const roles = values.roles;
        return true;
    }
    //Para cerrar sesión
    logOut() {
        window.localStorage.clear(); // Va a limpiar todo lo que tengamos en el sesionstorage
        this.router.navigate(['/login']); // Vamos a inicio
    }
};
TokenService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    productoURL: 'http://localhost:8080/producto/',
    authURL: 'http://localhost:8080/auth/'
};
//Lo ponemos aquí porque de momento estamos en desarrollo
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jocob\Documents\PROGRAMACION\APPLE\Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map