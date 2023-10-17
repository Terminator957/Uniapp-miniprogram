/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-25 19:45:55
 * @LastEditTime: 2023-10-17 13:52:12
 * @LastEditors: Do not edit
 */
import { createSSRApp } from "vue";
import "virtual:uno.css";
import pinia from "./store";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  return {
    app,
  };
}
