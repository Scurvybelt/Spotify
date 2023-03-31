import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover:TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & assia',
    name: 'BEBE ofical',
    _id: '1',
    url: "http://localhost:3000/track-3.mp3"

    // title: 'Hols',
    // album: 'Hola'
  }

  listObservers$ : Array<Subscription> = []

  constructor(private multimediaService: MultimediaService){  }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('recibiendo cancion',response);
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {//EL ultimo que se ejecuta antes de destruir el componente 
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
