import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone:true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.less'
})
export class FooterComponent {
currentYear: number = new Date().getFullYear();
}
