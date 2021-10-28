import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostComponent } from './lista-post.component';

describe('ListaPostComponent', () => {
  let component: ListaPostComponent;
  let fixture: ComponentFixture<ListaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe empezar por la primera página', () => {
    component.cargarPosts();
    expect(component.page).toBe(1);
  });

  it('Debe tener más de 2 posts', () => {
    component.cargarPosts();
    expect(component.posts).toBeGreaterThan(2);
  });
});
