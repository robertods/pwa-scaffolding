import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['offline.html'],
      manifest: {
        name: 'PWA Example',
        short_name: 'PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#007bff',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /offline\.html$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'offline-html',
            }
          }
        ],
        navigateFallback: 'offline.html',
        cleanupOutdatedCaches: true,
      }
    })
  ]
});
