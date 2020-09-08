import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YtLinkV0Component } from './components/yt-link-v0/yt-link-v0.component';
import { YtLinkV1Component } from './components/yt-link-v1/yt-link-v1.component';
import { YtLinkV2Component } from './components/yt-link-v2/yt-link-v2.component';
import { ArchiveComponent } from './components/archive/archive.component';

const routes: Routes = [
  { path: '', redirectTo: 'yt-link-v2', pathMatch: 'full' },
  { path: 'yt-link-v0', component: YtLinkV0Component },
  { path: 'yt-link-v1', component: YtLinkV1Component },
  { path: 'yt-link-v2', component: YtLinkV2Component },
  { path: 'archive', component: ArchiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
