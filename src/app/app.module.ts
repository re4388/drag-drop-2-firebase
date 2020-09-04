import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// created components
import { YtLinkV0Component } from './components/yt-link-v0/yt-link-v0.component';
import { YtLinkV1Component } from './components/yt-link-v1/yt-link-v1.component';
import { AddTodoDialogComponent } from './components/add-todo-dialog/add-todo-dialog.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

// material
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


// cdk
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { BidiModule } from '@angular/cdk/bidi';

/* firebase related */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Other Imports
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { YtLinkV2Component } from './components/yt-link-v2/yt-link-v2.component';
import { AddTodoDialogV2Component } from './components/add-todo-dialog-v2/add-todo-dialog-v2.component';
import { environment } from 'src/environments/environment';
import { AddBlockDialogV2Component } from './components/add-block-dialog-v2/add-block-dialog-v2.component';

@NgModule({
  // where you declare your component
  declarations: [
    AppComponent,
    YtLinkV0Component,
    YtLinkV1Component,
    AddTodoDialogComponent,
    SideBarComponent,
    FilterByNamePipe,
    YtLinkV2Component,
    AddTodoDialogV2Component,
    AddBlockDialogV2Component,
  ],
  // where you import your module
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    OverlayModule,
    BidiModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatExpansionModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],
  // global DI
  providers: [],

  // what component to bootstrap
  bootstrap: [AppComponent],
})
export class AppModule {}
