import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
      $('.carousel').carousel({
        fullWidth: true,
        indicators: true
      });
    });
  }

  constructor() { }

}
