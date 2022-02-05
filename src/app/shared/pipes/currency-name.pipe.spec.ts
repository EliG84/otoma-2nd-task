import { SessionStorageService } from 'src/app/core/session-storage.service';
import { CurrencyNamePipe } from './currency-name.pipe';

describe('CurrencyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyNamePipe(new SessionStorageService());
    expect(pipe).toBeTruthy();
  });
});
