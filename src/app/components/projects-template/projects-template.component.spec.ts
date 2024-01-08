import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNgTemplateComponent } from './projects-template.component';

describe('ProjectsNgTemplateComponent', () => {
  let component: ProjectsNgTemplateComponent;
  let fixture: ComponentFixture<ProjectsNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsNgTemplateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectsNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
