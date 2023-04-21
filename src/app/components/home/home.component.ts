import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   campeonatos = [
    {
      nome: "Copa do Mundo de Futebol",
      logo: "https://example.com/copa-do-mundo.png",
      dataInicio: "2022-11-21",
      dataFim: "2022-12-18",
      paisSede: "Qatar",
    },
    {
      nome: "Olimpíadas de Tóquio",
      logo: "https://example.com/olimpiadas.png",
      dataInicio: "2021-07-23",
      dataFim: "2021-08-08",
      paisSede: "Japão",
    },
    {
      nome: "Roland Garros",
      logo: "https://example.com/roland-garros.png",
      dataInicio: "2022-05-22",
      dataFim: "2022-06-05",
      paisSede: "França",
    },

  ];

}
