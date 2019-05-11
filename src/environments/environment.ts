// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBJjh13JevK2Nk6g6E2ZGveSq7vcMJSwuQ',
    authDomain: 'declaratieproject.firebaseapp.com',
    databaseURL: 'https://declaratieproject.firebaseio.com',
    projectId: 'declaratieproject',
    storageBucket: 'declaratieproject.appspot.com',
    messagingSenderId: '545146315940',
    appId: '1:545146315940:web:2adae12cee638df7'
  },
  apiUrl: 'http://localhost:8080'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
