import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 외부 IP 접속 허용
    port: 3000, // 포트를 지정할 수 있습니다 (기본값: 3000)
  },
  assetsInclude: ['**/*.MOV'], // .MOV 파일을 자산으로 포함

})