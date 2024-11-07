import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  modalActive: string | null = null;

  constructor( private route: Router ){}

  iniciarJogo(numPlayers: string) {
    this.soundClick()
    const numPlrs = Number(numPlayers)

    if(numPlrs >= 2 && numPlrs <= 4){
      this.route.navigate(['board-game'], {queryParams: {qtdPlayers: numPlrs}})
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
}
