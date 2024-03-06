import { defineConfig } from 'cypress';
import * as fs from 'fs';

export default defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    specPattern: 'cypress/tests/*.cy.ts',
    setupNodeEvents(on, config) {
      on('task', {
        checkFileExists(filePath: string) {
          return fs.existsSync(filePath);
        },
        deleteDownloads() {
          try {
            // Try: Remove the downloads folder
            fs.rmSync('./cypress/downloads/', { recursive: true });
            return true;
          } catch {
            // Catch: Downloads folder doesn't exist. Return and keep going
            return true;
          }
        }
      });
    }
  }
});
