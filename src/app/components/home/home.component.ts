import { Component, OnInit, Input } from '@angular/core';
import { SectionLayoutsData, GlobalData } from '../../data/sectionLayout.data';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeSectionLayout = SectionLayoutsData[0];
  globalData = GlobalData;

  ngOnInit() {
    this.jquery_code();
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
