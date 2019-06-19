import { Component, OnInit } from '@angular/core';
import { FortressItem } from './DTO/FortressItem';
import { FortressItemSlide } from './DTO/FortressItemSlide';

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
      roomId : 7,
      roomName : "Unterkunftstrakt",
      slides : [
        {
          id : 1,
          title : "Bettschläge der Soldaten",
          text : "Die Festung besitzt insgesamt 2 Bettschläge für die Soldaten. Zu Beginn der Kriegszeit fanden etwa 300 Mann in der Festung Platz, im Verlauf der Jahre sank die Zahl auf 100 Mann.",
          path : "Fotos_Vitznau_025.jpg"
        },
        {
          id : 2,
          title : "Bettschläge der Offiziere",
          text : "Die Kapazität der Zimmer wurde mit zunehmendem Militärgrad kleiner.",
          path : "Fotos_Vitznau_027.jpg"
        },
        {
          id : 3,
          title : "Bettschläge des Kommandanten",
          text : "___",
          path : "Fotos_Vitznau_032.jpg"
        },
        {
          id : 4,
          title : "Waschraum",
          text : "Um den im Militär geltenden Hygienevorschriften gerecht zu werden, standen diese Waschbecken zur Verfügung.",
          path : "Fotos_Vitznau_026.jpg"
        },
        {
          id : 5,
          title : "Offiziersbüro",
          text : "",
          path : "Fotos_Vitznau_029.jpg"
        },
        {
          id : 6,
          title : "Mikrofon für Festungsdurchsagen",
          text : "",
          path : "Fotos_Vitznau_028.jpg"
        },
        {
          id : 7,
          title : "Offiziersesssaal",
          text : "Die Bilder, die in jedem Raum des Unterkunftstraks zu finden sind, sollten die fehlenden Fenster ersetzen.",
          path : "Fotos_Vitznau_030.jpg"
        },
        {
          id : 8,
          title : "Funk- und Telefonzentrale",
          text : "Dieser Raum diente als Kommunikationszentrale gegen aussen. Sie war ständig besetzt.",
          path : "Fotos_Vitznau_035.jpg"
        },
        {
          id : 12,
          title : "Festungsarzt",
          text : "Das festungseigene Spital wäre im Ernstfall für Operationen ausgerüstet gewesen.",
          path : "Fotos_Vitznau_043.jpg"
        },
        {
          id : 12,
          title : "Festungsspital",
          text : "Da ein Ernstfall glücklicherweise ausblieb, waren nur kleinere Eingriffe nötig.",
          path : "Fotos_Vitznau_038.jpg"
        },
        {
          id : 11,
          title : "Festungsspital",
          text : "Dieses Zimmer kam häufig als Entlausungszimmer zum Einsatz. Durch teilweise schlechte Hygiene im Bunker waren Läuse eine häufige Erscheinung. ",
          path : "Fotos_Vitznau_037.jpg"
        },
        {
          id : 17,
          title : "Krankenzimmer",
          text : "In diesen Betten hätten sich Kranke und/oder Verunfallte aufhalten können. Insgesamt waren 8 Betten für diesen Zweck vorgesehen.",
          path : "Fotos_Vitznau_047.jpg"
        },
        {
          id : 19,
          title : "Esssaal",
          text : "Der Esssaal war zu Kriegszeiten noch nicht mit Ausstellungsgegenständen bestückt. Trotzdem war es einer der wenigen Räume, welcher auf eine angenehme Temperatur geheizt wurde.",
          path : "Fotos_Vitznau_049.jpg"
        },
        {
          id : 21,
          title : "Küche",
          text : "Gekocht wurde in diesem Raum. Die Kuchenutensilien sind grösstenteils Originalstücke. Das Essen war sehr monoton: viel Kartoffeln und Nahrung aus Konservendosen.",
          path : "Fotos_Vitznau_052.jpg"
        },
        {
          id : 23,
          title : "Kommandozentrale",
          text : "Hier wurden die Schüsse berechnet. Mit den vielen Utensilien konnten sie alle Winkel genau ausfindig machen, welche danach per Funk zu den Schiessständen übermittelt wurden.",
          path : "Fotos_Vitznau_054.jpg"
        },
        {
          id : 24,
          title : "Abdeckungsgebiete der Festungsschiessstände",
          text : "Hier ist die Abdeckungskarte der verschiedenen Festungen um den Vierwaldstättersee zu sehen. Der rote Bereich wurde von der Festung Vitznau abgedeckt.",
          path : "Fotos_Vitznau_055.jpg"
        },
        {
          id : 27,
          title : "Ausgang des Unterkunftstrakt",
          text : "Diese Türe trennt den Unterkunftstrakt von der Festung.",
          path : "Fotos_Vitznau_063.jpg"
        },
        {
          id : 28,
          title : "Schleuse: Unterkunftstrakt - Festung",
          text : "Eine Nachrüstung: Als vermehrt Gasangriffe stattgefunden haben, wurde diesen Dusche errichtet. So wurde sichergestellt, dass die gefährlichen Gase möglichst nicht in den Unterkunftstrakt gelangen konnten.",
          path : "Fotos_Vitznau_064.jpg"
        },
      ]
    },
    {
      roomId : 8,
      roomName : "Festungsgang",
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
      roomName : "Schiessstand 2",
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
      roomName : "Treppe zum Beobachtungsposten",
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
      roomName : "Beobachtungsposten",
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
    }
  ]
  
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

  private toggleMapStateExtended(){
    this._mapStateExtended = !this._mapStateExtended;
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
    console.log(newIndex)
    if(newIndex < 0){
      newIndex = this.currentFortressItem.slides.length - 1;
    }
    else if(newIndex > this.currentFortressItem.slides.length -1){
      newIndex = 0;
    }

    this._currentFortressItemSlide = this.currentFortressItem.slides[newIndex];
    
    console.log(window.innerWidth * direction * newIndex)
    
    this._leftOffset = window.innerWidth * newIndex;
  }
  //#endregion


  private changeRoom(roomId: number){
    this.__currentFortressItem = this._fortressItems.filter(x => x.roomId == roomId)[0] || this._fortressItems[0];

  }
}
