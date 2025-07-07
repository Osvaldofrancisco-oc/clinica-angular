import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  providers:[BsModalService],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.less'
})
export class GaleriaComponent {


    modalRef?: BsModalRef;


  imagens: string[] = [
    '../../assets/img/img/1.jpg',
    '../../assets/img/img/2.jpg',
    '../../assets/img/img/3.jpg',
    '../../assets/img/img/4.jpg',
    '../../assets/img/img/5.jpg',
    '../../assets/img/img/6.jpg',
    '../../assets/img/img/7.jpg',
    '../../assets/img/img/8.jpg',
    '../../assets/img/img/9.jpg',
    '../../assets/img/img/10.jpg',
    '../../assets/img/img/11.jpg',
    '../../assets/img/img/12.jpg',
    '../../assets/img/img/13.jpg',
    '../../assets/img/img/14.jpg',
    '../../assets/img/img/15.jpg',
  ]

imagemSelecionada: string = '';

constructor(private modalService: NgbModal,private modalService1: BsModalService){

}

  openModal(template: TemplateRef<any>, imagem:string) {
    this.imagemSelecionada = imagem
    this.modalRef = this.modalService1.show(template);
  }


abrirModal(conteudoModal:any, imagem:string){
  this.imagemSelecionada = imagem;
  this.modalService.open(conteudoModal, {
    centered:true,
    backdrop:true,
    keyboard:true
  })
}

}
