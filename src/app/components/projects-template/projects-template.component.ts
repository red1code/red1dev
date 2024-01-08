import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects-template',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './projects-template.component.html',
  styleUrl: './projects-template.component.scss'
})
export class ProjectsTemplateComponent {

  @Input() projects!: Project[];

}
