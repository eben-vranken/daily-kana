import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PriceCardComponent } from '../price-card/price-card';
import { Card } from '../card/card';
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
import { Footer } from "../footer/footer";

@Component({
  selector: 'landing-page',
  templateUrl: './landingpage.html',
  imports: [RouterLink, Card, PriceCardComponent, CarouselComponent, FaqItemComponent, Footer],
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
