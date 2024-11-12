import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  modalActive: string | null = null;
  numPlayers: number = 0; 
  playerNames: string[] = [];

  constructor( private route: Router ){}

  generatePlayerFields(numPlayers: number) {
    if(numPlayers > 4) numPlayers = 4
     this.playerNames = []; for (let i = 0; i < numPlayers; i++) { this.playerNames.push(''); } 
    }

  iniciarJogo(numPlayers: string) {
    this.soundClick()
    const numPlrs = Number(numPlayers)

    const validNames = this.playerNames.every(n => n.length >= 2 && n.length < 10);

    if(numPlrs >= 2 && numPlrs <= 4 && validNames){
      this.route.navigate(['board-game'], {queryParams: {
        qtdPlayers: numPlrs,
        nameP1: this.playerNames[0],
        nameP2: this.playerNames[1],
        nameP3: this.playerNames[2],
        nameP4: this.playerNames[3]
      }})
    }
  }

  openModal(modalId: string) {
    this.soundClick()
    this.modalActive = modalId;
}

  closeModal() {
    this.soundClick()
    this.modalActive = null;
  }

  soundClick() {
    const click = new Audio('sounds/click.mp3')
    click.play()
  }

  soundInput() {
    const input = new Audio('sounds/text.mp3')
    input.volume = 0.4
    input.play()
  }
}
