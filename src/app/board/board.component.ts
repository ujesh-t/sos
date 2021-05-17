import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  tiles: any[];
  sIsNext?: boolean;

  constructor() {  this.tiles = Array(64).fill(null); }

  ngOnInit(): void {
    this.newGame();
  }

  makeMove(idx: number){
    if(!this.tiles[idx]){
      this.tiles?.splice(idx,1, this.player);
      this.sIsNext = !this.sIsNext;
    }
  }

  newGame(): void {
    this.tiles = Array(64).fill(null);
    this.sIsNext = true;
  }
  get player() {
    return this.sIsNext ? 'S':'O';
  }
}
