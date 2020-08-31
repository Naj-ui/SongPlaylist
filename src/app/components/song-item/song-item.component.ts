import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditPlaylistComponent } from './../edit-playlist/edit-playlist.component';
import { PlaylistService } from './../../services/playlist.service';
import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../../mocks/intermediate-data';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit {
@Input() song : Playlist;
modalRef: BsModalRef;

  constructor(private playlistService: PlaylistService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }
  delete(){
    this.playlistService.deletePlatList(this.song)
  }
  edit() {
    this.playlistService.selectedPlaylist = this.song
    this.modalRef = this.modalService.show(EditPlaylistComponent );
  }

}
