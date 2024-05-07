import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteditComponent } from './productedit.component';

describe('EditComponent', () => {
  let component: PosteditComponent;
  let fixture: ComponentFixture<PosteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosteditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
