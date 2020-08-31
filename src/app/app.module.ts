import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SongItemComponent } from './components/song-item/song-item.component';
import { CommonModule } from '@angular/common';
import { AddPlaylistComponent } from './components/add-playlist/add-playlist.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPlaylistComponent } from './components/edit-playlist/edit-playlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongItemComponent,
    AddPlaylistComponent,
    EditPlaylistComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    
    ],
  providers: [],
  entryComponents:[AddPlaylistComponent, EditPlaylistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
