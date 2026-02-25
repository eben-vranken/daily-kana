import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { PriceCardComponent } from '../price-card/price-card';
import { FeatureCardComponent } from '../feature-card/feature-card';
import { CarouselComponent } from '../carousel/carousel';
import {
  faMasksTheater,
  faComments,
  faChartPie,
  faBrain,
  faUserTie,
  faBolt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FaqItemComponent } from "../faq/faq-item";

@Component({
  selector: 'landing-page',
  templateUrl: './landingpage.html',
  imports: [RouterLink, FeatureCardComponent, PriceCardComponent, CarouselComponent, FaqItemComponent],
})
export class LandingPage {
  faMasksTheater = faMasksTheater;
  faComments = faComments;
  faChartPie = faChartPie;
  faBrain = faBrain;
  faUserTie = faUserTie;
  faBolt = faBolt;
  faCheck = faCheckCircle;
}
