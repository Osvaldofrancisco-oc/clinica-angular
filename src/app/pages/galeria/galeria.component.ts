import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, ModalModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.less'],
  providers: [BsModalService]
})
export class GaleriaComponent {
  imagens: string[] = [
    'assets/img/img/1.jpg',
    'assets/img/img/2.jpg',
    'assets/img/img/3.jpg',
    'assets/img/img/4.jpg',
    'assets/img/img/5.jpg',
    'assets/img/img/6.jpg',
    'assets/img/img/7.jpg',
    'assets/img/img/8.jpg',
    'assets/img/img/9.jpg',
    'assets/img/img/10.jpg',
    'assets/img/img/11.jpg',
    'assets/img/img/12.jpg',
    'assets/img/img/13.jpg',
    'assets/img/img/14.jpg',
    'assets/img/img/15.jpg',
    'assets/img/img/16.jpg',
    'assets/img/img/17.jpg',
    'assets/img/img/3.jpg'
  ];

  imagemSelecionada: string = '';
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  abrirModal(template: TemplateRef<any>, imagem: string) {
    this.imagemSelecionada = imagem;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal-lg'
    });
  }

  fecharModal() {
    this.modalRef?.hide();
  }
}
