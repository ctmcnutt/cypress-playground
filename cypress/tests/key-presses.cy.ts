import { KeyPressesPage } from '../support/page-objects/key-presses.po';

describe('Key Presses Page Functionality', () => {
  beforeEach(() => {
    KeyPressesPage.visit();
  });

  it('Should display the correct character input for each keystroke', () => {
    const INPUT_TEXT = 'The quick brown fox jumps over the lazy dog';

    INPUT_TEXT.split('').forEach((key) => {
      KeyPressesPage.enterKey(key);
      KeyPressesPage.assertNotification(key);
    });
  });
});
