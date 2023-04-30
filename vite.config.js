import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// const dotenv = require('dotenv');
// const env = dotenv.config().parsed;

// module.exports = {
//   env
// }