import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProduitComponent } from './add-edit-produit.component';

describe('AddEditProduitComponent', () => {
  let component: AddEditProduitComponent;
  let fixture: ComponentFixture<AddEditProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProduitComponent]
    });
    fixture = TestBed.createComponent(AddEditProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
