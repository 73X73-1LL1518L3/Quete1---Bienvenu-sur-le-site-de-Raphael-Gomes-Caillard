import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raclette-party',
  templateUrl: './raclette-party.component.html',
  styleUrls: ['./raclette-party.component.css']
})
export class RaclettePartyComponent implements OnInit {

  title: string = "Raclette party 🧀";

  isThisIngredientVital: boolean = true;

  isGuestListDisplayed: boolean = true;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];


  constructor() { }

  ngOnInit(): void {
  }

}
