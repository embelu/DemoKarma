import { AlertmessageComponent } from './alertmessage.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';




describe('AlertmessageComponent', () => {
  let component: AlertmessageComponent;
  let fixture: ComponentFixture<AlertmessageComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertmessageComponent]
    }
    ).compileComponents();
  });




  beforeEach(() => {
    fixture = TestBed.createComponent(AlertmessageComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement
    fixture.detectChanges();
  });


  // Test pour vérifier si mon composant est créé
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Vérifier la valeur du message dans content
  it('should have message ', () => {
    expect(component.content).toEqual("it's OK");
  });

  // Vérifier par rapport à la valeur de severity
  it('should have gravity ', () => {
    expect(component.severity).toBeGreaterThan(122);
  });


  // Aller dans le dom
  it("shoud contain html data", () => {

    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('button à cliquer');
  });

  it("shoud click on button", () => {
    expect(component.hideContent).toBeTruthy();
    component.btnClick();
    expect(component.hideContent).toBeFalsy();
  });

  // FakeAsync est utilisé car appel de fonction asynchrone
  it("shoud click on button ASYNC", fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.btnClickAsync();
    tick(501);
    expect(component.hideContent).toBeFalsy();
  }));



});
