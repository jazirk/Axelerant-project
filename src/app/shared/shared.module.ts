import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {TestimonialCardComponent} from './components/testimonial-card/testimonial-card.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [HeaderComponent, TestimonialCardComponent, ButtonComponent],
  exports: [
    HeaderComponent,
    TestimonialCardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SharedModule {
}
