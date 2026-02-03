import { Component, OnInit } from '@angular/core';
import { SerValorant } from '../../services/ser-valorant';
import { VLinterface, CharacterVL, Role,  } from '../../common/vlinterface';

@Component({
  selector: 'app-com-valorant',
  standalone: false,
  templateUrl: './com-valorant.html',
  styleUrl: './com-valorant.css',
})
export class ComValorant implements OnInit{
  dataApi!: VLinterface;
    characters: CharacterVL[] = [];
    activeIndex: number|null=null;
    charName: string = "";
    currentPage: number = 1;
    totalPages: number = 0;
    pageToGo: number = 1;
  
    constructor(private vlservice: SerValorant) { }
    ngOnInit(): void {
      this.loadCharacters();
    }
    private loadCharacters() {
      this.vlservice.getCharacters(/* this.currentPage */).subscribe({
        next: value => {
          this.dataApi = value;
          this.characters = this.dataApi.data;
          //this.totalPages = this.dataApi.info.pages;
          
          
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
      this.characters = this.characters.filter(char => char.displayName.toLowerCase().includes(this.charName.toLowerCase()));
    }
    resetFilter() {
      this.loadCharacters();
      this.charName = "";
    }

    orderByRole() {
      this.characters.sort((a,b)=> {
        if(a.role.displayName.toLowerCase() > b.role.displayName.toLowerCase()) return 1;
        else if(a.role.displayName.toLowerCase() < b.role.displayName.toLowerCase()) return -1;
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
