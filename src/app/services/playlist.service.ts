import { Injectable } from '@angular/core';
import { playlists, Playlist } from '../mocks/intermediate-data';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  platList :Playlist[] 
  selectedPlaylist : Playlist

  constructor() { 
    this.platList = playlists

  }
  
  addPlayList(item){
    this.platList.push(item)
  }

  
  deletePlatList(item){
    const index = this.platList.indexOf(item)
    console.log(index)
    this.platList.splice(index, 1);
  }
  getPlayList(){
    return this.platList;
  }
  editPlayList(){

  }
}
