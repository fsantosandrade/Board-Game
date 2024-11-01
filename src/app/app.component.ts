import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardGameComponent } from './components/card-game/card-game.component';
import { Case } from '../../public/types/caseType';
import { Player } from '../../public/types/playerType';
import { CasesService } from './services/cases.service';
import { DiceComponent } from './components/dice/dice.component';
import { InformationComponent } from './components/information/information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardGameComponent, DiceComponent, InformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'board-game';
  casas:Case[] = []
  turns:boolean[] = [true, false, false, false]
  turnoAtual:number = 0
  players: Player[] = [{id:1, color:'red', position: 0, points: 0}, {id:2, color:'purple', position: 0, points: 0}, {id:3, color:'yellow', position: 0, points: 0}, {id:4, color:'orange', position: 0, points: 0}]
  playerSelectedOnRandowCard:number | undefined = 0

  //Popup propriedades
  popupIsClosed:boolean = false
  titlePopup:string = ''
  descriptionPopup:string = ''
  colorPopup:string = ''
  optionsIsClosed:boolean = false
  optionsValid:number[] = []

  //dice
  @ViewChild('dice') diceComponent!: DiceComponent;

  constructor(private caseService: CasesService){}

  ngOnInit(): void {
    this.casas = this.caseService.atributionTypes()
    this.players.forEach(p => {
      p.position = 1
    })
  }

  onPopupClose() {
    this.popupIsClosed = false;
  }

  async onRoll(value: number) {
    this.turns.fill(false)
    
    this.players[this.turnoAtual].position += value

    if(this.players[this.turnoAtual].position > 24) {
      this.players[this.turnoAtual].position = 1 + (this.players[this.turnoAtual].position - 25)
    }

    await this.popup(this.casas[this.players[this.turnoAtual].position - 1], this.players[this.turnoAtual])

    this.advanceTurn()
  }
  
  popup(local: Case, playerAtual: Player) {
    const points = Math.floor(Math.random() * 6) + 1

    switch (local.type) {
      case 2:
        this.titlePopup = local.title
        this.descriptionPopup = local.description + ` ${points} ponto(s)!`
        this.colorPopup = local.color
        this.popupIsClosed = true

        this.attPoints(playerAtual, points, 'sorte')
        break;

      case 3:
        this.titlePopup = local.title
        this.descriptionPopup = local.description + ` ${points} ponto(s)!`
        this.colorPopup = local.color
        this.popupIsClosed = true

        this.attPoints(playerAtual, points, 'azar')
        break;

      case 4:
        const cartaCoringa = Math.floor(Math.random() * 10) + 1
        this.titlePopup = local.title
        this.colorPopup = local.color
        this.popupIsClosed = true

        switch(1) {
          case 1:
            this.descriptionPopup = `Escolha alguem para voltar ${points} casas!`

            this.attPoints(playerAtual, points, 'coringa', 1)
            break;
        }
        break;
    
      default:
        this.popupIsClosed = false; 
        break;
    }
  }

  advanceTurn() {
    if (this.turnoAtual === 3) {
      this.turnoAtual = 0;
    } else {
      this.turnoAtual++;
    }

    this.turns[this.turnoAtual] = true;
  }

  async attPoints(playerAtual: Player, pontos: number, typeCard: string, typeCoringa?:number) {
    if(typeCard === 'sorte'){
      playerAtual.points += pontos
    }else if( typeCard === 'azar'){
      playerAtual.points -= pontos
      if(playerAtual.points < 0){
        playerAtual.points = 0
      }
    }else if(typeCard === 'coringa'){
      switch(typeCoringa) {
        case 1:
          this.optionsValid.length = 0
          this.optionsValid = this.players.map(p => {
            if (p.id !== playerAtual.id) {
              return p.id;
            }else {
              return 0
            }
          })
          this.optionsIsClosed = true

          await this.waitForVariableChange(() => this.playerSelectedOnRandowCard)
          
          this.players[this.playerSelectedOnRandowCard! - 1].position -= pontos

          if(this.players[this.playerSelectedOnRandowCard! - 1].position <= 0){
            this.players[this.playerSelectedOnRandowCard! - 1].position = 0
          }

          this.optionsIsClosed = false
          break
  
        case 2:
          console.log(2);
          break
  
        case 3:
          console.log(3);
          break
      }
    }
  }

  onOptionSelected(value: number | undefined) {
    this.playerSelectedOnRandowCard = value
  }

  async waitForVariableChange(variableGetter: () => any, interval = 100): Promise<void> {
    const initialValue = variableGetter(); // Armazena o valor inicial da variável

    return new Promise((resolve) => {
        const checkVariable = setInterval(() => {
            if (variableGetter() !== initialValue) { // Verifica se o valor mudou
                clearInterval(checkVariable);
                resolve();
            }
        }, interval);
    });
  }
}
