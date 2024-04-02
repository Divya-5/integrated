import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run neodent:serve',
        production: 'nx run neodent:preview',
      },
      ciWebServerCommand: 'nx run neodent:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
