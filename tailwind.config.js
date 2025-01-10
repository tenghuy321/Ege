// tailwind.config.js
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html", // Ensure this points to your HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // Update this to include your JS/TS/JSX/TSX files
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Include flowbite-react files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Apply Flowbite plugin
  ],
};
