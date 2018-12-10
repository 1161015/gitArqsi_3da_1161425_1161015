import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ],
      imports:[MatSelectModule, MatInputModule, FormsModule, RouterTestingModule,
         HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.itemCriar).toBe(false, 'off at first');
    component.criarItem();
    expect(component.itemCriar).toBe(true, 'on after click');
    component.editarItem();
    expect(component.itemCriar).toBe(false, 'off after second click');
  });

  it('#apagarProduto() should toggle #isOn', () => {
    expect(component.itemApagar).toBe(false, 'off at first');
    component.apagarItem();
    expect(component.itemApagar).toBe(true, 'on after click');
    component.editarItem();
    expect(component.itemApagar).toBe(false, 'off after second click');
  });

  it('#editarProduto() should toggle #isOn', () => {
    expect(component.itensListar).toBe(false, 'off at first');
    component.listarItens();
    expect(component.itensListar).toBe(true, 'on after click');
    component.apagarItem();
    expect(component.itensListar).toBe(false, 'off after second click');
  });
});
