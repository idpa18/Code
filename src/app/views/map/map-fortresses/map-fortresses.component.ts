import { Component, OnInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Fortress } from "../DTO/Fortress"
import { Map } from "../DTO/Map"

@Component({
  selector: 'app-map-fortresses',
  templateUrl: './map-fortresses.component.html',
  styleUrls: ['./map-fortresses.component.scss']
})
export class MapFortressesComponent implements OnInit {
  maps: Array<Map> = [
    {
      title: "Festungen Schweiz",
      fortresses: [
        {
          id: "pre-giroud",
          name: "Artilleriewerk Pré-Giroud",
          location: "Vallorbe",
          buildYear: 1941,
          maxCrewSize: 130,
          artilleryPieces: ["3 Kanonen (7,5 cm)", "2 Maschinengewehre", "8 Maschinengewehrstände", "1 Panzerabwehrkanone (4,7 cm)"]
        },
        {
          id: "reuenthal",
          name: "Artilleriewerk Reuenthal",
          location: "Reuenthal",
          buildYear: 1939,
          maxCrewSize: 150,
          artilleryPieces: ["2 Kanonen (7,5 cm)"]
        },
        {
          id: "ebersberg",
          name: "Artilleriewerk Ebersberg",
          location: "Berg",
          buildYear: 1941,
          maxCrewSize: 66,
          artilleryPieces: ["2 Bunkerkanonen (7,5 cm)"]
        },
        {
          id: "heldsberg",
          name: "Artilleriewerk Heldsberg",
          location: "St. Margrethen",
          buildYear: 1941,
          maxCrewSize: 200,
          artilleryPieces: ["4 Kanonen (7,5 cm)", "7 Maschinengewehre"]
        },
        {
          id: "crestawald",
          name: "Artilleriewerk Crestawald",
          location: "Sufers",
          buildYear: 1940,
          maxCrewSize: 95,
          artilleryPieces: ["2 Kanonen (10,5 cm)"]
        },
        {
          id: "stalusa",
          name: "Festung Stalusa",
          location: "Disentis",
          buildYear: 1967,
          maxCrewSize: 50,
          artilleryPieces: ["2 Minenwerfer (8,1 cm)"]
        },
        {
          id: "isleten",
          name: "Artilleriewerk Isleten",
          location: "Isenthal",
          buildYear: 1943,
          maxCrewSize: 0,
          artilleryPieces: ["unbekannt"]
        },
        {
          id: "halsegg",
          name: "Artilleriewerk Halsegg",
          location: "Sattel",
          buildYear: 1988,
          maxCrewSize: 0,
          artilleryPieces: ["4 Kanonen (10,5 cm)"]
        },
        {
          id: "barbara",
          name: "Artilleriewerk Barbara",
          location: "Arth",
          buildYear: 1942,
          maxCrewSize: 0,
          artilleryPieces: ["4 Kanonen (7,5 cm)"]
        },
        {
          id: "muehlefluh",
          name: "Artilleriewerk Mühlefluh",
          location: "Vitznau",
          buildYear: 1943,
          maxCrewSize: 337,
          artilleryPieces: ["2 Kanonen (10,5 cm)"]
        },
        {
          id: "fuerigen",
          name: "Artilleriewerk Fürigen",
          location: "Stansstaad",
          buildYear: 1942,
          maxCrewSize: 0,
          artilleryPieces: ["2 Kanonen (7,5 cm)", "3 Maschinengewehre", "1 Weisslicht-Scheinwerfer"]
        },
        {
          id: "mueterschwanderberg",
          name: "Artilleriewerk Mueterschwanderberg",
          location: "Stans",
          buildYear: 1944,
          maxCrewSize: 715,
          artilleryPieces: ["8 Haubitzen (15 cm)", "14 Kanonen (7,5 cm)", "2 Kanonen (10,5 cm)", "1 Kanone (9 cm)", "1 Maschinengewehr (7,5mm)"]
        },
        {
          id: "wissifluh",
          name: "Artilleriewerk Wissifluh",
          location: "Dallenwil",
          buildYear: 1943,
          maxCrewSize: 175,
          artilleryPieces: ["4 Bunkerkanonen (15 cm)", "4 Fliegerabwehr Kanonen (20 mm)"]
        },
        {
          id: "naters",
          name: "Artilleriewerk Naters",
          location: "Naters",
          buildYear: 1940,
          maxCrewSize: 200,
          artilleryPieces: ["4 Kanonen (7,5 cm)", "2 Kanonen (10,5 cm)", "1 Panzerabwehrkanone", "Maschinengewehre"]
        },
        {
          id: "burgfluh",
          name: "Artilleriewerk Burg",
          location: "Wimmis",
          buildYear: 1943,
          maxCrewSize: 450,
          artilleryPieces: ["8 Feldhaubitzen (15 cm)", "4 Kanonen (7,5 cm)"]
        },
        {
          id: "euschels",
          name: "Festung Euschels",
          location: "Jaun",
          buildYear: 0,
          maxCrewSize: 0,
          artilleryPieces: ["2 Kanonen (7,5 cm)", "2 Infanteriebunker"]
        },
        {
          id: "gross-tosse",
          name: "Artilleriewerk Gross Tosse",
          location: "Jaun",
          buildYear: 1942,
          maxCrewSize: 327,
          artilleryPieces: ["8 Feldhaubitzen (12 cm)"]
        },
        {
          id: "la-braye",
          name: "Artilleriewerk La Braye",
          location: "Château-d’Œx",
          buildYear: 1944,
          maxCrewSize: 0,
          artilleryPieces: ["8 Kanonen (10,5 cm)"]
        },
        {
          id: "la-tine",
          name: "Festung La Tine",
          location: "Montbovon",
          buildYear: 1941,
          maxCrewSize: 0,
          artilleryPieces: ["20 Infanteriebunker"]
        },
        {
          id: "chillon",
          name: "Artilleriewerk Chillon",
          location: "Veytaux",
          buildYear: 1941,
          maxCrewSize: 180,
          artilleryPieces: ["6 Kanonen (7,5 cm)", "5 Maschinengewehre"]
        },
        {
          id: "champillon",
          name: "Artilleriewerk Champillon",
          location: "Champillon",
          buildYear: 1942,
          maxCrewSize: 0,
          artilleryPieces: ["2 Kanonen (10,5 cm)"]
        },
        {
          id: "follateres",
          name: "Artilleriewerk Follatères",
          location: "Martigny",
          buildYear: 0,
          maxCrewSize: 0,
          artilleryPieces: ["4 Kanonen (7,5 cm)", "2 Kanonen (10,5 cm)"]
        },
        {
          id: "champex",
          name: "Artilleriewerk Champex",
          location: "Champex-Lac",
          buildYear: 1943,
          maxCrewSize: 300,
          artilleryPieces: ["8 Kanonen (10,5 cm)", "2 Kanonen (7,5 cm)"]
        },
        {
          id: "commeire",
          name: "Artilleriewerk Commeire",
          location: "Commeire",
          buildYear: 1943,
          maxCrewSize: 140,
          artilleryPieces: ["4 Kanonen (7,5 cm)"]
        }
      ]
    },
    {
      title: "Festungsraum Gotthard",
      fortresses: [
        {
          id: "grimsel",
          name: "Artilleriewerk Grimsel",
          location: "Obergoms",
          buildYear: 1942,
          maxCrewSize: 250,
          artilleryPieces: ["6 Kanonen (15 cm)", "3 Maschinengewehre"]
        },
        {
          id: "fuchsegg",
          name: "Artilleriewerk Fuchsegg",
          location: "Realp",
          buildYear: 1945,
          maxCrewSize: 405,
          artilleryPieces: ["4 Kanonen (10,5 cm)", "20 Flabgeschütze (20 mm)"]
        },
        {
          id: "guetsch",
          name: "Artilleriewerk Gütsch",
          location: "Andermatt",
          buildYear: 1944,
          maxCrewSize: 300,
          artilleryPieces: ["3 Kanonen (10,5 cm)", "5 Maschinengewehre"]
        },
        {
          id: "san-carlo",
          name: "Artilleriewerk San Carlo",
          location: "San Carlo",
          buildYear: 1944,
          maxCrewSize: 0,
          artilleryPieces: ["1 Kanone (10,5 cm)"]
        },
        {
          id: "sasso-da-pigna",
          name: "Artilleriewerk Sasso da Pigna",
          location: "Airolo",
          buildYear: 1943,
          maxCrewSize: 500,
          artilleryPieces: ["4 Kanonen (15 cm)"]
        },
        {
          id: "hospiz",
          name: "Fort Hospiz",
          location: "Gotthardpass",
          buildYear: 1914,
          maxCrewSize: 0,
          artilleryPieces: ["2 Infanteriekanonen (4,7 cm)", "4 Schnellfeuerkanonen (5,3 cm)", "7 Maschinengewehre"]
        },
        {
          id: "foppa-grande",
          name: "Artilleriewerk Foppa Grande",
          location: "Airolo",
          buildYear: 1940,
          maxCrewSize: 0,
          artilleryPieces: ["1 Kanone (10,5 cm)", "3 Fliegerabwehrkanonen (20 mm)"]
        },
        {
          id: "motto-bartola",
          name: "Artilleriewerk Motto Bartolo",
          location: "Airolo",
          buildYear: 1890,
          maxCrewSize: 95,
          artilleryPieces: ["4 Kanonen (12 cm)", "2 Kanonen (8,4 cm)", "6 Kanonen (12 cm)"]
        },
        {
          id: "forte-airolo",
          name: "Artilleriewerk Forte Airolo",
          location: "Airolo",
          buildYear: 1890,
          maxCrewSize: 0,
          artilleryPieces: ["2 Ringrohrkanonen (12 cm)", "5 Ringrohrkanonen (8,4 cm)", "12 Bronzekanonen (8,4 cm)", "2 Kanonen (8,4 cm)", "2 Panzerhaubitzen (12 cm)"]
        },
        {
          id: "grandinagia",
          name: "Artilleriewerk Grandinagia",
          location: "Bedretto",
          buildYear: 1939,
          maxCrewSize: 0,
          artilleryPieces: ["2 Kanonen (7,5 cm)"]
        }
      ]
    },
    {
      title: "Festungsraum St.Maurice",
      fortresses: [
        {
          id: "cindey",
          name: "Artilleriewerk Cindey",
          location: "St. Maurice",
          buildYear: 1946,
          maxCrewSize: 173,
          artilleryPieces: ["2 Panzerabwehrkanonen (7,5 cm)", "4 Panzerabwehrkanonen (9 cm)", "3 Maschinengewehre"]
        },
        {
          id: "scex",
          name: "Fort du Scex",
          location: "St. Maurice",
          buildYear: 1911,
          maxCrewSize: 346,
          artilleryPieces: ["4 Kanonen (7,5 cm)"]
        },
        {
          id: "dailly",
          name: "Artilleriestellung und -Werk Dailly-Savatan-Aiguille",
          location: "St. Maurice",
          buildYear: 1894,
          maxCrewSize: 950,
          artilleryPieces: ["veränderte sich laufend"]
        }
      ]
    },
    {
      title: "Festungsraum Sargans",
      fortresses: [
        {
          id: "magletsch",
          name: "Artilleriewerk Magletsch",
          location: "Wartau",
          buildYear: 1943,
          maxCrewSize: 381,
          artilleryPieces: ["3 Kanonen (10,5 cm)", "4 Kanonen (7,5 cm)", "8 Maschinengewehr-Stände", "2 Leicht-Maschinengewehr-Stände"]
        },
        {
          id: "schollberg",
          name: "Artilleriewerk Schollberg",
          location: "Trübbach",
          buildYear: 1944,
          maxCrewSize: 370,
          artilleryPieces: ["3 Artilleriebeobachter", "2 Geschützstände", "19 Infanteriebunker", "14 Leicht-Maschinengewehr-Stände", "5 Maschinengewehr-Stände"]
        },
        {
          id: "passati",
          name: "Artilleriewerk Passati",
          location: "Sargans",
          buildYear: 1940,
          maxCrewSize: 0,
          artilleryPieces: ["2 Kanonen (7,5 cm)", "5 Maschinengewehre"]
        },
        {
          id: "castels",
          name: "Artilleriewerk Castels",
          location: "Sargans",
          buildYear: 1940,
          maxCrewSize: 0,
          artilleryPieces: ["3 Kanonen (10,5 cm)", "1 Kanone (7,5 cm)", "6 Maschinengewehre"]
        },
        {
          id: "tschingel",
          name: "Artilleriewerk Tschingel",
          location: "Fläsch",
          buildYear: 1940,
          maxCrewSize: 160,
          artilleryPieces: ["1 Bunkerkanone (7,5 cm)"]
        },
        {
          id: "st-luzisteig",
          name: "Festung St. Luzisteig",
          location: "St. Luzisteig",
          buildYear: 1703,
          maxCrewSize: 0,
          artilleryPieces: ["unbekannt"]
        },
        {
          id: "furggels",
          name: "Artilleriewerk Furggels",
          location: "Pfäffers",
          buildYear: 1939,
          maxCrewSize: 420,
          artilleryPieces: ["4 Kanonen (10,5 cm)", "4 Kanonen (15 cm)"]
        }
      ]
    }
  ];

