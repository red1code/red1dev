import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

interface Tab {
  title: string;
  template: TemplateRef<any>
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  @Input() tabs!: Tab[];

}
