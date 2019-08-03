import { Component, OnInit } from '@angular/core';
import { FortressItem } from './DTO/FortressItem';
import { FortressItemSlide } from './DTO/FortressItemSlide';
import { initNgModule } from '@angular/core/src/view/ng_module';

@Component({
  selector: 'app-military-fortress',
  templateUrl: './military-fortress.component.html',
  styleUrls: ['./military-fortress.component.scss']
})
export class MilitaryFortressComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
    this.__currentFortressItem = this._fortressItems[0];
  }

  private _fortressItems : Array<FortressItem> = [
    {
      roomId : 1,
      roomName : "Eingangsbereich",
      mapState : MapState.overview,
      cy : 387.74,
      cx : 314.15,
      slides : [
        {
          id : 1,
          title : "Schutz des Eingangs",
          text : "Damit im Falle eines Befalls der Festung via Haupteingang die Gegner nicht freien Zugang zum Bunker besitzen, wurde dieses Gewehr installiert. Zudem besitzt der Hauptgang der Festung eine Krümmung nach den ersten hundert Metern, damit Gegner nicht von dem Entrée in die gesamte Festung schiessen konnten.",
          path : "Fotos_Vitznau_002.jpg"
        },
        {
          id : 2,
          title : "Funkstelle des Eingangs",
          text : "In einer späteren Aufrüstung der Festung wurde dem Eingangsbereich ebenfalls ein Funkapparat beigestellt.",
          path : "Fotos_Vitznau_001.jpg"
        },
        {
          id : 3,
          title : "Weg in Richtung Ausgang",
          text : "Dieses Bild zeigt die letzten Meter der Festung, bevor durch die im Hintergrund zu erkennende Türe das Freie zu erreichen ist.",
          path : "Fotos_Vitznau_003.jpg"
        },
      ]
    },
    {
      roomId : 2,
      roomName : "Gedenkstätte",
      mapState : MapState.overview,
      cy : 297.08,
      cx : 313.43,
      slides : [
        {
          id : 1,
          title : "Gedenkstätte",
          text : "Die im Tunnelbau bekannte heilige Barbara galt auch beim Festungsbau als Schutzpatronin.",
          path : "Fotos_Vitznau_004.jpg"
        },
      ]
    },
    {
      roomId : 3,
      roomName : "Waffenlager",
      mapState : MapState.overview,
      cy : 246.59,
      cx : 272.54,
      slides : [
        {
          id : 2,
          title : "Waffendepot",
          text : "Die Waffen der Soldaten wurden im Gang zu dem Unterkunftstrakt gelagert, um im Falle eines Angriffes sofortige Bereitschaft gewährleisten zu können",
          path : "Fotos_Vitznau_065.jpg"
        },
        {
          id : 1,
          title : "verschiedene Gasmasken",
          text : "Da im Verlauf der Kriegsjahre ebenfalls Gasangriffe als zusätzliche Gefahr hinzukamen, wurden Gasmasken angeschafft.",
          path : "Fotos_Vitznau_022.jpg"
        },
      ]
    },
    {
      roomId : 4,
      roomName : "Werkstatt",
      mapState : MapState.overview,
      cy : 206.86,
      cx : 268.65,
      slides : [
        {
          id : 1,
          title : "Werkzeuglager der Festung",
          text : "Reparaturen sämtlicher Gerätschaften konnten direkt in der festungseigenen Werkstätte durchgeführt werden.",
          path : "Fotos_Vitznau_008.jpg"
        },
        {
          id : 2,
          title : "",
          text : "",
          path : "Fotos_Vitznau_007.jpg"
        },
        {
          id : 3,
          title : "Original Werkbank",
          text : "Die Ausstattung ist grösstenteils nach früherem Zustand erhalten geblieben.",
          path : "Fotos_Vitznau_009.jpg"
        },
      ]
    },
    {
      roomId : 5,
      roomName : "Stromgeneratoren-Raum",
      mapState : MapState.overview,
      cy : 175.27,
      cx : 254,
      slides : [
        {
          id : 1,
          title : "Stromgeneratoren",
          text : "Die Festung produzierte sämtlichen Strom, welcher benötigt wurde, selbst.",
          path : "Fotos_Vitznau_010.jpg"
        },
        {
          id : 2,
          title : "",
          text : "",
          path : "Fotos_Vitznau_011.jpg"
        },
        {
          id : 4,
          title : "",
          text : "",
          path : "Fotos_Vitznau_013.jpg"
        },
      ]
    },
    {
      roomId : 6,
      roomName : "Heizungsraum",
      mapState : MapState.overview,
      cy : 221.42,
      cx : 304.43,
      slides : [
        {
          id : 1,
          title : "Heizungs- und Filteranlagen",
          text : "Die Heizung, welche den kühlen Berg und vor allem den Unterkunftstrakt erwärmte. Ebenfalls wurde von dieser Anlage die schädlichen Gase gefiltert.",
          path : "Fotos_Vitznau_021.jpg"
        },
        {
          id : 1,
          title : "Feuerschutz in der Festung",
          text : "Die Besatzung war ebenfalls auf ein Feuer in der Festung vorbereitet.",
          path : "Fotos_Vitznau_019.jpg"
        },
      ]
    },
    {
      roomId : -1,
      roomName : "Unterkunftstrakt",
      mapState : MapState.overview,
      cy : 179.2,
      cx : 319.44,
      slides : []
    },
    {
      roomId : 8,
      roomName : "Festungsgang",
      mapState : MapState.overview,
      cy : 230.43,
      cx : 228.13,
      slides : [
        {
          id : 1,
          title : "Gang in Richtung Schiessstände",
          text : "Der Hauptgang der Festung.",
          path : "Fotos_Vitznau_085.jpg"
        },
        {
          id : 1,
          title : "Druck Schleussen",
          text : "Die Schiessstände hätten während ihren Einsätzen einen enormen Druck erzeugt. Mithilfe dieser Schleusen wollte man die Festung von den Schiessständen abriegeln, damit sich der Druck nicht auf die gesamte Festung ausdehnen konnte.",
          path : "Fotos_Vitznau_084.jpg"
        },
      ]
    },
    {
      roomId : 9,
      roomName : "Munitionslager I",
      mapState : MapState.overview,
      cy : 175.39,
      cx : 197.48,
      slides : [
        {
          id : 1,
          title : "Munitionslager I",
          text : "Im Munitionslager für Stahlgranaten fanden etwa 17000 Stück ihren Platz. Die beiden Munitionslager waren die einzigen Räume, in denen das Rauchen verboten war. ",
          path : "Fotos_Vitznau_067.jpg"
        },
        {
          id : 3,
          title : "Transportwagen",
          text : "Dieser Wagen wäre für den Transport der Granaten zu den Schiessständen zum Einsatz gekommen.",
          path : "Fotos_Vitznau_069.jpg"
        },
      ]
    },
    {
      roomId : 10,
      roomName : "Munitionslager II",
      mapState : MapState.overview,
      cy : 108.05,
      cx : 130.15,
      slides : [
        {
          id : 1,
          title : "Munitionslager II",
          text : "In diesem Raum wurden 40 Tonnen Schwarzpulver für den Ernstfall gelagert.",
          path : "Fotos_Vitznau_071.jpg"
        },
      ]
    },
    {
      roomId : 11,
      roomName : "Schiessstand II",
      mapState : MapState.overview,
      cy : 132.94,
      cx : 14.08,
      slides : [
        {
          id : 1,
          title : "Schiessstand mit Besatzung",
          text : "Im Ernstfall hätte jede 4 Sekunde einen Schuss die Festung verlassen können. Dabei war das Tragen wegen Vergiftungsgefahr obligatorisch",
          path : "Fotos_Vitznau_072.jpg"
        },
        {
          id : 1,
          title : "Schusseinsatz in Richtung Aussen.",
          text : "",
          path : "Fotos_Vitznau_077.jpg"
        },
      ]
    },
    {
      roomId : 12,
      roomName : "Treppe zum Wachposten",
      mapState : MapState.overview,
      cy : 166.7,
      cx : 112.05,
      slides : [
        {
          id : 1,
          title : "Weg zum Beobachtungsposten",
          text : "Die lange Treppe führte zum einzigen Ort der Festung, der einen Blick nach aussen besass.",
          path : "Fotos_Vitznau_080.jpg"
        },
      ]
    },
    {
      roomId : 13,
      roomName : "Wachposten",
      mapState : MapState.overview,
      cy : 195.48,
      cx : 59.67,
      slides : [
        {
          id : 1,
          title : "Beobachtungsposten",
          text : "Der einzige Ort, welcher ein Blick nach Aussen verfügte. Der Ausguck war immer zu schliessen, wenn er nicht benötigt wurde.",
          path : "Fotos_Vitznau_081.jpg"
        },
        {
          id : 1,
          title : "Aussicht über den Vierwaldstättersee",
          text : "Die Aussicht über die Gemeinde Vitznau und dem Vierwaldstättersee.",
          path : "Fotos_Vitznau_082.jpg"
        },
      ]
    },
    {
      roomId : 14,
      roomName : "Küche",
      mapState : MapState.livingroom1floor,
      cy : 133.9,
      cx : 162.4,
      slides : [
        {
          id : 1,
          title : "Küche",
          text : "Gekocht wurde in diesem Raum. Die Kuchenutensilien sind grösstenteils Originalstücke. Das Essen war sehr monoton: viel Kartoffeln und Nahrung aus Konservendosen.",
          path : "Fotos_Vitznau_052.jpg"
        },
      ]
    },
    {
      roomId : 15,
      roomName : "Kommandozentrale",
      mapState : MapState.livingroom1floor,
      cy : 93.7,
      cx : 101.6,
      slides : [
        {
          id : 1,
          title : "Kommandozentrale",
          text : "Hier wurden die Schüsse berechnet. Mit den vielen Utensilien konnten sie alle Winkel genau ausfindig machen, welche danach per Funk zu den Schiessständen übermittelt wurden.",
          path : "Fotos_Vitznau_054.jpg"
        },
        {
          id : 2,
          title : "Abdeckungsgebiete der Festungsschiessstände",
          text : "Hier ist die Abdeckungskarte der verschiedenen Festungen um den Vierwaldstättersee zu sehen. Der rote Bereich wurde von der Festung Vitznau abgedeckt.",
          path : "Fotos_Vitznau_055.jpg"
        },
      ]
    },
    {
      roomId : 16,
      roomName : "Esssaal",
      mapState : MapState.livingroom1floor,
      cy : 179,
      cx : 206.7,
      slides : [
        {
          id : 1,
          title : "Esssaal",
          text : "Der Esssaal war zu Kriegszeiten noch nicht mit Ausstellungsgegenständen bestückt. Trotzdem war es einer der wenigen Räume, welcher auf eine angenehme Temperatur geheizt wurde.",
          path : "Fotos_Vitznau_049.jpg"
        },
      ]
    },
    {
      roomId : 17,
      roomName : "Festunsspital",
      mapState : MapState.livingroom1floor,
      cy : 242.3,
      cx : 269.4,
      slides : [
        {
          id : 1,
          title : "Festungsarzt",
          text : "Das festungseigene Spital wäre im Ernstfall für Operationen ausgerüstet gewesen.",
          path : "Fotos_Vitznau_043.jpg"
        },
        {
          id : 2,
          title : "Festungsspital",
          text : "Da ein Ernstfall glücklicherweise ausblieb, waren nur kleinere Eingriffe nötig.",
          path : "Fotos_Vitznau_038.jpg"
        },
        {
          id : 3,
          title : "Festungsspital",
          text : "Dieses Zimmer kam häufig als Entlausungszimmer zum Einsatz. Durch teilweise schlechte Hygiene im Bunker waren Läuse eine häufige Erscheinung. ",
          path : "Fotos_Vitznau_037.jpg"
        },
      ]
    },
    {
      roomId : 18,
      roomName : "Krankenzimmer",
      mapState : MapState.livingroom1floor,
      cy : 289.1,
      cx : 292.4,
      slides : [
        {
          id : 1,
          title : "Krankenzimmer",
          text : "In diesen Betten hätten sich Kranke und/oder Verunfallte aufhalten können. Insgesamt waren 8 Betten für diesen Zweck vorgesehen.",
          path : "Fotos_Vitznau_047.jpg"
        }
      ]
    },
    {
      roomId : 19,
      roomName : "Funk- und Telefonzentrale",
      mapState : MapState.livingroom1floor,
      cy : 212.3,
      cx : 240.4,
      slides : [
        {
          id : 1,
          title : "Funk- und Telefonzentrale",
          text : "Dieser Raum diente als Kommunikationszentrale gegen aussen. Sie war ständig besetzt.",
          path : "Fotos_Vitznau_035.jpg"
        },
      ]
    },
    {
      roomId : 20,
      roomName : "Ausgang des Unterkunftstrakt",
      mapState : MapState.livingroom1floor,
      cy : 242.3,
      cx : 150.4,
      slides : [
        {
          id : 1,
          title : "Ausgang des Unterkunftstrakt",
          text : "Diese Türe trennt den Unterkunftstrakt von der Festung.",
          path : "Fotos_Vitznau_063.jpg"
        },
        {
          id : 2,
          title : "Schleuse: Unterkunftstrakt - Festung",
          text : "Eine Nachrüstung: Als vermehrt Gasangriffe stattgefunden haben, wurde diesen Dusche errichtet. So wurde sichergestellt, dass die gefährlichen Gase möglichst nicht in den Unterkunftstrakt gelangen konnten.",
          path : "Fotos_Vitznau_064.jpg"
        },
      ]
    },
    {
      roomId : 21,
      roomName : "Bettschläge der Soldaten",
      mapState : MapState.livingroom2floor,
      cy : 109.4,
      cx : 141.8,
      slides : [
        {
          id : 1,
          title : "Bettschläge der Soldaten",
          text : "Die Festung besitzt insgesamt 2 Bettschläge für die Soldaten. Zu Beginn der Kriegszeit fanden etwa 300 Mann in der Festung Platz, im Verlauf der Jahre sank die Zahl auf 100 Mann.",
          path : "Fotos_Vitznau_025.jpg"
        },
      ]
    },
    {
      roomId : 22,
      roomName : "Bettschläge der Offiziere",
      mapState : MapState.livingroom2floor,
      cy : 275.3,
      cx : 308.6,
      slides : [
        {
          id : 1,
          title : "Offizierszimmer",
          text : "Die Kapazität der Zimmer wurde mit zunehmendem Militärgrad kleiner.",
          path : "Fotos_Vitznau_027.jpg"
        },
        {
          id : 1,
          title : "Offizierszimmer",
          text : "Ab einem gewissen Dienstgrad besass man ein eigenes Lavabo.",
          path : "Fotos_Vitznau_092.jpg"
        },
      ]
    },
    {
      roomId : 23 ,
      roomName : "Bettschläge des Kommandanten",
      mapState : MapState.livingroom2floor,
      cy : 301.8,
      cx : 282.6,
      slides : [
        {
          id : 1,
          title : "Bettschläge des Kommandanten",
          text : "___",
          path : "Fotos_Vitznau_032.jpg"
        },
      ]
    },
    {
      roomId : 24 ,
      roomName : "Waschraum",
      mapState : MapState.livingroom2floor,
      cy : 177.4,
      cx : 209.1,
      slides : [
        {
          id : 1,
          title : "Waschraum",
          text : "Um den im Militär geltenden Hygienevorschriften gerecht zu werden, standen diese Waschbecken zur Verfügung.",
          path : "Fotos_Vitznau_026.jpg"
        },
      ]
    },
    {
      roomId : 25 ,
      roomName : "Offiziersbüro",
      mapState : MapState.livingroom2floor,
      cy : 246.3,
      cx : 278.6,
      slides : [
        {
          id : 1,
          title : "Offiziersbüro",
          text : "",
          path : "Fotos_Vitznau_029.jpg"
        },
        {
          id : 2,
          title : "Mikrofon für Festungsdurchsagen",
          text : "",
          path : "Fotos_Vitznau_028.jpg"
        },
      ]
    },
    {
      roomId : 26 ,
      roomName : "Offiziersesssaal",
      mapState : MapState.livingroom2floor,
      cy : 246.3,
      cx : 220,
      slides : [
        {
          id : 1,
          title : "Offiziersesssaal",
          text : "Die Bilder, die in jedem Raum des Unterkunftstraks zu finden sind, sollten die fehlenden Fenster ersetzen.",
          path : "Fotos_Vitznau_030.jpg"
        },
      ]
    },
  ]
  
  get fortressItemsOverview() : Array<FortressItem> {
    return this._fortressItems.filter(
      item => item.mapState == MapState.overview
    );
  }
  get fortressItemsLivingroom1floor() : Array<FortressItem> {
    return this._fortressItems.filter(
      item => item.mapState == MapState.livingroom1floor
    );
  }
  get fortressItemsLivingroom2floor() : Array<FortressItem> {
    return this._fortressItems.filter(
      item => item.mapState == MapState.livingroom2floor
    );
  }

  private _currentFortressItem : FortressItem;
  private set __currentFortressItem(fortressItem : FortressItem) {
    this._currentFortressItem = fortressItem;
    this._currentFortressItemSlide = fortressItem.slides[0];
    this._leftOffset = 0;
  }
  get currentFortressItem() : FortressItem{
    return this._currentFortressItem;
  }


  //#region mapState
  private _mapStateExtended : boolean;
  get mapStateExtended() : boolean { return this._mapStateExtended; }

  public toggleMapStateExtended(){
    this._mapStateExtended = !this._mapStateExtended;
  }

  private _mapState : MapState = MapState.overview;
  set mapState(mapState : MapState) { this._mapState = mapState; }
  get mapState() : MapState { return this._mapState; }

  public isMapStateOverview() : boolean {
    return this._mapState == MapState.overview;
  }
  public isMapStateLivingroom1floor() : boolean {
    return this._mapState == MapState.livingroom1floor;
  }
  public isMapStateLivingroom2floor() : boolean {
    return this._mapState == MapState.livingroom2floor;
  }
  //#endregion


  //#region slider
  private _leftOffset : number = 0;
  get leftOffset() : number { return this._leftOffset; }

  get slidesCSS() : object {
    return {
      width : `${this.currentFortressItem.slides.length * 100}vw`,
      transform : `translateX(-${this._leftOffset}px)`
    }
  }

  private _currentFortressItemSlide : FortressItemSlide

  public move(direction : number) {
    let newIndex : number = this.currentFortressItem.slides.indexOf(this._currentFortressItemSlide) + direction;
    if(newIndex < 0){
      newIndex = this.currentFortressItem.slides.length - 1;
    }
    else if(newIndex > this.currentFortressItem.slides.length -1){
      newIndex = 0;
    }

    this._currentFortressItemSlide = this.currentFortressItem.slides[newIndex];

    this._leftOffset = window.innerWidth * newIndex;
  }
  //#endregion


  public changeRoom(roomId: number){
    if (roomId == -1){
      this.changeMap(1);
    }
    else if (roomId == -2){
      this.changeMap(2);
    }
    else if (roomId == 0){
      this.changeMap(0);
    }
    else {
      this.__currentFortressItem = this._fortressItems.filter(x => x.roomId == roomId)[0] || this._fortressItems[0];
    }
  }

  public changeMap(mapId: number){
    this._mapState = mapId;
  }
}
export enum MapState {
  overview = 0,
  livingroom1floor = 1,
  livingroom2floor = 2,
}