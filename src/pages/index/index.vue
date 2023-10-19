<!--
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-25 19:45:55
 * @LastEditTime: 2023-10-19 16:06:49
 * @LastEditors: Do not edit
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view>
      <text>{{ title }}</text>
    </view>
    <view class="m-5">
      <uni-number-box v-model="userStore.age" @change="changeValue" />
    </view>
    <button m-5 @click="userStore.resetNumber" size="mini" plain>重置数字</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/store";
import { get } from "@/utils/http"
const userStore = useUserStore();
const title = ref("Hello uniapp");
const changeValue = (value: number) => {
  console.log("返回数值：", value);
  userStore.setNumber(value);
};

const getData = async () => {
  const res = await get("/api/getData");
  console.log(res);
};
// getData();
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
