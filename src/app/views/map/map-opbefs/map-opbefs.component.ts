import { Component, OnInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Map } from "../DTO/Map"
import { OpBef } from '../DTO/OpBef';

@Component({
  selector: 'app-map-opbefs',
  templateUrl: './map-opbefs.component.html',
  styleUrls: ['./map-opbefs.component.scss']
})
export class MapOpbefsComponent implements OnInit {

  locationTooltipOptions = {
    "placement": "top",
    "show-delay": 500
  };

  opbefs: Array<OpBef> = [
    {
      number: 1
    },
    {
      number: 2
    },
    {
      number: 3
    },
    {
      number: 4
    },
    {
      number: 5
    },
    {
      number: 6
    },
    {
      number: 7
    },
    {
      number: 8
    },
    {
      number: 9
    },
    {
      number: 10
    },
    {
      number: 12
    },
    {
      number: 13
    },
    {
      number: 14
    },
    {
      number: 15
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