import { Component, OnInit } from '@angular/core';
import { RickMorty } from '../../services/rick-morty';
import { CharacterRM, InfoApiRM } from '../../common/rminterface';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info implements OnInit{
  dataApi!: InfoApiRM;
  characters: CharacterRM[] = [];
  activeIndex: number|null=null;
  charName: string = "";
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;

  constructor(private rmservice: RickMorty) { }
  ngOnInit(): void {
    this.loadCharacters();
  }
  private loadCharacters() {
    this.rmservice.getCharacters(this.currentPage).subscribe({
      next: value => {
        this.dataApi = value;
        this.characters = this.dataApi.results;
        this.totalPages = this.dataApi.info.pages;
        // console.log(value);
        // console.log(this.characters);
        
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log("Done");
      },
      
  })
  }
  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  filterByName() {
    this.characters = this.characters.filter(char => char.name.toLowerCase().includes(this.charName.toLowerCase()));
  }
  resetFilter() {
    this.loadCharacters();
    this.charName = "";
  }
  orderByOrigin() {
    this.characters.sort((a,b)=> {
      if(a.origin.name.toLowerCase() > b.origin.name.toLowerCase()) return 1;
      else if(a.origin.name.toLowerCase() < b.origin.name.toLowerCase()) return -1;
      else return 0;
  })
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
  goToPage(page:number) {
    if(page >= 1 && page <=this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
    }else {
      this.pageToGo = 0;
    }
    

  }

}
