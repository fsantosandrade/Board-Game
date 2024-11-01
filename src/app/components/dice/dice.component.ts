import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent {
  diceFaces: boolean[] = [true, false, false, false, false, false];
  @Input() canRoll:boolean = false
  private interval: any;
  private rollDuration = 1000;

  @Output() diceRolled = new EventEmitter<number>()

  rollDice() {
    if(!this.canRoll) return

    let currentFace = 0;

    this.interval = setInterval(() => {
      this.resetDice();
      this.diceFaces[currentFace] = true;

      currentFace = (currentFace + 1) % 6;
    }, 100); 

    setTimeout(() => {
      clearInterval(this.interval);
      this.showRandomFace();
    }, this.rollDuration);
  }

  private resetDice() {
    this.diceFaces.fill(false);
  }

  private showRandomFace() {
    const randomRoll = Math.floor(Math.random() * 6);
    this.resetDice();
    this.diceFaces[randomRoll] = true;

    this.diceRolled.emit(randomRoll + 1)
  }
}
