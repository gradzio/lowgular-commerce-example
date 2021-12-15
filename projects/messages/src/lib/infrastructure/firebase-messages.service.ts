import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MessageDTO } from '../application/message.dto';

@Injectable()
export class FirebaseMessagesService {
  constructor(private _client: AngularFirestore) {}

  add(message: MessageDTO): void {
    this._client.collection<MessageDTO>('messages').add(message);
  }
}
