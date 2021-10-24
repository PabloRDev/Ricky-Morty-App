import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDetailContentComponent } from './characters-detail-content.component';

describe('CharactersDetailContentComponent', () => {
  let component: CharactersDetailContentComponent;
  let fixture: ComponentFixture<CharactersDetailContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersDetailContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
