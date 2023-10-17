/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-25 19:45:55
 * @LastEditTime: 2023-10-17 14:16:13
 * @LastEditors: Do not edit
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), Unocss()],
  server: {
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      '/webManage/': {
        target: 'http://36.139.87.252:8085/', // 开发
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/webManage/, ""),
      }
    }
  }
});
