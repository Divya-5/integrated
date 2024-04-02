import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run clearcorrect:serve',
        production: 'nx run clearcorrect:preview',
      },
      ciWebServerCommand: 'nx run clearcorrect:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
