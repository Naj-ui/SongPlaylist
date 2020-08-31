import { PlaylistService } from './../../services/playlist.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../mocks/intermediate-data';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.scss']
})
export class EditPlaylistComponent implements OnInit {
  playList: Playlist
  editPlaylistForm: FormGroup;
  constructor(    public modalRef: BsModalRef,
  private playlistService: PlaylistService) { }

  ngOnInit() {
    this.editPlaylistForm = new FormGroup({
      name: new FormControl('', Validators.required), 
      description: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
    this.getPlayList()
  }

  getPlayList(){
    this.playList = this.playlistService.selectedPlaylist
    this.editPlaylistForm.controls.name.setValue(this.playList.name)
    this.editPlaylistForm.controls.description.setValue(this.playList.description)
    this.editPlaylistForm.controls.title.setValue(this.playList.songs[0].title)
    this.editPlaylistForm.controls.artist.setValue(this.playList.songs[0].artist)
    this.editPlaylistForm.controls.duration.setValue(this.playList.songs[0].duration)
  }

  editPlayList(){
    let playlistItem = this.playList
    playlistItem['name'] = this.editPlaylistForm.value.name;
    playlistItem['description'] = this.editPlaylistForm.value.description;
    let songs = []
    songs.push({
      title:this.editPlaylistForm.value.title,
      artist:this.editPlaylistForm.value.artist,
      duration: this.editPlaylistForm.value.duration
    })
    playlistItem['songs'] = songs;
    this.playlistService.addPlayList(playlistItem)
    console.log(this.editPlaylistForm)
    this.modalRef.hide()
  }

  resetForm(){
    this.editPlaylistForm.reset()
  }


}
