import { Component, OnInit, Input } from "@angular/core";
import { PersonDetailItem } from "../person-detail/DTO/PersonDetailItem";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.scss"]
})
export class PersonDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    console.log("Test");
    this._currentPersonDetailItem = this._persons.find(item => item.link == this._route.snapshot.paramMap.get("person"));
  }

  private _persons: Array<PersonDetailItem> = [
    {
      id: 1,
      personName: "Henri Guisan",
      link:"henri-guisan",
      imagePath: "guisan.jpg",
      paragraphs: [
        "Henri Guisan wurde am 21. Oktober 1874 in Mézières geboren. Er war der Sohn von Charles-Ernest Guisan, einem Landarzt, und Louise-Jeanne Bérangier. Seine Mutter starb bereits zehn Monate nach seiner Geburt.",
        "Nach dem Gynmasium lebte Henri Guisan für sechs Monate in Deutschland, um sein Deutsch zu verbessern. Danach begann er ein Medizinstudium, später wechselte er aber zu einem landwirtschaftlichen Studium.",
        "Vor seiner Zeit als General hatte Henri Guisan bereits mehrere Dienstgrade in der Armee inne. Das begann 1894 als Leutnant bis zum Oberstkorpskommandant 1932. Während dem ersten Weltkrieg war Guisan mehrmals an der deutschen Ostfront, um verschiedene Kriegstaktiken zu erlernen. Als sich die feindliche Stimmung in Europa verstärkte, und es klar wurde, dass es zum Krieg kommen würde, wurde Henri Guisan am 30. August 1939 zum General und somit zum Oberbefehlshaber der Schweizer Armee gewählt. Die Schweiz hat zur zu Kriegszeiten einen General, der von der vereinigten Bundesversammlung, also Ständerat und Nationalrat, gewählt wird.",
        "Im Gegensatz zu Ulrich Wille, dem General aus dem ersten Weltkrieg, war General Guisan äusserst beliebt. Er hatte Kontakt zu den einfachen Soldaten. Mit verschiedensten Ansprachen stärkte er der Wehrwille der Schweizer Soldaten und der Bevölkerung.",
        "Für Aufsehen sorgte General Guisan mit dem sogenannten «Rütli-Rapport». Am 25. Juli 1940 fuhr er mit allen Armeeangehörigen ab Stufe Major mit dem Dampfschiff Stadt Luzern zur Rütliwiese. Zu diesem Zeitpunkt war die Schweiz von Feinden umzingelt. General Guisan teilte auf der Rütliwiese seinen Entscheid mit, die Armee in das Reduit zurückzuziehen. Das nachdem er zuvor kein Freund der sogenannten Reduit-Strategie war.",
        "Nach Ende des zweiten Weltkrieges trat Henri Guisan am 20. August 1945 aus seinem Amt als General aus.",
        "Henri Guisan starb im Alter von 86 Jahren am 07. April 1960. Zu der Trauerfeier am 12. April kamen rund 300'000 Menschen, darunter der gesamte Bundesrat und viele ehemalige Bundesräte."
      ]
    },
    {
      id: 2,
      personName: "Max Alphons Pfyffer von Altishofen",
      imagePath: "pfyffer.jpg",
      link:"max-alphons-pfyffer-von-altishofen",
      paragraphs: [
        "Max Alphons Pfyffer wurde am 12. Oktober 1834 in Altishofen geboren. Er war der Sohn von Heinrich. Die Familie Pfyffer von Altishofen war eine ein Patriziergeschlecht in der früheren Republik Luzern. Die Patrizierfamilien bildeten das Patriziat, welche die wichtigen Ämter in Luzern besetzten. Pfyffer von Altishofen war die mächtigste der Patrizierfamilien. Luzern war damals noch eine freie und souveräne eidgenössische Stadt und Republik. Max Alphons Pfyffer wuchs also im Adel auf.",
        "Pfyffer war Architekt und Hotelier, er erbaute das Grand Hotel Naional in Luzern, welches heute noch immer in Betrieb ist. Das Hotel ist als unter Denkmalschutz, es wird als Kulturgut von nationaler Bedeutung eingestuft.",
        "Pfyffer zeichnete auch die Pläne für die Alpenfestung Gotthard, welche auch gebaut wurde. Dadurch wurde Max Alphons Pfyffer zum Begründer des Reduit-Konzepts.",
        "Pfyffer starb am 12. Januar 1890 55-jährig in Luzern."
      ]
    },
    {
      id: 3,
      personName: "Oscar Adolf Germann",
      imagePath: "germann.jpg",
      link:"oscar-adolf-germann",
      paragraphs: [
        "Oscar Adolf Germann wurde am 19. August 1889 in Frauenfeld geboren. Sein Vater Adolf Germann war ein FDP-Politiker, seine Mutter hiess Hermine Germann. Oscar Germann hatte drei Brüder.",
        "Germann besuchte die Kantonsschule in Frauenfeld, später studierte er Rechtswissenschaft in Zürich, dabei lehrte er einige Semester in Deutschland in Österreich. 1918 wurde er als Experte im Eidgenössischen Volkswirtschaftsdepartement angestellt. Zehn Jahre später, 1928, wurde er Professor für Arbeitsrecht an der Universität Bern. Von 1930 bis 1960 war er Professor für Strafrecht an der Universität Basel.",
        "Nebst seinen Tätigkeiten als Professor hatte Germann eine Karriere im Militär. 1923 wurde er Generalstabsoffizier der Schweizer Armee, 1937 wurde er Stabschef des zweiten Armeekorpses. Von 1939 – 1940 war er Mitarbeiter und zeitweise Leiter der Operationssektion im Armeestab. Während dieser Zeit erarbeitete Germann die Aufmarschpläne Nord und West, welche eine Zusammenarbeit mit der französischen oder deutschen Armee beinhalteten. Germann erstellte auch den Rückzugsplan in die Wiggerstellung. Germann war auch ein Befürworter der Reduit-Strategie, er verfasste auch einen der beiden Pläne für die Reduitstrategie. Sein Plan wurde aber nicht ausgeführt, es wurde derjenige von Samuel Gonard verwendet. Von 1941 – 1944 war Germann Stabschef des 4. Armeekorpses. 1945, noch vor dem Ende des zweiten Weltkrieges, beendete Germann seine militärische Laufbahn.",
        "Germann war verheiratet mit Elisabeth Martin, mit ihr hatte er zwei Töchter und einen Sohn. Im hohen Alter von 90 Jahren verstarb Oscar Adolf Germann in Bottmingen, einer Gemeinde im Kanton Basel-Landschaft."
      ]
    },
    {
      id: 4,
      personName: "Samuel Gonard",
      imagePath: "gonard.jpg",
      link:"samuel-gonard",
      paragraphs: [
        "Samuel Gonard wurde am 08. Juli 1896 in Neuenburg geboren. Er ist der Sohn vom gleichnamigen Samuel Gonard, einem Händler. Er war ein Schweizer Jurist und Berufsoffizier in der Schweizer Armee.",
        "Samuel Gonard besuchte das Gymnasium in Neuenburg, später studierte er Rechtswissenschaften, das Studium schloss er 1921 ab. Von 1946 bis 1952 war er Dozent für Kriegsgeschichte und Taktik an der Eidgenössischen Technischen Hochschule in Zürich.",
        "Bereits 1919 wurde er zum Leutnant in der Armee ernannt. In der Hierarchie stieg Gonard stetig empor, 1927 wurde er zum Hauptmann, 1933 zum Major befördert. Ab 1937 war er Mitglied der Generalstabsabteilung. 1939, dem Jahr des Kriegsbeginns, erhielt Gonard von General Guisan den Auftrag, seinen persönlichen Stab einzurichten und auch zu leiten. Vier Jahre später wurde Gonard zum Oberst-Brigadier und Unterstabschef der Armeeleitung ernannt, und war somit ein enger Mitarbeiter von Guisan. Der Plan der Reduitstrategie, der schlussendlich ausgeführt wurde, stammte von Samuel Gonard.",
        "1961 wurde Gonard in das internationale Komitee des roten Kreuzes (IKRK) aufgenommen, kurz darauf beendete er seine Militärkariere. Von 1964 bis 1969 und seinem altersbedingten Rücktritt war Gonard Präsident des IKRK.",
        "Gonard war zweimal verheiratet, zuerst mit Hélène Dubois Gonard (ledig Louis), später mit Manon Bosshard Gonard (ledig Bosshard). Am 03. Mai 1975 verstarb Samuel Gonard 78-jährig in Corseau."
      ]
    }
  ];

  private _currentPersonDetailItem: PersonDetailItem;

  get currentPersonDetailItem(): PersonDetailItem {
    return this._currentPersonDetailItem;
  }
}
