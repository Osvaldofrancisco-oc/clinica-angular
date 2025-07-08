import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { RouterModule } from '@angular/router'; // ✅ IMPORTANTE
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from "./componentes/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone:true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    imports: [NgbModule,RouterModule,CommonModule,NavbarComponent,FooterComponent]
})
export class AppComponent {
  title = 'TestAngular';
}
