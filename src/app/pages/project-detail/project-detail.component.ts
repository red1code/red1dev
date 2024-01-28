import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, MatIconModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

  projectsService = inject(ProjectsService);
  route = inject(ActivatedRoute);
  project: Project | undefined;

  constructor() {
    const projectID = this.route.snapshot.params['id'];
    this.project = this.projectsService.getProjectById(projectID);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
