import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@sensoro/ui')],
} satisfies Config
