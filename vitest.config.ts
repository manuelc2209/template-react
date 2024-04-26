import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        browser: {
            enabled: true,
            name: 'chromium',
            provider: 'playwright',
            headless: true
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    // TODO: this is to make ecosystem work, remove when fixed
    server: {
        fs: {
            strict: false
        }
    }
});
