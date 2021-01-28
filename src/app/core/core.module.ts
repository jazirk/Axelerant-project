import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import {SharedModule} from '../shared/shared.module';
import { ReachUsComponent } from './components/reach-us/reach-us.component';



@NgModule({
    declarations: [HomeComponent, PeopleComponent, TestimonialsComponent, ReachUsComponent],
  exports: [
    HomeComponent,
    PeopleComponent,
    TestimonialsComponent,
    ReachUsComponent
  ],
    imports: [
      CommonModule,
      SharedModule
    ]
})
export class CoreModule { }
