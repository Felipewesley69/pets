import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-feed',
  templateUrl: './content-feed.component.html',
  styleUrls: ['./content-feed.component.scss']
})
export class ContentFeedComponent implements OnInit {

  lista = [
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    },
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub2.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    },
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    },
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub2.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    },
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    },
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub2.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    },
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    },
    {
      id: 1,
      urlImage: './../../../../../assets/img/avatar-perfil.png',
      nameUser: 'Felipe Lemos',
      time: '10h',
      text: 'Expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.',
      urlImgPub: './../../../../../assets/img/pub.jpg',
      likes: 145,
      coments: 145000,
      shared: 125000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
