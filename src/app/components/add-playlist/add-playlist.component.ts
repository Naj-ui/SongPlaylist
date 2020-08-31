import { PlaylistService } from './../../services/playlist.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../mocks/intermediate-data';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.scss']
})
export class AddPlaylistComponent implements OnInit {

  addPlaylistForm: FormGroup;
  songs: FormArray;
  constructor(    public modalRef: BsModalRef,
  private playlistService: PlaylistService) { }

  ngOnInit() {
    this.addPlaylistForm = new FormGroup({
      name: new FormControl('', Validators.required), 
      description: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
  }




  add(){
    let playlistItem = {}
    playlistItem['name'] = this.addPlaylistForm.value.name;
    playlistItem['description'] = this.addPlaylistForm.value.description;
    playlistItem['totalSongs'] = 1;
    playlistItem['totalDuration'] = this.addPlaylistForm.value.duration
    let songs = []
    songs.push({
      title:this.addPlaylistForm.value.title,
      artist:this.addPlaylistForm.value.artist,
      duration: this.addPlaylistForm.value.duration

    })
    playlistItem['songs'] = songs;
    this.playlistService.addPlayList(playlistItem)
    console.log(this.addPlaylistForm)
    this.modalRef.hide()
  }
  reset(){
    this.addPlaylistForm.reset()
  }
  

}
