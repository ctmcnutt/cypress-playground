import { defineConfig } from 'cypress';
import * as fs from 'fs';

export default defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    specPattern: 'cypress/tests/*.cy.ts',
    setupNodeEvents(on, config) {
      on('task', {
        checkFileExists(filePath: string) {
          let something = fs.existsSync(filePath);
          console.log(something);
          return something;
        },
        deleteDownloads() {
          try {
            fs.rmSync('./cypress/downloads/', { recursive: true });
            return true;
          } catch {
            return true;
          }
        }
      });
    }
  }
});
