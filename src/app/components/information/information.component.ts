import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  @Input() close:boolean = false
  @Input() card:string = ""
  @Input() description:string = ""
  @Input() color:string = ""
  @Input() optionsValid:number[] = []

  @Output() closeEvent = new EventEmitter<void>();

  closePopup() {
    if(this.options) {
      if (this.selected !== undefined) {
        this.clickSound();
        this.close = false;
        this.optionSelected.emit(this.selected);
        this.selected = undefined;
        this.closeEvent.emit();
      } else {
        alert("Selecione pelo menos uma opção para fechar o popup.");
      }
    }else {
      this.clickSound();
      this.close = false;
      this.optionSelected.emit(this.selected);
      this.selected = undefined;
      this.closeEvent.emit();
    }
  }

  @Output() optionSelected = new EventEmitter<number | undefined>();
  selected: number | undefined;
  @Input() options:boolean = false

  selectOption(option: number) {
    this.clickSound()
    // Marca o checkbox selecionado e desmarca os outros
    this.selected = this.selected === option ? undefined : option;
  }

  private clickSound() {
    const click = new Audio('sounds/click.mp3')
    click.play()
  }
}
