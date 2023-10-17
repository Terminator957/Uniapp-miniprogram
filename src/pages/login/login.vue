<!--
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-10-17 15:05:08
 * @LastEditTime: 2023-10-17 16:49:06
 * @LastEditors: Do not edit
-->
<template>
  <view class="login">
    {{ name }}
    <uni-section title="name" type="line">
      <view class="example">
        <!-- 基础表单校验 -->
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
          <uni-forms-item label="姓名" required name="name">
            <uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item label="年龄" required name="age">
            <uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
          </uni-forms-item>
          <uni-forms-item label="自我介绍" name="introduction">
            <uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
          </uni-forms-item>
        </uni-forms>
        <button type="primary" @click="submit('valiForm')">提交</button>
      </view>
    </uni-section>
  </view>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const valiForm = ref(null)
    const data = reactive({
      name: '登录',
      // 校验表单数据
      valiFormData: {
        name: '',
        age: '',
        introduction: '',
      },
      // 校验规则
      rules: {
        name: {
          rules: [{
            required: true,
            errorMessage: '姓名不能为空'
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: '年龄不能为空'
          }, {
            format: 'number',
            errorMessage: '年龄只能输入数字'
          }]
        }
      },
    })


    const submit = () => {
      console.log(valiForm.value);
      valiForm.value.validate((valid: boolean) => {
        if (valid) {
          console.log('校验成功');
        } else {
          console.log('校验失败');
        }
      })

    }

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