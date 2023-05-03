import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Pokedex logo', () => {
    const logo = fixture.nativeElement.querySelector('.navbar-brand img');
    expect(logo.src).toContain('pokeball.png');
    expect(logo.alt).toBe('Pokedex');
  });

  it('should render the Pokedex name', () => {
    fixture.detectChanges();
    const name = fixture.nativeElement.querySelector('.navbar-brand');
    expect(name.textContent).toContain('Pokedex');
  });

});
