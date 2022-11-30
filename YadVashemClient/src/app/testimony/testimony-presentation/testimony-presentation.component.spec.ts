import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyPresentationComponent } from './testimony-presentation.component';

describe('TestimonyPresentationComponent', () => {
  let component: TestimonyPresentationComponent;
  let fixture: ComponentFixture<TestimonyPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
