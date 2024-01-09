import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { ProjectsTemplateComponent } from '../../components/projects-template/projects-template.component';
import { ProjectsService } from '../../services/projects.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, TabsComponent, ProjectsTemplateComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  seoService = inject(SeoService);
  projects = inject(ProjectsService);
  websiteProjects = this.projects.websites;
  webAppsProjects = this.projects.webApps;
  browserGamesProjects = this.projects.browserGames;

  constructor() {
    this.seoService.setMetaDescription(`Explore my digital craftings. Redouane Bekkouche, a front-end web developer and Angular enthousiaste`);
  }

}
