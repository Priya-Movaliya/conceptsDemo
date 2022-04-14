import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewhome',
  templateUrl: './viewhome.component.html',
  styleUrls: ['./viewhome.component.scss']
})
export class ViewhomeComponent implements OnInit {
  type: string = "hii";

  constructor() { }

  ngOnInit(): void {
  }

}
