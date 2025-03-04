import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCreatorComponent } from './s-creator.component';

describe('SCreatorComponent', () => {
  let component: SCreatorComponent;
  let fixture: ComponentFixture<SCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
