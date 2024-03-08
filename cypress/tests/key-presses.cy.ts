import { KeyPressesPage } from '../support/page-objects/key-presses.po';

describe('Key Presses Page Functionality', () => {
  beforeEach(() => {
    KeyPressesPage.visit();
  });

  it('Should display the correct character input for each keystroke', () => {
    // Use sentence with every letter in alphabet
    const INPUT_TEXT = 'The quick brown fox jumps over the lazy dog';

    // For each character in the sentence, enter the key and assert correct result notification
    INPUT_TEXT.split('').forEach((key) => {
      KeyPressesPage.enterKey(key);
      KeyPressesPage.assertNotification(key);
    });
  });
});
