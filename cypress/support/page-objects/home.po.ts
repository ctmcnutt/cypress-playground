import { ABTestPage } from './ab-testing.po';
import { AddRemoveElemPage } from './add-remove-elements.po';
import { BrokenImagesPage } from './broken-images.po';
import { FileUploadPage } from './file-upload.po';
import { FormAuthPage } from './form-auth.po';

export class HomePage {
  static visit() {
    return cy.visit('/');
  }

  static pageDetailsList: PageDetails[] = [
    ABTestPage.details,
    AddRemoveElemPage.details,
    BrokenImagesPage.details,
    FileUploadPage.details,
    FormAuthPage.details
  ];
}
