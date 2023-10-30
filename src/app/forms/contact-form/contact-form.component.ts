import { Component } from '@angular/core';
import { WordpressService } from 'src/app/wordpress/wordpress.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(
    public wpService: WordpressService
  ) {}  


  onSubmit(contactForm) {
    console.log(contactForm.value);
    this.wpService.sendContactForm(contactForm.value).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }

}
