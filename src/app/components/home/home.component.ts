import { Component, OnInit } from '@angular/core';
import { SectionLayouts } from '../../models/sectionLayouts';
import { HomeItems } from '../../models/homeItems';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sectionLayouts: SectionLayouts[];

  ngOnInit() {
    this.jquery_code();
    this.sectionLayouts = [
      {
        id: 1,
        divId: 'home-section',
        title: 'Welcome',
        parallaxSrc: 'assets/img/home/home-background.jpg'
    }
  ];
  }

  jquery_code() {
    $(document).ready(function(){
      $('.parallax').parallax();
      $('.collapsible').collapsible();
      $('.materialboxed').materialbox();
      $('.slider').slider();
      $('.modal').modal();
      $('.scrollspy').scrollSpy();
      $('select').material_select();
      $('.carousel').carousel();
    });
  }

  constructor() { }

}
