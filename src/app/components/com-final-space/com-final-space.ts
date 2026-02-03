import { Component, OnInit } from '@angular/core';
import { FinalSpace } from '../../services/final-space';
import { CharactersFS } from '../../common/fsinterface';

@Component({
  selector: 'app-com-final-space',
  standalone: false,
  templateUrl: './com-final-space.html',
  styleUrl: './com-final-space.css',
})
export class ComFinalSpace {
  characters: CharactersFS[] = [];
  charactersPage: CharactersFS[] = [];
  activeIndexAbility: number | null = null;
  activeIndexAlias: number | null = null;
  charName: string = '';
  currentPage: number = 1;
  totalPages: number = 0;
  perPage: number = 15;
  pageToGo: number = 1;
  prueba: boolean = false;

  constructor(private fsservice: FinalSpace) {}
  ngOnInit(): void {
    this.loadCharacters();
  }
  private loadCharacters() {
    this.fsservice.getCharacters(this.currentPage).subscribe({
      next: (value) => {
        this.characters = value;
        this.calTotalPages();
        this.upPage(1);
        
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      },
    });
  }

  calTotalPages() {
    this.totalPages = Math.ceil(
      this.characters.length / this.perPage,
    );
  }

  upPage(page: number) {
    this.currentPage = page;

    const startSlice = (page - 1) * this.perPage;
    const endSlice = page * this.perPage;

    this.charactersPage = this.characters.slice(startSlice, endSlice);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.upPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.upPage(this.currentPage - 1);
    }
  }

  toggleAccordionAlias(index: number) {
    this.activeIndexAlias = this.activeIndexAlias === index ? null : index;
  }

  toggleAccordionAbilities(index: number) {
    this.activeIndexAbility = this.activeIndexAbility === index ? null : index;
  }

  filterByName() {
    this.charactersPage = this.characters.filter((char) =>
      char.name.toLowerCase().includes(this.charName.toLowerCase()),
    );
  }
  resetFilter() {
    this.charName = '';
    this.pageToGo = 1;
    this.loadCharacters();
  }
  
  orderByName() {
    this.charactersPage = this.characters.sort((a, b) =>
      a.name.trim().toLowerCase() > b.name.trim().toLowerCase()
        ? 1
        : a.name.trim().toLowerCase() < b.name.trim().toLowerCase()
          ? -1
          : 0,
    );
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.upPage(this.currentPage);
    } else {
      this.pageToGo = 0;
    }
  }
  
}
