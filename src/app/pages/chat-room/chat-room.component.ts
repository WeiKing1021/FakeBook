import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.less']
})
export class ChatRoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(val: any): void {

    console.log(val);
  }

}
