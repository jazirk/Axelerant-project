import {Component, ViewChild} from '@angular/core';
import {HomeComponent} from './core/components/home/home.component';
//import {PeopleComponent} from './core/components/people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(HomeComponent) homeComponet;
  //@ViewChild(PeopleComponent) peopleComponent;
  title = 'AcmeClient';

  // goTo() {
  //   this.peopleComponent.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  // }
}
