// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // local: 'http://localhost:4200/',
  dominio: 'https://mykelt.com/',
  backendLocal: 'http://127.0.0.1/',
  herokuURL: 'https://ghastly-beast-50784.herokuapp.com/',

  stripeId: 'pk_live_51JRiEIEDzo7bolN0lD3HL3bvc8EjTZFupOWKYFtStB7hLsBOy9DfkEjScIOMfxRMAnmZ4icgvJSSXsw9qlMLhrhD00NN8HoFSb',
  cloudinaryUpload: 'https://api.cloudinary.com/v1_1/djqmzihzr/image/upload'

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
