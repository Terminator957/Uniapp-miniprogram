/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-10-17 10:42:44
 * @LastEditTime: 2023-10-17 11:05:52
 * @LastEditors: Do not edit
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
    'pinia-user',
    () => {
        const age = ref(0)

        const setNumber = (val: number) => {
            age.value = val;
        };

        const resetNumber = () => {
            console.log("12123");
            age.value = 0;
        };

        return {
            age,
            setNumber,
            resetNumber
        }
    },
    {
        persist: {
            storage: {
                getItem(key) {
                    return uni.getStorageSync(key);
                },
                setItem(key, value) {
                    uni.setStorageSync(key, value);
                },
            },
        },
    }
)