import { Component, OnInit } from '@angular/core';
import { addDays, formatDistance } from 'date-fns';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.less']
})
export class PostContentComponent implements OnInit {

  data = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: formatDistance(new Date(), addDays(new Date(), 1))
    }
  ];

  constructor() {

    for (let i = 1; i <= 200; i++) {

      this.data.push({
        author: 'user-' + i,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        datetime: formatDistance(new Date(), addDays(new Date(), 2))
      });
    }
  }

  ngOnInit(): void {
  }

}
