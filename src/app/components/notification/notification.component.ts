import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  @Input() type!: 'Info' | 'Success' | 'Danger' | 'Error';
  @Input() content!: string;
  @Output() close = new EventEmitter();

}
