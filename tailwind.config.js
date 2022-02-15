module.exports = {
  mode: 'jit',
  //purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  //container: lg,

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
