import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://agenda-contatos-react.vercel.app",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
});
