import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {LoggingInterceptor} from './logging.interceptor'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BottleService } from './bottle.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsComponent
      }
    ]),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true}, BottleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
