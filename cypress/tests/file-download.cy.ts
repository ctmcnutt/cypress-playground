import { FileDownloadPage } from '../support/page-objects/file-download.po';

describe('File Download Page Functionality', () => {
  beforeEach(() => {
    // Delete downloads folder and navigate to download page
    cy.task('deleteDownloads');
    FileDownloadPage.visit();
  });

  it('Should download first available file in list', () => {
    // Click the first download link on the page
    FileDownloadPage.getAvailableFiles()
      .first()
      .click()
      // Grab file text from the link and assert the file exists in download folder
      .invoke('text')
      .then((fileName) => {
        cy.assertFileDownload(fileName);
      });
  });

  // This test successfully runs, but is more of a demonstration of what is possible.
  // The dataset on this page is inconsistent, and may occasionally include large files.
  it.skip('Should download all available files successfully', () => {
    // Get all download links on page
    FileDownloadPage.getAvailableFiles().each((file) => {
      // For each, download file and assert successful download
      FileDownloadPage.downloadFile(file.text());
      cy.assertFileDownload(file.text());
    });
  });
});
