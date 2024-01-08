import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', { duration: 2000, });
  }

}
