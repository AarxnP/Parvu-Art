import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNgIconsConfig } from '@ng-icons/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideNgIconsConfig({
      size: "1.5em",
    }), provideFirebaseApp(() => 
      initializeApp({"projectId":"pag--parvuart","appId":"1:163220573303:web:d3b5796ccbdf3562cd0a72",
        "storageBucket":"pag--parvuart.firebasestorage.app",
        "apiKey":"AIzaSyDIju88P7AVoevQFDCKF2W-4wW4z_FIxmY",
        "authDomain":"pag--parvuart.firebaseapp.com",
        "messagingSenderId":"163220573303"})), 
        provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), 
  ]
};
