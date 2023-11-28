import { defineConfig } from "orval";

export default defineConfig({
  "larpex-api": {
    input:
      "https://larpex-api-gateway.azurewebsites.net/swagger/v1/swagger.json",
    output: {
      target: "./api/larpex-api.ts",
      override: {
        mutator: {
          path: "./api/axios-instance.ts",
          name: "customInstance",
        },
      },
    },
  },
});
