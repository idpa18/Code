import { Component, OnInit } from "@angular/core";
import { PersonOverviewItem } from "./DTO/PersonOverviewItem";
import { $ } from "protractor";

@Component({
  selector: "app-person-overview",
  templateUrl: "./person-overview.component.html",
  styleUrls: ["./person-overview.component.scss"]
})
export class PersonOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  private _persons: Array<PersonOverviewItem> = [
    {
      id: 1,
      personName: "Henri Guisan",
      imagePath: "Fotos_Vitznau_029.jpg",
      facts: ["1874 - 1960", "Schweizer General", "Hoher Beliebtheitsgrad"]
    },
    {
      id: 2,
      personName: "Max Alphons Pfyffer von Altishofen",
      imagePath: "Fotos_Vitznau_029.jpg",
      facts: [
        "1834 - 1890",
        "Adelgeschlecht",
        "Planer der Gotthardfestung",
        "Mitbegründer des Reduit-Konzepts"
      ]
    },
    {
      id: 3,
      personName: "Oscar Adolf Germann",
      imagePath: "Fotos_Vitznau_029.jpg",
      facts: [
        "1889 - 1979",
        "Mitglied des Generalstabs",
        "Mitgestalter der Reduit-Strategie"
      ]
    },
    {
      id: 4,
      personName: "Samuel Gonard",
      imagePath: "Fotos_Vitznau_029.jpg",
      facts: [
        "1896 - 1975",
        "Jurist und Berufsoffizier",
        "Mitglied des Generalstabs",
        "Mitgestalter der Reduit-Strategie"
      ]
    }
  ];

  private _currentPersonOverviewItem: PersonOverviewItem;
  private _leftOffset: number = 0;
  private _showDetails: boolean = false;

  get showDetails(): boolean {
    return this._showDetails;
  }

  get persons(): Array<PersonOverviewItem> {
    return this._persons;
  }

  get leftOffset(): number {
    return this._leftOffset;
  }

  get slidesCSS(): object {
    return {
      width: `${this._persons.length * 100}vw`,
      transform: `translateX(-${this._leftOffset}px)`
    };
  }

  public move(direction: number) {
    let newIndex: number =
      this._persons.indexOf(this._currentPersonOverviewItem) + direction;

    if (newIndex < 0) {
      newIndex = this._persons.length - 1;
    } else if (newIndex > this._persons.length - 1) {
      newIndex = 0;
    }

    this._currentPersonOverviewItem = this._persons[newIndex];
    this._leftOffset = window.innerWidth * newIndex;
  }

  public showPersonDetails(show: boolean) {
    this._showDetails = show;
  }
}
