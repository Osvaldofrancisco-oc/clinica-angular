import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { CarroselComponent } from "./carrosel/carrosel.component";
import { SobreNosComponent } from "./sobre-nos/sobre-nos.component";
import { GaleriaComponent } from "./galeria/galeria.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NgbModule, NavbarComponent, CarroselComponent, SobreNosComponent, GaleriaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TestAngular';
}
