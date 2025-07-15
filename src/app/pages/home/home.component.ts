import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroselComponent } from '../carrosel/carrosel.component';
import { SobreNosComponent } from '../sobre-nos/sobre-nos.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { UtentesComponent } from '../utentes/utentes.component';



@Component({
  selector: 'app-home',
  standalone: true, // ✅ necessário
  imports: [CommonModule, CarroselComponent, SobreNosComponent, GaleriaComponent,UtentesComponent], // ✅ agora funciona
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {}
