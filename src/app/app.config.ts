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
      initializeApp({"projectId":"parvu-art","appId":"1:564598677316:web:5bc1dbfc2e36840bf80111","storageBucket":
        "parvu-art.firebasestorage.app","apiKey":
        "AIzaSyCG6rkgRfHjaQ1QA8YLatUIjQpzRl-3Wdw","authDomain":
        "parvu-art.firebaseapp.com","messagingSenderId":"564598677316"})), 
        provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ]
};
