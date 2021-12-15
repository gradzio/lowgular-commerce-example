import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FirebaseMessagesService } from '../../infrastructure/firebase-messages.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-contact-form',
  templateUrl: './contact-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {

  form: FormGroup = this._fb.group({
    sender: new FormControl(),
    content: new FormControl()
  });
  constructor(private _messagesService: FirebaseMessagesService, private _fb: FormBuilder) { }


  onNgSubmit(): void {
    if (this.form.valid) {
      this._messagesService.add(this.form.value);
      this.form.reset();
    }
  }
}
