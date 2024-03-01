export class FileUploadPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'File Upload',
    pageUrl: 'upload'
  };

  // Page Data
  static ERROR_TEXT = 'Internal Server Error';

  // Page Selectors
  private static selectors = {
    fileInput: '#file-upload',
    uploadButton: '#file-submit',
    resultOutput: '#uploaded-files',
    errorMessage: 'h1'
  };

  // Page Functions
  static visit() {
    return cy.visit(this.details.pageUrl);
  }

  static chooseFile(fileName: string) {
    return cy
      .get(this.selectors.fileInput)
      .selectFile({ contents: `cypress/data/files/${fileName}` });
  }

  static clickUploadButton() {
    return cy.get(this.selectors.uploadButton).click();
  }

  static getResultOutput() {
    return cy.get(this.selectors.resultOutput);
  }

  static getErrorMessage() {
    return cy.get(this.selectors.errorMessage);
  }
}
