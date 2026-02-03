import { Component, OnInit } from '@angular/core';
import {}
@Component({
  selector: 'app-final-space',
  standalone: false,
  templateUrl: './final-space.html',
  styleUrl: './final-space.css',
})
export class FinalSpace implements OnInit{
  dataApi!: InfoApiFS;
  characters: CharacterRM[] = [];
  activeIndex: number|null=null;
  charName: string = "";
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;

}
