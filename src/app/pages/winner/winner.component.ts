import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.css'
})
export class WinnerComponent implements OnInit {
  winnerId:number | null = null

  constructor( private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.winnerId = params['winner']
    })
  }
}
