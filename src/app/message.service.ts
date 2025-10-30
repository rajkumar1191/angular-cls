import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private msgSource = new Subject<string>();
  private msgBehavSource = new BehaviorSubject<string>('Initial Content');
  private msgReplaySource = new ReplaySubject<string>(3);
  message$ = this.msgSource.asObservable();
  messageBeh$ = this.msgBehavSource.asObservable();
  messageReplay$ = this.msgReplaySource.asObservable();

  sendMessage(msg: string) {
    this.msgSource.next(msg);
    this.msgBehavSource.next(msg);
  }

  setInputData(str: string) {
    this.msgReplaySource.next(str);
  }
}
