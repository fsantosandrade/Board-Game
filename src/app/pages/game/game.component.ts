import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardGameComponent } from '../../components/card-game/card-game.component';
import { Case } from '../../../../public/types/caseType';
import { Player } from '../../../../public/types/playerType';
import { CasesService } from '../../services/cases.service';
import { DiceComponent } from '../../components/dice/dice.component';
import { InformationComponent } from '../../components/information/information.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterOutlet, CardGameComponent, DiceComponent, InformationComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  title = 'board-game';
  casas:Case[] = []
  turns:boolean[] = [true, false, false, false]
  turnoAtual:number = 0
  players: Player[] = [{id:1, color:'red', position: 0, points: 99, laps: 1}, {id:2, color:'purple', position: 0, points: 99, laps: 1}, {id:3, color:'yellow', position: 0, points: 99, laps: 1}, {id:4, color:'orange', position: 0, points: 99, laps: 1}]
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

  constructor(
    private caseService: CasesService, 
    private router: Router){}

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

    if(this.players[this.turnoAtual].position > 22) {
      this.players[this.turnoAtual].position = 1 + (this.players[this.turnoAtual].position - 23)
      this.players[this.turnoAtual].laps++
    }

    await this.popup(this.casas[this.players[this.turnoAtual].position - 1], this.players[this.turnoAtual])

    this.advanceTurn()
  }
  
  popup(local: Case, playerAtual: Player) {
    const points = Math.floor(Math.random() * 6) + 1

    switch (local.type) {
      case 2:
        this.titlePopup = local.title
        this.descriptionPopup = local.description + ` ${points} ponto(s) x ${playerAtual.laps}!`
        this.colorPopup = local.color
        this.popupIsClosed = true

        this.attPoints(playerAtual, points, 'sorte')
        break;

      case 3:
        this.titlePopup = local.title
        this.descriptionPopup = local.description + ` ${Math.ceil(points / 2)} ponto(s)!`
        this.colorPopup = local.color
        this.popupIsClosed = true

        this.attPoints(playerAtual, points, 'azar')
        break;

      case 4:
        const cartaCoringa = Math.floor(Math.random() * 4) + 1
        this.titlePopup = local.title
        this.colorPopup = local.color
        this.popupIsClosed = true

        switch(cartaCoringa) {
          case 1:
            this.descriptionPopup = `Escolha alguem para voltar ${Math.ceil(points / 2)} casas!`

            this.attPoints(playerAtual, points, 'coringa', 1)
            break;

          case 2:
            this.descriptionPopup = `Escolha um jogador e roube metade dos seus pontos!`

            this.attPoints(playerAtual, points, 'coringa', 2)
            break; 

          case 3:
            this.descriptionPopup = `Troque de lugar com alguém obrigatoriamente!`

            this.attPoints(playerAtual, points, 'coringa', 3)
            break;

          case 4:
            this.descriptionPopup = `Você voltou: ${Math.ceil(points / 2)} casa(s)!`

            this.attPoints(playerAtual, points, 'coringa', 4)
            break
        }
        break;
    
      default:
        this.popupIsClosed = false; 
        break;
    }

    if(playerAtual.points >= 100) {
      this.router.navigate(['winner'], { queryParams: { winner: playerAtual.id }})
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
      playerAtual.points += pontos * playerAtual.laps
    }else if( typeCard === 'azar'){
      playerAtual.points -= Math.ceil(pontos / 2)
      if(playerAtual.points < 0){
        playerAtual.points = 0
      }
    }else if(typeCard === 'coringa'){
      this.optionsValid.length = 0
      this.optionsValid = this.players.map(p => (p.id !== playerAtual.id ? p.id : 0)).filter(id => id !== 0); 
      
          this.optionsIsClosed = true

      switch(typeCoringa) {
        case 1:
          await this.waitForVariableChange(() => this.playerSelectedOnRandowCard)
          
          this.players[this.playerSelectedOnRandowCard! - 1].position -= Math.floor(pontos / 2)

          if(this.players[this.playerSelectedOnRandowCard! - 1].position <= 0){
            this.players[this.playerSelectedOnRandowCard! - 1].position = 1
          }

          this.playerSelectedOnRandowCard = 0
          this.optionsIsClosed = false
          break
  
        case 2:
          await this.waitForVariableChange(() => this.playerSelectedOnRandowCard)

          const pointsDvd2 = Math.floor(this.players[this.playerSelectedOnRandowCard! - 1].points / 2)

          playerAtual.points += pointsDvd2
          this.players[this.playerSelectedOnRandowCard! - 1].points -= pointsDvd2

          this.playerSelectedOnRandowCard = 0
          this.optionsIsClosed = false
          break
  
        case 3:
          await this.waitForVariableChange(() => this.playerSelectedOnRandowCard)

          const locPlayer1 = this.players[this.playerSelectedOnRandowCard! - 1].position

          this.players[this.playerSelectedOnRandowCard! - 1].position = playerAtual.position

          playerAtual.position = locPlayer1

          this.playerSelectedOnRandowCard = 0
          this.optionsIsClosed = false
          break

        case 4:
          this.optionsIsClosed = false

          playerAtual.position -= Math.ceil(pontos / 2)

          if(playerAtual.position <= 0) {
            playerAtual.position = 1
          }
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
