import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionsComponent } from './projects-sections.component';

describe('ProjectsSectionsComponent', () => {
  let component: ProjectsSectionsComponent;
  let fixture: ComponentFixture<ProjectsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
