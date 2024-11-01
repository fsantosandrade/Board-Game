import { Component, Input } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../../../../public/types/playerType';
PlayerComponent

@Component({
  selector: 'app-card-game',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.css'
})
export class CardGameComponent {
  @Input() cardImg:string = ''
  @Input() color:string = ''
  @Input() players:Player[] = []
  @Input() cardNumber:number = 0
}
