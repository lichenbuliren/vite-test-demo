import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import visualizer from 'rollup-plugin-visualizer'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true
  }),
  // antd-mobile 按需引入
  vitePluginImp({
    libList: [
      {
        libName: 'antd-mobile',
        style: (name) => `antd-mobile/es/${name}/style`,
        libDirectory: 'es'
      }
    ]
  })],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // antd 定制主题样式
        modifyVars: {
          '@fill-body': '#fff'
        }
      }
    },
    modules: {
      localsConvention: 'camelCase'
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})
