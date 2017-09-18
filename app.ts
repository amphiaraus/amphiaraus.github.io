/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../typings/index.d.ts"/>

import {provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform/browser';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from '@angular/router';
import {AmphiarausApp} from './app/main';
import { HighlightDirective } from './app/directive/highlight/highlight.directive';

enableProdMode();

bootstrap(AmphiarausApp, [
  ROUTER_PROVIDERS,
  HighlightDirective,
  provide(LocationStrategy,
    {
      useClass: HashLocationStrategy
    })
]);
