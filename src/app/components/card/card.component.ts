import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() nome!: string;
  @Input() imagem!: string;
  @Input() tipo!: string;
  @Input() peso!: number;
}
