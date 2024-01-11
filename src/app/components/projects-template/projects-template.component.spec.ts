import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTemplateComponent } from './projects-template.component';

describe('ProjectsTemplateComponent', () => {
  let component: ProjectsTemplateComponent;
  let fixture: ComponentFixture<ProjectsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTemplateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
