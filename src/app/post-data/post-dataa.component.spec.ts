import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDataaComponent } from './post-dataa.component';

describe('PostDataaComponent', () => {
  let component: PostDataaComponent;
  let fixture: ComponentFixture<PostDataaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDataaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
