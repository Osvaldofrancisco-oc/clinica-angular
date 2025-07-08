import { Component } from '@angular/core';
import { CarroselComponent } from "../carrosel/carrosel.component";
import { SobreNosComponent } from "../sobre-nos/sobre-nos.component";
import { GaleriaComponent } from "../galeria/galeria.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarroselComponent, SobreNosComponent, GaleriaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
