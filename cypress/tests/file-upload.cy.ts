import { FileUploadPage } from '../support/page-objects/file-upload.po';

const TEST_FILE = 'TestUploadFile.txt'; // Context directory is cypress/data/files/

describe('File Upload Page Functionality', () => {
  beforeEach(() => {
    // Go to file upload page
    FileUploadPage.visit();
  });

  it('Should successfully upload file', () => {
    // Select file to put into dropdown
    FileUploadPage.chooseFile(TEST_FILE);

    // Click upload button
    FileUploadPage.clickUploadButton();

    // Assert success state
    FileUploadPage.getResultOutput()
      .should('be.visible')
      .and('contain.text', TEST_FILE);
  });

  it('Should error when uploading with no file input', () => {
    // Click upload button, without entering file
    FileUploadPage.clickUploadButton();

    // Assert error state
    FileUploadPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', FileUploadPage.ERROR_TEXT);
  });
});
