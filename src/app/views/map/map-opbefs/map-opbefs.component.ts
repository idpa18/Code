import { Component, OnInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Map } from "../DTO/Map"
import { OpBef } from '../DTO/OpBef';

@Component({
  selector: 'app-map-opbefs',
  templateUrl: './map-opbefs.component.html',
  styleUrls: ['./map-opbefs.component.scss']
})
export class MapOpbefsComponent implements OnInit {

  opbefs: Array<OpBef> = [
    {
      number: 1
    },
    {
      number: 14
    },
    {
      number: 16
    },
    {
      number: 18
    }
  ];

  selectedOpBef: OpBef = this.opbefs[0];

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  changeOpBef(number) {
    document.getElementById("opbef" + this.selectedOpBef.number).style.display = "none";
    document.getElementById("opbef" + number).style.display = "block";
    this.selectedOpBef = this.opbefs.find(o => o.number == number);
  }

}

/*@Directive({selector: 'path'})
export class OpBefLocationDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    
  }
}*/