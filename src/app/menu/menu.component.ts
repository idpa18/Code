import { Component, OnInit } from '@angular/core';
import { ELEMENT_MARKER } from '@angular/core/src/render3/interfaces/i18n';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelectorAll( '.menu_items_wrapper' ).forEach( ( circlegraph )=>{
      this.placeMenuIcons(circlegraph, 90, 485);
    })
    document.querySelectorAll( '.menu_second_items_wrapper' ).forEach( ( circlegraph )=>{
      this.placeMenuIcons(circlegraph, 270, 270);
    })
  }

  private placeMenuIcons(circlegraph : Element, angle : number, translate : number) {
    let circles : NodeListOf<HTMLElement> = circlegraph.querySelectorAll( '.menu_item' )
    let dangle = -90 / (circles.length + 1)
    for( let i = 0; i < circles.length; ++i ){
      let circle = circles[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${translate}px) rotate(-${angle}deg)`
    }
  }

  //#region mapState
  private _menuStateExtended : boolean;
  get menuStateExtended() : boolean { return this._menuStateExtended; }

  private toggleMenuState(){
    this._menuStateExtended = !this._menuStateExtended;
  }
  //#endregion

  test(){
    alert("TEST");  
  }

}
