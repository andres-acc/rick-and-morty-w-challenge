import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterResultBoxComponent } from './character-result-box.component';

describe('CharacterResultBoxComponent', () => {
  let component: CharacterResultBoxComponent;
  let fixture: ComponentFixture<CharacterResultBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterResultBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterResultBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
