import { Injectable } from '@angular/core';
import { Video, BackendData } from '../model/video';
import { Observable, timer } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetVideoService {
  constructor() {}

  private data = {
    vidType1: [
      {
        name: '抗疫有成？施政無能？韓國如何應對捲土重來的疫情、醫改和高漲房價',
        url: 'https://www.youtube.com/watch?v=I289HAUZTmM',
        groupIndex: 0,
      },
      {
        name: "How to Learn Online Like a Pro with Treehouse's Guil Hernandez",
        url: 'https://www.youtube.com/watch?v=WvAz833OkFg',
        groupIndex: 0,
      },
    ],
    vidType2: [
      {
        name: '「孩子來了，愛情走了？」鄧惠文x黃瑽寧的關係下午茶｜親子天下',
        url: 'https://www.youtube.com/watch?v=cwpJKhvxBYw',
        groupIndex: 0,
      },
    ],
    vidType3: [
      {
        name:
          '大師常來聊 - Reinhardt 談 : 求職秘訣與業界八卦 | 求職 | 找工作 | 面試技巧',
        url: 'https://www.youtube.com/watch?v=s3ET2rclxyk',
        groupIndex: 0,
      },
    ],
  };

  public fetchData = () =>
    timer(200 + 1.5 * 1000 * Math.random()).pipe(
      map((_) => this.data),
      // tap((val) => console.log(`tap shows: ${val}`))
      tap(console.log),
    )
}
