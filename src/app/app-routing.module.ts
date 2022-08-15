import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho/carrinho.component';
import { PagamentoComponent } from './pages/pagamento/pagamento/pagamento.component';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'menu', component:MenuComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'carrinho', component:CarrinhoComponent},
{path:'login', component:LoginComponent},
{path:'pagamento', component:PagamentoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
