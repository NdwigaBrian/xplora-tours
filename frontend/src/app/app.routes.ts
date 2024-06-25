import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { BookingComponent } from './components/booking/booking.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent},
  { path: 'dashboard-user', component: DashboardUserComponent},
  { path: 'CreateEvent', component: CreateEventComponent},
  { path: 'all-events', component: AllEventsComponent },
  { path: '', redirectTo: 'LandingComponent', pathMatch: 'full'}


];
