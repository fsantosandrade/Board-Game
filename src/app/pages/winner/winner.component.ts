import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.css'
})
export class WinnerComponent implements OnInit {
  segundo:string | null = null
  primeiro:string | null = null
  terceiro:string | null = null

  constructor( private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.primeiro = params['winner']
      this.segundo = params['second']
      this.terceiro = params['third']
    })
  }
}
