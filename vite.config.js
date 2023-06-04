import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { config as dotenvConfig } from 'dotenv';

export default defineConfig(({ mode }) => {
  if (mode !== 'production') {
    dotenvConfig();
  }

  return {
    plugins: [react()],
    define: {
      'process.env': process.env,
    },
  };
});