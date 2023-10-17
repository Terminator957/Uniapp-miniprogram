/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-10-17 10:40:48
 * @LastEditTime: 2023-10-17 11:04:13
 * @LastEditors: Do not edit
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // 数据持久化

export default pinia;

export * from './modules/user'