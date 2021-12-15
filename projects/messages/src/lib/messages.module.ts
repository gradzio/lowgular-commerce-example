import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { ContactFormComponent } from './ui/contact-form/contact-form.component';
import { FirebaseMessagesService } from './infrastructure/firebase-messages.service';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MessagesComponent,
    ContactFormComponent
  ],
  imports: [
  
    AngularFirestoreModule,
       ReactiveFormsModule
  ],
  exports: [
    MessagesComponent,
    ContactFormComponent
  ],
  providers: [
    FirebaseMessagesService
  ]
})
export class MessagesModule { }
