import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {

  @Input() projectDetails!: Project;

  limitString(str: string, length?: number) {
    const maxLength = length ?? 50;
    return str.length > maxLength
      ? `${str.slice(0, maxLength)}...`
      : str;
  }

}
