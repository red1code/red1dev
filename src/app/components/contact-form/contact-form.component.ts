import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import emailjs from '@emailjs/browser';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    NotificationComponent,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  formValues = {
    name: '',
    email: '',
    message: '',
  }

  alert!: {
    type: 'Success' | 'Error';
    content: string, show: boolean
  };

  async sendMessage(evt: Event) {
    const form = evt.target as HTMLFormElement;
    if (!form.checkValidity()) {
      this.showAlert('Invalid form', 'Error');
      return
    }
    try {
      const result = await emailjs.sendForm(
        'service_4w5pcnn',
        'template_o05aqpe',
        form,
        'MWi3lZpeI_M3SN67R'
      );
      this.showAlert('Message sent succesfuly', 'Success');
      form.reset()
    }
    catch (error) {
      console.error(error);
      this.showAlert(`Your message was not sent: \n ${error}`, 'Error');
    }
  }

  showAlert(content: string, type: 'Success' | 'Error') {
    this.alert = { content, type, show: true }
  }

}
