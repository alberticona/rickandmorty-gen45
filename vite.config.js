import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// copiamos y pegamos de la pag de tailwind
import tailwindcss from '@tailwindcss/vite'

// copiamos y pegamos de la pag de tailwind tailwindcss(), esto pa usar todos los estilos predeterminados de tailwind
// y en archivo index.css pones @import 'tailwindcss';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
