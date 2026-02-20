import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCalendarAlt,
  faChartBar,
  faCheckCircle,
  faFolder,
  faGlobe,
  faShieldAlt,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'landing-page',
  templateUrl: './landingpage.html',
  imports: [RouterLink, FaIconComponent],
})
export class LandingPage {
  faShield = faShieldAlt;
  faGraph = faChartBar;
  faWarning = faWarning;
  faCalendar = faCalendarAlt;
  faFolder = faFolder;
  faGlobe = faGlobe;

  faCheck = faCheckCircle;
}
