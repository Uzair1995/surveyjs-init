import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointJsPocComponent } from './joint-js-poc.component';

describe('JointJsPocComponent', () => {
  let component: JointJsPocComponent;
  let fixture: ComponentFixture<JointJsPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JointJsPocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JointJsPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
