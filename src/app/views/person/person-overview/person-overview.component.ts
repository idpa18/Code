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
      imagePath: "guisan.jpg",
      link:"henri-guisan",
      facts: ["1874 - 1960", "Schweizer General", "Hoher Beliebtheitsgrad"]
    },
    {
      id: 2,
      personName: "Max Alphons Pfyffer von Altishofen",
      imagePath: "pfyffer.jpg",
      link:"max-alphons-pfyffer-von-altishofen",
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
      imagePath: "germann.jpg",
      link:"oscar-adolf-germann",
      facts: [
        "1889 - 1979",
        "Mitglied des Generalstabs",
        "Mitgestalter der Reduit-Strategie"
      ]
    },
    {
      id: 4,
      personName: "Samuel Gonard",
      imagePath: "gonard.jpg",
      link:"samuel-gonard",
      facts: [
        "1896 - 1975",
        "Jurist und Berufsoffizier",
        "Mitglied des Generalstabs",
        "Mitgestalter der Reduit-Strategie"
      ]
    }
  ];

  get persons(): Array<PersonOverviewItem> {
    return this._persons;
  }
}
