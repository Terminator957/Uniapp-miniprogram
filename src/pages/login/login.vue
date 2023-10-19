<!--
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-10-17 15:05:08
 * @LastEditTime: 2023-10-19 17:18:45
 * @LastEditors: Do not edit
-->
<template>
  <view class="login">
    <uni-section :title="name" type="line">
      <view class="example m-5">
        <!-- 基础表单校验 -->
        <uni-forms ref="valiForm" :rules="(rules as UniHelper.UniFormsRules)" :modelValue="valiFormData"
          validateTrigger="blur">
          <uni-forms-item label="用户名" required name="name">
            <uni-easyinput v-model="valiFormData.name" placeholder="请输入用户名" />
          </uni-forms-item>
          <uni-forms-item label="密码" required name="password">
            <uni-easyinput v-model="valiFormData.password" placeholder="请输入密码" />
          </uni-forms-item>
        </uni-forms>
        <button type="primary" @tap="submit">提交</button>
      </view>
    </uni-section>
  </view>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
import type { Ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
export default {
  setup() {
    const valiForm: Ref<UniHelper.UniFormsProps | null> = ref(null);
    const data = reactive({
      name: '用户登录',
      // 校验表单数据
      valiFormData: {
        name: '',
        password: ''
      },
      // 校验规则
      rules: {
        name: {
          rules: [{
            required: true,
            errorMessage: '用户名不能为空'
          }]
        },
        password: {
          rules: [{
            required: true,
            errorMessage: '密码不能为空'
          }, {
            format: 'number',
            errorMessage: '只能输入数字'
          }]
        }
      },
    })

    const submit = () => {
      (valiForm.value as any).validate().then((res: any) => {
        console.log(res);
        uni.switchTab({
          url: '/pages/index/index'
        })
      }).catch((err: any) => {
        console.log(err);
      })
    }

    onLoad(() => {
      console.log('页面加载完成');
    })

    onShow(() => {
      console.log('页面显示');
    })

    return {
      ...toRefs(data),
      valiForm,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>
.example {
  padding: 15px;
  background-color: #fff;
}

.segmented-control {
  margin-bottom: 15px;
}

.button-group {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}

.form-item {
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  height: 35px;
  margin-left: 10px;
}
</style>