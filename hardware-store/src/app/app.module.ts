import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarComponent } from './star/star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductApiService } from './services/product-api.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Ng6NotifyPopupModule } from 'ng6-notify-popup';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuardService } from './services/auth-guard.service';
import { DisplayClipartComponent } from './display-clipart/display-clipart.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    ConvertToSpacesPipe,
    NotFoundComponent,
    NewProductComponent,
    RegisterComponent,
    LoginComponent,
    DisplayClipartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatCardModule,
    Ng6NotifyPopupModule.forRoot(),
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent, canActivate: [AuthGuardService] },
      { path: 'add', component: NewProductComponent, canActivate: [AuthGuardService] },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [
    StarComponent
  ],
  providers: [ProductApiService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
