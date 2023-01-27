import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AdmindashboardComponent } from './components/pages/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './components/pages/userdashboard/userdashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CaterersListComponent } from './components/caterers/caterers-list/caterers-list.component';
import { CatererDetailsComponent } from './components/caterers/caterer-details/caterer-details.component';
import { CreateCatererComponent } from './components/caterers/create-caterer/create-caterer.component';
import { UpdateCatererComponent } from './components/caterers/update-caterer/update-caterer.component';
import { EventsComponent } from './components/events/events/events.component';
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { EventsDetailsComponent } from './components/events/events-details/events-details.component';
import { UpdateEventsComponent } from './components/events/update-events/update-events.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { UpdateUsersComponent } from './components/users/update-users/update-users.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { CreateDecoratorsComponent } from './components/decorators/create-decorators/create-decorators.component';
import { UpdateDecoratorsComponent } from './components/decorators/update-decorators/update-decorators.component';
import { DecoratorsListComponent } from './components/decorators/decorators-list/decorators-list.component';
import { DecoratorDetailsComponent } from './components/decorators/decorator-details/decorator-details.component';
import { CreateLocationsComponent } from './components/locations/create-locations/create-locations.component';
import { UpdateLocationsComponent } from './components/locations/update-locations/update-locations.component';
import { LocationsListComponent } from './components/locations/locations-list/locations-list.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { CatListComponent } from './userdashcomponents/cat-list/cat-list.component';
import { CatDetailsComponent } from './userdashcomponents/cat-details/cat-details.component';
import { LocListComponent } from './userdashcomponents/loc-list/loc-list.component';
import { LocDetailsComponent } from './userdashcomponents/loc-details/loc-details.component';
import { DecListComponent } from './userdashcomponents/dec-list/dec-list.component';
import { DecDetailsComponent } from './userdashcomponents/dec-details/dec-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    LoginComponent,
    RegisterComponent,
    CaterersListComponent,
    CatererDetailsComponent,
    CreateCatererComponent,
    UpdateCatererComponent,
    EventsComponent,
    EventsListComponent,
    EventsDetailsComponent,
    UpdateEventsComponent,
    CreateUsersComponent,
    UpdateUsersComponent,
    UserDetailsComponent,
    UsersListComponent,
    CreateDecoratorsComponent,
    UpdateDecoratorsComponent,
    DecoratorsListComponent,
    DecoratorDetailsComponent,
    CreateLocationsComponent,
    UpdateLocationsComponent,
    LocationsListComponent,
    LocationDetailsComponent,
    CatListComponent,
    CatDetailsComponent,
    LocListComponent,
    LocDetailsComponent,
    DecListComponent,
    DecDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
