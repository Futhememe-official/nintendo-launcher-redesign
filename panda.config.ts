import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/renderer/src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          grey: {
            100: { value: '#FEFEFE' },
            200: { value: '#505050' },
            300: { value: '#2D2D2D' }
          },
          blue: {
            100: { value: '#91F4F9' },
            200: { value: '#15B9F6' },
            300: { value: '#1F9DFF' }
          },
          yellow: {
            100: { value: '#FEB609' }
          },
          red: {
            100: { value: '#ED5C3F' },
            200: { value: '#E70012' }
          },
          green: {
            100: { value: '#00FFCA' },
            200: { value: '#9AE800' },
            300: { value: '#58FF08' }
          }
        }
      },
      semanticTokens: {
        colors: {
          background: { value: '{colors.grey.300}' },
          foreground: { value: '{colors.grey.200}' },
          hud: { value: '{colors.grey.100}' },
          battery: { value: '{colors.green.300}' },
          nintendo: { value: '{colors.red.200}' },
          notification: { value: '{colors.green.100}' }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
