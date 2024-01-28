import { ProjectItemComponent } from './../../components/project-item/project-item.component';
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeoService } from '../../services/seo.service';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    TabsComponent,
    ContactFormComponent,
    ClipboardModule,
    ProjectItemComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  seoService = inject(SeoService);
  snackBar = inject(MatSnackBar);
  projectsService = inject(ProjectsService);
  favoriteProjects!: Project[];

  constructor() {
    this.seoService.setMetaDescription(`I'm Redouane Bekkouche, a passionate front-end web developer, crafting  beautiful experiences with Angular. Explore my portfolio and let's connect!`);
    this.favoriteProjects = this.projectsService.favoriteProjects;
  }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, '', { duration: 1000, });
  }

}
