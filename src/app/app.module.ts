import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './AllUsers/users-list/users-list.component';
import { SingleUserComponent } from './userDetails/single-user/single-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Layout/header/header.component';
import { SearchPipePipe } from './Pipes/search-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerComponent } from './loading/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    SingleUserComponent,
    HeaderComponent,
    SearchPipePipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
