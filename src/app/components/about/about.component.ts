import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaceholdersService } from '../../services/placeholders.service';
import { UserProfiles } from '../../models/userProfiles';
import { SectionLayoutsData, GlobalData, AboutData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userProfiles: UserProfiles[];
  aboutSectionLayout = SectionLayoutsData[1];
  globalData = GlobalData;
  aboutData = AboutData;

  constructor(private placeholdersService: PlaceholdersService, private http: HttpClient) { }

  ngOnInit() {
    this.placeholdersService.getUsers().subscribe(users => {
      this.userProfiles = users;
    });
  }

}
