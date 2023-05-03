import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the contact information', () => {
    const contactInfo = fixture.nativeElement.querySelector('.col-md-4:first-of-type');
    expect(contactInfo.querySelector('h3').textContent).toContain('Contato');
    expect(contactInfo.querySelectorAll('ul li').length).toBe(2);
  });

  it('should render the social media links', () => {
    const socialMedia = fixture.nativeElement.querySelector('.col-md-4:nth-of-type(2)');
    expect(socialMedia.querySelector('h3').textContent).toContain('Redes Sociais');
    expect(socialMedia.querySelectorAll('ul li').length).toBe(3);
  });

  it('should render the about section', () => {
    const about = fixture.nativeElement.querySelector('.col-md-4:last-of-type');
    expect(about.querySelector('h3').textContent).toContain('Sobre');
    expect(about.querySelector('p').textContent).toContain('A Pokédex é uma enciclopédia virtual');
  });
});
