import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { UiStyleToggleService } from './services/ui-style-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  brews: any;
  zip: string = '';
  states: string[] = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  constructor(private _http: HttpService, private uiStyleToggleService: UiStyleToggleService) {}

  title = 'brewery-example';
  darkmode: boolean = this.uiStyleToggleService.isDarkThemeSelected();

  toggleTheme() {
    this.uiStyleToggleService.toggle();
    this.darkmode = this.uiStyleToggleService.isDarkThemeSelected();
  }

  onSearch() {
    this._http.get(this.zip).subscribe(data => {
     this.brews = data;
    })

  }

  onStateSearch(event: any) {
    console.log(event);
    this._http.getState(event.target.value).subscribe(data => {
      this.brews = data;
    })
  }

}
