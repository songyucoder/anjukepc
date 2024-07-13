<template>
  <div class="flex flex-col h-[320px] bg-[#fff] mt-5">
    <a-form
      class="mt-6"
      style="width: 100%"
      :model="formState"
      name="basic"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="手机号"
        name="username"
        :rules="[{ required: true, message: '请输入手机号!' }]"
      >
        <a-input style="height: 34px" v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        class="pt-2"
        label="验证码"
        name="code"
        :rules="[{ required: true, message: '请输入验证码!' }]"
      >
        <div class="flex">
          <a-input v-model:value="formState.code" />
          <a-button
            style="
              height: 34px;
              font-size: 12px;
              background-color: #1fb081;
              color: #fff;
            "
            type="primary"
            class="ml-1"
            :disabled="isCounting"
            @click="startCountdown"
            >{{ countdownText }}</a-button
          >
        </div>
      </a-form-item>
    </a-form>
    <a-button
      style="
        height: 48px;
        margin-right: 20px;
        margin-left: 20px;
        font-size: 14px;
        background-color: #1fb081;
      "
      size="large"
      type="primary"
      class="mt-8"
      :disabled="disabled"
      @click="onclickLoginEvent"
      >登录</a-button
    >
    <div class="login_protocol">
      登录即代表同意<a
        class="link-btn"
        href="https://www.lianjia.com/privacy"
        target="_blank"
        >A铺隐私政策</a
      >及<a
        class="link-btn"
        href="https://www.lianjia.com/zhuanti/protocol"
        target="_blank"
        >A铺用户使用协议</a
      >
      <div class="mt-2">未注册过的手机号，验证通过后自动注册A账号</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed, ref } from "vue";
import { message } from "ant-design-vue";
import { getCodeApi,loginApi } from "@/api/login";
const countdown = ref(60);
const isCounting = ref(false);
const timerId = ref<NodeJS.Timeout | null>(null);

interface FormState {
  username: string;
  code: string;
}

const formState = reactive<FormState>({
  username: "",
  code: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const disabled = computed(() => {
  return !(formState.username && formState.code);
});
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const countdownText = computed(() => {
  return isCounting.value ? `${countdown.value}s 后重新发送` : "发送验证码";
});

async function startCountdown() {
  if (formState.username.length == 0) {
    message.error("请输入手机号");
    return;
  }

  if (isCounting.value) return;
  const res = await getCodeApi({
    mobile: formState.username,
  });
  console.log(res)
  if (res.code == 0) {
    isCounting.value = true;
    countdown.value = 60;
    timerId.value = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        clearInterval(timerId.value as NodeJS.Timeout);
        isCounting.value = false;
        countdown.value = 60;
      }
    }, 1000);
  }
}
const onclickLoginEvent = async()=>{
      const res = await loginApi({
        mobile: formState.username,
        code: formState.code,
      });
      if(res.code == 0){
        
      }

}
</script>
<style scoped lang="less">
.login_protocol {
  position: absolute;
  bottom: 0;
  padding: 20px 20px;
  border-top: 0.5px solid #e1e1e3;
  line-height: 13px;
}
.link-btn {
  cursor: pointer;
  color: noset;
  text-decoration: underline;
  font-weight: 600;
}
</style>
