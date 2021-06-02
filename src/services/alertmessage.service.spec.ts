import { fakeAsync, TestBed } from '@angular/core/testing';
import { AlertmessageService } from './alertmessage.service';

describe('AlertmessageService', () => {
  let myService: AlertmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    myService = TestBed.inject(AlertmessageService);
  });

  // VERIFICATION SI COMPOSANT PRESENT
  it('should be created', () => {
    expect(myService).toBeTruthy();
  });

  // TEST RECUPERATION DU MESSAGE VIA FONCTION
  it('should test getContent', () => {
    expect(myService.getMessage()).toBe("it's OK");
  });

  // TEST RECUPERATION DU MESSAGE VIA FONCTION OBSERVABLE
  it('should be test observable', fakeAsync(() => {
    let dataReturn;
    myService.getMessageFromObservable().subscribe(_serv => dataReturn = _serv);
    expect(dataReturn).toBe("it's Ok from Observable");
  }));


});
