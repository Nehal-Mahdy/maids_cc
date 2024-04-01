import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Interfaces/user';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  //searching function to filter users by their ids
  transform(users: User[], searchTerm: string): User[] {
    if (!users || !searchTerm) {
      return users;
    }
    searchTerm = searchTerm.toLowerCase();
    return users.filter(user => user.id.toString().toLowerCase().includes(searchTerm));
  }



  }

