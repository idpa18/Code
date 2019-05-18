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
      roomName : "room0",
      slides : [
        {
          id : 1,
          title : "Raumname0",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_029.jpg"
        },
        {
          id : 2,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_030.jpg"
        },
        {
          id : 3,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_031.jpg"
        }
      ]
    },
    {
      roomName : "room1",
      slides : [
        {
          id : 1,
          title : "Raumname1",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_029.jpg"
        },
        {
          id : 2,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_030.jpg"
        },
        {
          id : 3,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_031.jpg"
        }
      ]
    },
    {
      roomName : "room2",
      slides : [
        {
          id : 1,
          title : "Raumname2",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_029.jpg"
        },
        {
          id : 2,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_030.jpg"
        },
        {
          id : 3,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_031.jpg"
        }
      ]
    },
    {
      roomName : "room3",
      slides : [
        {
          id : 1,
          title : "Raumname3",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_029.jpg"
        },
        {
          id : 2,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_030.jpg"
        },
        {
          id : 3,
          title : "Raumname",
          text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At",
          path : "Fotos_Vitznau_031.jpg"
        }
      ]
    }
  ];
  
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


  private changeRoom(roomName: string){
    this.__currentFortressItem = this._fortressItems.filter(x => x.roomName == roomName)[0] || this._fortressItems[0];
    console.log(roomName);
    console.log(this.currentFortressItem);
  }
}
