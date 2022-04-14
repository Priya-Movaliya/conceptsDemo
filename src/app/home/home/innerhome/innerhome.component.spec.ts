import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerhomeComponent } from './innerhome.component';

describe('InnerhomeComponent', () => {
  let component: InnerhomeComponent;
  let fixture: ComponentFixture<InnerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
