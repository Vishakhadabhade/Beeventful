import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatererDetailsComponent } from './components/caterers/caterer-details/caterer-details.component';
import { CaterersListComponent } from './components/caterers/caterers-list/caterers-list.component';
import { CreateCatererComponent } from './components/caterers/create-caterer/create-caterer.component';
import { CreateDecoratorsComponent } from './components/decorators/create-decorators/create-decorators.component';
import { DecoratorDetailsComponent } from './components/decorators/decorator-details/decorator-details.component';
import { DecoratorsListComponent } from './components/decorators/decorators-list/decorators-list.component';
import { EventsDetailsComponent } from './components/events/events-details/events-details.component';
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { EventsComponent } from './components/events/events/events.component';
import { UpdateEventsComponent } from './components/events/update-events/update-events.component';
import { CreateLocationsComponent } from './components/locations/create-locations/create-locations.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { LocationsListComponent } from './components/locations/locations-list/locations-list.component';
import { UpdateLocationsComponent } from './components/locations/update-locations/update-locations.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AdmindashboardComponent } from './components/pages/admindashboard/admindashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { UserdashboardComponent } from './components/pages/userdashboard/userdashboard.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { UpdateUsersComponent } from './components/users/update-users/update-users.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { CatDetailsComponent } from './userdashcomponents/cat-details/cat-details.component';
import { CatListComponent } from './userdashcomponents/cat-list/cat-list.component';
import { DecDetailsComponent } from './userdashcomponents/dec-details/dec-details.component';
import { DecListComponent } from './userdashcomponents/dec-list/dec-list.component';
import { LocDetailsComponent } from './userdashcomponents/loc-details/loc-details.component';
import { LocListComponent } from './userdashcomponents/loc-list/loc-list.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'admindashboard' , component : AdmindashboardComponent},
  {path : 'userdashboard' , component : UserdashboardComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'caterers' , component : CaterersListComponent},
  {path : 'caterer-details/:id' , component : CatererDetailsComponent},
  {path : 'create-caterer' , component : CreateCatererComponent},
  {path :'update-caterer/:id' , component : CreateCatererComponent},
{path : 'events' , component : EventsListComponent},
{path :'create-event' , component : EventsComponent},
{path :'update-event/:id' , component : UpdateEventsComponent},
{path :'event-details/:id' , component : EventsDetailsComponent},
{path : 'locations' , component : LocationsListComponent},
{path :'create-location' , component : CreateLocationsComponent},
{path :'location-detail/:id' , component : LocationDetailsComponent},
{path :'update-location/:id' , component : UpdateLocationsComponent},
{path : 'decorators' , component : DecoratorsListComponent},
{path :'create-decorator' , component : CreateDecoratorsComponent},
{path :'update-decorator/:id' , component : CreateDecoratorsComponent},
{path :'decorator-details/:id' , component : DecoratorDetailsComponent},
{path : 'users' , component : UsersListComponent},
{path : 'create-user' , component : CreateUsersComponent},
{path : 'update-user/:id' , component : UpdateUsersComponent},
{path :'user-details/:id' , component : UserDetailsComponent},
{path : 'cat-list' , component : CatListComponent},
{path : 'cat-detail/:id' , component : CatDetailsComponent},
{path : 'dec-list' , component : DecListComponent},
{path : 'dec-detail/:id' , component : DecDetailsComponent},
{path : 'loc-list' , component : LocListComponent},
{path : 'loc-detail/:id' , component : LocDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
