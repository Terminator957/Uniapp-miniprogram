/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-25 19:45:55
 * @LastEditTime: 2023-10-17 11:10:19
 * @LastEditors: Do not edit
 */
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), Unocss()],
});
