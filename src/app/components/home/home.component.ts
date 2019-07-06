import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaceholdersService } from '../../services/placeholders.service';
import { PlaceholderItems } from '../../models/PlaceholderItems';
import { SectionLayoutsData, GlobalData, HomeData } from '../../data/sectionLayout.data';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeListItems: PlaceholderItems[];
  homeSectionLayout = SectionLayoutsData[0];
  globalData = GlobalData;
  homeData = HomeData;

  constructor(private placeholdersService: PlaceholdersService, private http: HttpClient) { }

  ngOnInit() {
    this.jquery_code();
    this.placeholdersService.getItems().subscribe(items => {
      this.homeListItems = items;
    });
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

}
