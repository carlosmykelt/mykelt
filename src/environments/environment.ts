// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dominio: 'http://localhost:4200/',
  productoURL: 'http://localhost:8080/producto/',
  authURL: 'http://localhost:8080/auth/',
  stripeId: 'pk_live_51JRiEIEDzo7bolN0lD3HL3bvc8EjTZFupOWKYFtStB7hLsBOy9DfkEjScIOMfxRMAnmZ4icgvJSSXsw9qlMLhrhD00NN8HoFSb'

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
