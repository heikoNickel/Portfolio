import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewsComponent } from './reviews/reviews.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [WelcomeComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReviewsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
