import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatBadgeModule} from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho/carrinho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login/login.component';
import { PagamentoComponent } from './pages/pagamento/pagamento/pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    LoginComponent,
    PagamentoComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
