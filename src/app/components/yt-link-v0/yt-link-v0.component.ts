import { dataSource } from '../../data/dataSource';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-yt-link-v0',
  templateUrl: './yt-link-v0.component.html',
  styleUrls: ['./yt-link-v0.component.css'],
})
export class YtLinkV0Component{
  dataGroup1 = dataSource;

  vidType1 = [
    {
      name: `抗疫有成？施政無能？韓國如何應對捲土重來的疫情、醫改和高漲房價`,
      url: `https://www.youtube.com/watch?v=I289HAUZTmM`,
      groupIndex: 0,
    },
    {
      name: `8.19.20【17 中廣論壇】鍾佳濱 live`,
      url: `https://www.youtube.com/watch?v=qhgN-foGvDw`,
      groupIndex: 0,
    },
    {
      name: `Data Analysis with Python: Part 2 of 6 (Live Course)`,
      url: `https://www.youtube.com/watch?v=I289HAUZTmM`,
      groupIndex: 0,
    },
    {
      name: `How to Learn Online Like a Pro with Treehouse's Guil Hernandez`,
      url: `https://www.youtube.com/watch?v=WvAz833OkFg`,
      groupIndex: 0,
    },
  ];

  vidType2 = [
    // {
    //   name: `2020-08-18 MIT CDOIQ Keynote`,
    //   url: `https://www.youtube.com/watch?v=Eiar_SNMqUA`,
    //   groupIndex: 1,
    // },
  ];

  vidType3 = [
    // {
    //   name: `天才 IT 大臣 唐鳳「戰疫」一戰揚名 | 華視新聞 20200817`,
    //   url: `https://www.youtube.com/watch?v=El8Mb4yfCWw`,
    //   groupIndex: 2,
    // },
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // event.previousContainer.data.forEach((x, index) => {
      //   x.groupIndex = index;
      // });
      // console.log(`event.item`, event.item.dropContainer.id);
      console.log(`event.container, TO =>`, event.container.id);
    }
    // event.container.data.forEach((x, index) => {
    //   x.groupIndex = index;
    // });
  }
}
