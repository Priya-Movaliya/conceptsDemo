import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  isAdmin: boolean = true;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.isAdmin);

  }

  ngOnInit(): void {
    console.log("contact module");

  }

}