  selectedMap: Map = this.maps[0];
  showMapFortressArea: boolean = false;

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  onMapMarkerHoverEnter(event) {
    var fortress = event.target.attributes.id.nodeValue;
    let fortressListItem = this.elem.nativeElement.querySelectorAll("*[fortress='" + fortress + "']")[0];
    if (fortressListItem) {
      fortressListItem.scrollIntoView();
      fortressListItem.querySelectorAll(".fortresses-list-item-artilleryPieces")[0].style.display = "block";
    }
  }

  onMapMarkerHoverLeave(event) {
    var fortress = event.target.attributes.id.nodeValue;
    let fortressListItem = this.elem.nativeElement.querySelectorAll("*[fortress='" + fortress + "']")[0];
    if (fortressListItem) {
      fortressListItem.querySelectorAll(".fortresses-list-item-artilleryPieces")[0].style.display = "";
    }
  }

  hightlightMarker(fortress) {
    let mapMarkers = this.elem.nativeElement.querySelectorAll(".map path");
    mapMarkers.forEach(m => m.style.display = m.id != fortress.id ? "none" : "initial");
  }

  unhighlightMarker() {
    let mapMarkers = this.elem.nativeElement.querySelectorAll(".map path");
    mapMarkers.forEach(m => m.style.display = "initial");
  }

  closeMap() {
    this.selectedMap = this.maps[0];
    this.showMapFortressArea = false;
  }

  openMap(mapId) {
    this.selectedMap = this.maps[mapId];
    this.showMapFortressArea = true;
  }

}