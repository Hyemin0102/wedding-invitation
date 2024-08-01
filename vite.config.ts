import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 가능
    port: 5173 // 포트 번호 (필요에 따라 다른 포트 번호를 사용할 수 있습니다)
  }
});
