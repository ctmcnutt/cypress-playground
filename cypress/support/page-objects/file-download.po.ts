export class FileDownloadPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'File Download',
    pageUrl: 'download'
  };

  // Page Selectors
  private static selectors = {
    downloadLink: 'a[href*="download"]'
  };

  // Page Functions
  static visit() {
    return cy.visit(this.details.pageUrl);
  }

  static downloadFile(fileName: string) {
    cy.get(this.selectors.downloadLink)
      .contains(new RegExp(`^${this.formatRegex(fileName)}$`)) // Regular expression allows for exact matching of file name
      .click();
  }

  static getAvailableFiles() {
    return cy.get(this.selectors.downloadLink);
  }

  private static formatRegex(text: string) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Format special characters for use in regular expressions
  }
}
