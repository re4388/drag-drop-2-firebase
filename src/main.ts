import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// TODO: implement custom RXJS operator
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import { Observable } from 'rxjs';

// const debuggerOn = true;

// Observable.prototype.debug =  (message: string) => {
//   return this.tap(
//     (next) => {
//       if (debuggerOn) {
//         console.log(message, next);
//       }
//     },
//     (err) => {
//       if (debuggerOn) {
//         console.error('ERROR >>> ', message, err);
//       }
//     },
//     () => {
//       if (debuggerOn) {
//         console.log('Completed.');
//       }
//     }
//   );
// };

// declare module 'rxjs' {
//   interface Observable<T> {
//     debug: (...any) => Observable<T>;
//   }
// }


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
