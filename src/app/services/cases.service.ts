import { Injectable } from '@angular/core';
import { cases } from '../../../public/data/cases';
import { Case } from '../../../public/types/caseType';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  cases: Case[] = cases

  constructor() { }

  atributionTypes(): Case[] {
    const predefinedTypes = [
      ...Array(0).fill(2), // 11 elementos com o tipo sorte
      ...Array(0).fill(3), // 6 elementos com o tipo azar
      ...Array(22).fill(4) // 6 elementos com o tipo coringa
    ];
  
    // Embaralha a lista de tipos para distribuir aleatoriamente
    for (let i = predefinedTypes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [predefinedTypes[i], predefinedTypes[j]] = [predefinedTypes[j], predefinedTypes[i]];
    }

    this.cases.map((c: Case, i) => {
      if(i === 0) {
        c.type = 1
      }else {
        c.type = predefinedTypes[i - 1]
      }
       this.setAtributes(c)
    })

    return this.cases
  }

  private setAtributes(card: Case) {
    switch (card.type) {
      case 1:
        card.color = '#546E7A'
        card.img = 'imgs/start.png'
        card.title = "Start"
        card.description = "sdsa"
        break;
      case 2:
        card.color = '#5BA821'
        card.img = 'imgs/lucky.png'
        card.title = "SORTE"
        card.description = "Você caiu na casa de sorte e ganhou: "
        break;
    
      case 3:
        card.color = '#F44336 '
        card.img = 'imgs/bad.png'
        card.title = "AZAR"
        card.description = "Você caiu na casa de azar e perdeu:"
        break;

      case 4: 
        card.color = '#E7A720'
        card.img = 'imgs/coringa.png'
        card.title = "ALEATÓRIA"
        card.description = "..."
        break;

      default:
        break;
    }
  }
}
