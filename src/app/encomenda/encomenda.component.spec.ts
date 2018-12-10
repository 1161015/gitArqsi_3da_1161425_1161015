import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaComponent } from './encomenda.component';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EncomendaComponent', () => {
  let component: EncomendaComponent;
  let fixture: ComponentFixture<EncomendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaComponent ],
      imports:[MatSelectModule, MatInputModule, FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
