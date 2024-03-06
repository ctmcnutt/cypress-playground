import { FileDownloadPage } from '../support/page-objects/file-download.po';

const DOWNLOAD_FILEPATH = Cypress.config().downloadsFolder;

describe('File Download Page Functionality', () => {
  beforeEach(() => {
    cy.task('deleteDownloads');
    FileDownloadPage.visit();
  });

  it('Should download first available file in list', () => {
    FileDownloadPage.getAvailableFiles()
      .first()
      .click()
      .invoke('text')
      .then((fileName) => {
        cy.assertFileDownload(fileName);
      });
  });

  it('Should download all available files successfully', () => {
    FileDownloadPage.getAvailableFiles().each((file) => {
      FileDownloadPage.downloadFile(file.text());
      cy.assertFileDownload(file.text());
    });
  });
});
