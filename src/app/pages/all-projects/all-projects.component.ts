import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';
import { ProjectItemComponent } from './../../components/project-item/project-item.component';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [ProjectItemComponent],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent {

  projectService = inject(ProjectsService);
  projects: Project[];

  constructor() {
    this.projects = this.projectService.projectList;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
