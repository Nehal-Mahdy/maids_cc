import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private activeRoute: ActivatedRoute,
  ){}

  // Declare an Output event emitter named 'searchChanged' that emits strings
  @Output() searchChanged = new EventEmitter<string>();
  searchTerm: string = '';


  id!:string;
  showSearchInput: boolean = true;

  //hiding the search input if the params contained an id
  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id']
    if(this.id){
      this.showSearchInput = false;
    }
  }


//Emit the current search term using the 'searchChanged' event
  onSearch() {
    this.searchChanged.emit(this.searchTerm);
  }




}