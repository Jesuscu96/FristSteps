import { Component, OnInit } from '@angular/core';
import { SerDragonBall } from '../../services/ser-dragon-ball'; 
import { DGBinterface, CharacterDGB, Info, Links } from '../../common/dgbinterface'; 

@Component({
  selector: 'app-com-dragon-ball',
  standalone: false,
  templateUrl: './com-dragon-ball.html',
  styleUrl: './com-dragon-ball.css',
})
export class ComDragonBall implements OnInit{
  dataApi!: DGBinterface;
  characters: CharacterDGB[] = [];
  activeIndex: number | null = null;
  charRace: string = '';
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  name: string = '';
  limit: number = 10;
  limitPage: number = 10;


  constructor(private dgbsservice: SerDragonBall) {}
  ngOnInit(): void {
    this.loadCharacters();
  }
  private loadCharacters() {
    this.dgbsservice
      .getCharacters(this.currentPage, this.limit)
      .subscribe({
        next: (value) => {
          this.dataApi = value;
          this.characters = this.dataApi.items;
          this.totalPages = this.dataApi.meta.totalPages;
          // console.log(value);
          // console.log(this.characters);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log('Done');
        },
      });
  }
  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  filterByRace() {
    this.characters = this.characters.filter(char => char.race.toLowerCase().includes(this.charRace.toLowerCase()));
  }
  resetFilter() {
    this.loadCharacters();
    this.charRace = '';
  }

  orderByName() {
    this.characters.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else return 0;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
    } else {
      this.pageToGo = 0;
    }
  }
  toPageLimit(page: number) {
    this.limit = this.limitPage;
    this.loadCharacters();
  }
  firstPage() {
    this.currentPage = 1;
    this.loadCharacters();
  }
  lastPage() {
    this.currentPage = this.totalPages;
    this.loadCharacters();
  }
}
