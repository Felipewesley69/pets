import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  user =
    {
      id: 1,
      urlImage: './../../../../../assets/img/perfil.jpg',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    }

  constructor() { }

  ngOnInit() {
  }

}
