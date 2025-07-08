import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- IMPORTANTE
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { CarroselComponent } from "./pages/carrosel/carrosel.component";
import { SobreNosComponent } from "./pages/sobre-nos/sobre-nos.component";
import { GaleriaComponent } from "./pages/galeria/galeria.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from "./componentes/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // <-- IMPORTANTE
    NgbModule,
    NavbarComponent,
    CarroselComponent,
    SobreNosComponent,
    GaleriaComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TestAngular';
}
