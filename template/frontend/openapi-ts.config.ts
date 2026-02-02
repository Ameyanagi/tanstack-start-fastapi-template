import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: '../backend/openapi.json',
  output: {
    path: 'src/client',
  },
  plugins: [
    '@hey-api/typescript',
    {
      name: '@hey-api/sdk',
      validator: true,
    },
    {
      name: 'zod',
      definitions: true,
      responses: true,
      requests: true,
    },
    {
      name: '@tanstack/react-query',
      queryOptions: true,
      mutationOptions: true,
    },
  ],
})
