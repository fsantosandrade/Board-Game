import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  imports: [ CardGameComponent, DiceComponent, InformationComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  title = 'board-game';
  casas:Case[] = []
  turns:boolean[] = [true, false, false, false]
  turnoAtual:number = 0
  qtdPlayers:number = 2
  PlayersColors:string[] = ['red', 'purple', 'yellow', 'orange']
  PlayersNames:string[] = []
  players: Player[] = []
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
    private router: Router,
    private numPlrs: ActivatedRoute ){}

  ngOnInit(): void {
    this.casas = this.caseService.atributionTypes()
    this.numPlrs.queryParams.subscribe(p => {
      this.qtdPlayers = p['qtdPlayers']
      this.PlayersNames[0] = p['nameP1']
      this.PlayersNames[1] = p['nameP2']
      this.PlayersNames[2] = p['nameP3']
      this.PlayersNames[3] = p['nameP4']
    })
    this.players = Array.from({length: this.qtdPlayers}, (_, i) => ({
      id: i + 1,
      name: this.PlayersNames[i],
      color: this.PlayersColors[i],
      position: 0,
      points: 0,
      laps: 1
    }))
    
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
            this.descriptionPopup = this.moreThanTwoPlayers() ? `Escolha alguem para voltar ${Math.ceil(points / 2)} casas!` : `O outro jogador voltou ${Math.ceil(points / 2)} casas!`

            this.attPoints(playerAtual, points, 'coringa', 1)
            break;

          case 2:
            this.descriptionPopup = this.moreThanTwoPlayers() ? `Escolha um jogador e roube metade dos seus pontos!` : `Você roubou metade dos pontos do outro jogador!`

            this.attPoints(playerAtual, points, 'coringa', 2)
            break; 

          case 3:
            this.descriptionPopup = this.moreThanTwoPlayers() ? `Troque de lugar com alguém obrigatoriamente!` : `Você trocou obrigadoriamente de lugar com o outro jogador!`

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
  }

  advanceTurn() {
    if (this.turnoAtual === this.players.length - 1) {
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
      const haveThreePlayerOrMore = this.players.length > 2
      
      if(haveThreePlayerOrMore){
        this.optionsValid.length = 0
        this.optionsValid = this.players.map(p => (p.id !== playerAtual.id ? p.id : 0)).filter(id => id !== 0); 
        
            this.optionsIsClosed = true
      }else {
          this.playerSelectedOnRandowCard = this.players.find(p => p.id !== playerAtual.id)?.id
          console.log(this.playerSelectedOnRandowCard);
      }

      switch(typeCoringa) {
        case 1:
          if(haveThreePlayerOrMore) {
            await this.waitForVariableChange(() => this.playerSelectedOnRandowCard)
          } 
          
          this.players[this.playerSelectedOnRandowCard! - 1].position -= Math.floor(pontos / 2)

          if(this.players[this.playerSelectedOnRandowCard! - 1].position <= 0){
            this.players[this.playerSelectedOnRandowCard! - 1].position = 1
          }

          this.playerSelectedOnRandowCard = 0
          this.optionsIsClosed = false
          break
  
        case 2:
          if(haveThreePlayerOrMore) {
            await this.waitForVariableChange(() => this.playerSelectedOnRandowCard)
          } 

          const pointsDvd2 = Math.floor(this.players[this.playerSelectedOnRandowCard! - 1].points / 2)

          playerAtual.points += pointsDvd2
          this.players[this.playerSelectedOnRandowCard! - 1].points -= pointsDvd2

          this.playerSelectedOnRandowCard = 0
          this.optionsIsClosed = false
          break
  
        case 3:
          if(haveThreePlayerOrMore) {
            await this.waitForVariableChange(() => this.playerSelectedOnRandowCard)
          } 

          const otherPlayer = this.players[this.playerSelectedOnRandowCard! - 1].position

          this.players[this.playerSelectedOnRandowCard! - 1].position = playerAtual.position

          playerAtual.position = otherPlayer

          this.playerSelectedOnRandowCard = 0
          this.optionsIsClosed = false
          break

        case 4:
          this.optionsIsClosed = false
          this.playerSelectedOnRandowCard = 0

          playerAtual.position -= Math.ceil(pontos / 2)

          if(playerAtual.position <= 0) {
            playerAtual.position = 1
          }
          break
      }
    }

    if(playerAtual.points >= 100) {
      const rankedPlayers = this.players.sort((a, b) => b.points - a.points);

      const [winner, second, third] = rankedPlayers

      this.router.navigate(['winner'], { queryParams: { winner: winner.name, second: second.name, third: third?.name }})
    }
  }

  moreThanTwoPlayers(): boolean {
    return this.players.length > 2 ? true : false
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

  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any): void { $event.returnValue = 'Tem certeza que deseja sair? Toda a corrida será reiniciada, junto aos pontos e posições das casas!'; }
}
