import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  modalActive: string | null = null;

  constructor( private route: Router ){}

  iniciarJogo(numPlayers: string) {
    const numPlrs = Number(numPlayers)

    if(numPlrs >= 2 && numPlrs <= 4){
      this.route.navigate(['board-game'], {queryParams: {qtdPlayers: numPlrs}})
    }
  }

  openModal(modalId: string) {
    this.modalActive = modalId;
}

  closeModal() {
    this.modalActive = null;
  }
}
