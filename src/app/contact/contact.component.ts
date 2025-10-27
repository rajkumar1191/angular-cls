import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  userDetails = {
    name: '',
    email: '',
    mobile: '',
    message: '',
  };

  enquiryForm = new FormGroup({
    contactName: new FormControl(''),
    contactEmail: new FormControl('', [Validators.required, Validators.email]),
    contactMobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    subject: new FormControl(''),
    desc: new FormControl(''),
  });

  constructor() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  /*
     template driven form - simple and easy to use but less scalable
     reactive form - more scalable and robust but complex to implement
  */

  onSubmit(form: any) {

    console.log('Form Submitted', form.value);

    this.enquiryForm.get('contactName')?.setValue(form.value.name);
    this.enquiryForm.get('contactEmail')?.setValue(form.value.email);
    this.enquiryForm.get('subject')?.setErrors({ required: true });
  }

  onReactiveSubmit() {
    console.log('Reactive Form Submitted', this.enquiryForm.value, this.enquiryForm.valid);
  }
}
