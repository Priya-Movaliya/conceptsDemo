import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthserviceService } from 'src/app/authservice.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactComponent } from 'src/app/contact/contact/contact.component';
import { ViewhomeComponent } from '../viewhome/viewhome.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  detail: FormGroup;

  constructor(private auth: AuthserviceService, private fb: FormBuilder, private router: Router) {
    this.detail = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    console.log("home module");

  }
  @ViewChild('title') title!: ElementRef;

  @ViewChild(ViewhomeComponent)
  name!: ViewhomeComponent;

  // @HostListener('click') myClick(){
  //   alert("hello");
  // }

  ngAfterViewInit(): void {

    this.title.nativeElement.style.backgroundColor = "pink";
    this.title.nativeElement.classList = "pink";
    console.log(this.title.nativeElement.innerHTML);

  }
  onClick() {
    this.name.type = "hello";
  }
  submitLoginData() {
    console.log(this.detail.value);
    this.auth.user.next(this.detail.value);
    this.router.navigate(['/admin/admincomponent']);
  }

}
