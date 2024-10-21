import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ['src/**/**/*.spec.js'],
    environment: 'jsdom',
    exclude: ['node_modules'],
    setupFiles: 'src/test-utils/setup.js',
    deps: { inline: ['vuetify'] },
  },
  resolve: {
    alias: {
      '\\.css$': 'test-utils/cssMock.js',
    },
  },
});

global.CSS = { supports: () => false } as unknown as typeof CSS;