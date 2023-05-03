import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';
import { Router } from '@angular/router';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.nome = 'Pikachu';
    component.imagem = 'https://example.com/pikachu.jpg';
    component.tipo = 'Elétrico';
    component.peso = 6.0;
    component.id = 25;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name, image, type and weight', () => {
    const nomeEl = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(nomeEl.textContent).toContain('Pikachu');

    const imgEl = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgEl.src).toContain('https://example.com/pikachu.jpg');

    const tipoEl = fixture.debugElement.query(By.css('.card-text:nth-child(2)')).nativeElement;
    expect(tipoEl.textContent).toContain('Elétrico');

    const pesoEl = fixture.debugElement.query(By.css('.card-text:nth-child(3)')).nativeElement;
    expect(pesoEl.textContent).toContain('Peso: 6 kg');
  });

  it('should navigate to pokemon details on button click', () => {
    const router = TestBed.inject(Router);
    const spy = jest.spyOn(router, 'navigate');
    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonEl.click();
    expect(spy).toHaveBeenCalledWith(['/pokemon', 25]);
  });
});
