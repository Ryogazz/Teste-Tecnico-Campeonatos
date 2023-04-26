import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private router: Router) {}

  @Input() nome!: string;
  @Input() imagem!: string;
  @Input() tipo!: string;
  @Input() peso!: number;
  @Input() id!: number;

  verDetalhes(id: number) {
    this.router.navigate(['/pokemon', id]);
  }

}
