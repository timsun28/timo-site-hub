module.exports = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: ['app/**/*.{ts,tsx}', 'styles/**/*.{ts,tsx}'],
    },
    autoprefixer: {},
  },
}
