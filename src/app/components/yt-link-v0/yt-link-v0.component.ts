import { dataSource } from '../../data/dataSource';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { GetVideoService } from './services/get-video.service';
import { BackendData, Video } from './model/video';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-yt-link-v0',
  templateUrl: './yt-link-v0.component.html',
  styleUrls: ['./yt-link-v0.component.css'],
})
export class YtLinkV0Component implements OnInit {

  constructor(private service: GetVideoService) { }
  vidType1$: Observable<Video> = this.service
    .fetchData()
    .pipe(map((d) => d.vidType1));

  vidType2$: Observable<Video> = this.service
    .fetchData()
    .pipe(map((d) => d.vidType2));

  vidType3$: Observable<Video> = this.service
    .fetchData()
    .pipe(map((d) => d.vidType3));

  ngOnInit(): void {}
}
