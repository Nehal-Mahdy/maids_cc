import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user';
import { UsersDataService } from 'src/app/Services/users-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {


  users: User[] = [];

  @Input() searchTerm: string = '';

  //for pagination
  total_pages: number=0;
  page :number=1;
  totalLength:any;
  public spinner :boolean = false; 

  constructor(private userService: UsersDataService, private router:Router) { }
//fetching data from user service and applying spinner mechanism to improve ux
  ngOnInit(){
    this.userService.getUsersList().subscribe(res  => {
     
      setTimeout(() => {
        this.users = Object.values(res);
        this.totalLength = this.users.length;
      }, 800);

      setTimeout(() => {
        this.spinner= true
      }, 800);
    });

  }

  //specifying search term to apply the search pipe
  onSearchTermChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  //navigating user to user's details page
  userDetails(id:string){
    this.router.navigate(["user",id]);
  }
 
}
