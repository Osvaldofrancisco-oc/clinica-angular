import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path:'', component:AppComponent },
    { path:'/servico', component:ServicoComponent},
    { path:'/agendamento', component:AgendamentoComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }