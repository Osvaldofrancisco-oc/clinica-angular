import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';

export const routes: Routes = [
  // Redireciona "/" para "/home"
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Rotas principais
  { path: 'home', component: HomeComponent },
  { path: 'servico', component: ServicoComponent },
  { path: 'agendamento', component: AgendamentoComponent },

  // Redireciona qualquer rota desconhecida para /home
  { path: '**', redirectTo: 'home' }
];
