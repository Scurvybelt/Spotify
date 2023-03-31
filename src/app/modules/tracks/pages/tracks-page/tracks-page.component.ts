import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json' //Todo lo que este en el archivo json lo va a asignar a data

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  mockTracksList:Array<TrackModel> = [
    
  ]
  constructor(){

  }
  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default// la desestructuracion {data} entras al objeto data y le dices que el valor va a se any .default
    this.mockTracksList = data;
  }
}
