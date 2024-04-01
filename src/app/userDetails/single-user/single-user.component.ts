import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent {
  userId: string | any;
  user!: any;
  id!: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UsersDataService,
    private _location: Location
  ) {}

  //Fetches data of the user based on the ID from the route
  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getUser();
  }

  // Fetches user details based on the ID
  getUser() {
    this.userService.getUserDetails(this.id).subscribe(
      (res: any) => {
        this.user = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Navigates back to the all users page
  backToAllUsers() {
    this._location.back();
  }
}
