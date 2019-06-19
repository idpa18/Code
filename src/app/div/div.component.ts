import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivComponent implements OnInit, AfterViewInit {
  fragment: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    this.navigateTo(this.fragment);
  }

  navigateTo(fragment: string) {
    try {
      console.log(fragment);
      document.querySelector('#' + fragment).scrollIntoView();
    } catch (e) { }
  }

}
