import { PlaylistService } from './../../services/playlist.service';
import { AddPlaylistComponent } from './../add-playlist/add-playlist.component';
import { playlists, Playlist } from './../../mocks/intermediate-data';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
platList :Playlist[]
modalRef: BsModalRef;
constructor(private modalService: BsModalService,
private playlistService: PlaylistService) {}

  ngOnInit() {
    this.platList = this.playlistService.getPlayList()
  }

  addPlaylist() {
    this.modalRef = this.modalService.show(AddPlaylistComponent);
  }


}
