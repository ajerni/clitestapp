import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import {enableProdMode} from '@angular/core'; //umschalten von Developer auf Produktiv Modus
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
