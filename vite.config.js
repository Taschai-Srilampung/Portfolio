import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/',
  
  plugins: [  
    react(),
    tailwindcss(),
    

  ],
  server: {
    host: '0.0.0.0',   // <<< สำคัญ
    port: 5174,        // หรือพอร์ตอื่นที่คุณต้องการ
    allowedHosts: ['myryolife.tech', 'www.myryolife.tech'],
  }

})
