import { Component } from '@angular/core';
import { Disney } from '../../services/disney';
import { CharacterDS, Dsinterface } from '../../common/dsinterface';

@Component({
  selector: 'app-comdisney',
  standalone: false,
  templateUrl: './comdisney.html',
  styleUrl: './comdisney.css',
})
export class Comdisney {
  dataApi!: Dsinterface;
  characters: CharacterDS[] = [];
  activeIndex: number | null = null;
  charName: string = '';
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  name:string = "";
  pageSize:number=20;

  constructor(private dssservice: Disney) {}
  ngOnInit(): void {
    this.loadCharacters();
  }
  private loadCharacters() {
    this.dssservice.getCharacters(this.currentPage,this.pageSize, this.name).subscribe({
      next: (value) => {
        this.dataApi = value;
        this.characters = this.dataApi.data;
        this.totalPages = this.dataApi.info.totalPages;
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
  // toggleAccordionFilms(index: number) {
  //   this.activeIndex = this.activeIndex === index ? null : index;
  // }
  // toggleAccordionShort(index: number) {
  //   this.activeIndex = this.activeIndex === index ? null : index;
  // }
  // toggleAccordionShows(index: number) {
  //   this.activeIndex = this.activeIndex === index ? null : index;
  // }
  // toggleAccordionGames(index: number) {
  //   this.activeIndex = this.activeIndex === index ? null : index;
  // }
  // toggleAccordionPark(index: number) {
  //   this.activeIndex = this.activeIndex === index ? null : index;
  // }

  filterByName() {
    this.name = this.charName;
    this.loadCharacters();
  }
  resetFilter() {
    this.loadCharacters();
    this.charName = '';
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
}
