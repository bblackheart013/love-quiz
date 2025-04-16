// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      '9906-2603-7000-8100-c35-dc76-7a58-b354-92b9.ngrok-free.app' // ✅ No "https://"
    ]
  }
});
