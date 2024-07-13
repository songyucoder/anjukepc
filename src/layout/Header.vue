<template>
  <div class="flex-col mt-10" style="width: 1190px">
    <div
      class="flex space-between"
      style="justify-content: space-between; width: 100%"
    >
      <div>
        <!-- <a-breadcrumb v-if="breadcrumbList.length">
      <a-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="item.path">{{ item.meta.breadcrumb }}</a-breadcrumb-item>
    </a-breadcrumb> -->
      </div>
      <div class="text-[#333] text-15px bold font-semibold" @click="modal1Visible=true">登录/注册</div>
    </div>
    <div class="flex mt-4" style="justify-content: space-between; width: 100%">
      <div class="flex">
        <img src="@/assets/vue.svg" style="width: 40px; height: 40px" alt="" />
        <div><a class="logo-cate">演示demo</a></div>
        <div class="flex  ml-3 mt-4">
          <div class="text-14px ">郑州</div>
          <Icon>
            <svg
              t="1719818017706"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8961"
              width="12"
              height="12"
            >
              <path
                d="M325.456471 862.280661"
                fill="#666666"
                p-id="8962"
              ></path>
              <path
                d="M882.057788 862.280661"
                fill="#666666"
                p-id="8963"
              ></path>
              <path
                d="M236.028491 877.160382"
                fill="#666666"
                p-id="8964"
              ></path>
              <path
                d="M960.132455 877.160382"
                fill="#666666"
                p-id="8965"
              ></path>
              <path d="M63.683483 788.736998" fill="#666666" p-id="8966"></path>
              <path
                d="M958.469023 788.736998"
                fill="#666666"
                p-id="8967"
              ></path>
              <path d="M64.77753 858.792098" fill="#666666" p-id="8968"></path>
              <path
                d="M163.396533 289.168875c-40.577772 0-66.525252 54.184545-35.441258 85.258218L477.217578 723.704878c20.031716 20.031716 49.823841 20.031716 69.853837 0l349.274345-349.277785c30.304744-30.294423 6.677812-85.258218-34.928639-85.258218L163.396533 289.168875 163.396533 289.168875z"
                fill="#666666"
                p-id="8969"
              ></path>
              <path
                d="M959.523505 858.792098"
                fill="#666666"
                p-id="8970"
              ></path>
            </svg>
          </Icon>
        </div>
      </div>
      <div class="flex-col">
        <div class="flex">
          <div style="width: 500px">
          <a-input-search
            class="custom-search-input"
            size="middle"
            v-model="valueSearch"
            placeholder="请输入房源相关信息"
            enter-button="搜房源"
            @search="onSearch"
          >
            <template #prefix>
              <Icon>
                <svg
                  t="1719804141689"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5913"
                  width="14"
                  height="16"
                >
                  <path
                    d="M477.253818 901.748364c-241.128727 0-437.317818-196.165818-437.317818-437.294546s196.189091-437.294545 437.317818-437.294545 437.294545 196.165818 437.294546 437.317818-196.165818 437.271273-437.294546 437.271273z m0-828.043637c-215.458909 0-390.772364 175.290182-390.772363 390.772364 0 215.458909 175.290182 390.749091 390.772363 390.749091 215.458909 0 390.749091-175.290182 390.749091-390.749091 0-215.482182-175.290182-390.772364-390.749091-390.772364z"
                    p-id="5914"
                    fill="#999999"
                  ></path>
                  <path
                    d="M960.768 996.840727a23.202909 23.202909 0 0 1-16.453818-6.818909l-203.589818-203.589818a23.249455 23.249455 0 1 1 32.907636-32.907636l203.589818 203.589818a23.249455 23.249455 0 0 1-16.453818 39.726545z"
                    p-id="5915"
                    fill="#999999"
                  ></path>
                </svg>
              </Icon> </template
          ></a-input-search>
        </div>
        <div class="flex-row">
          <a-button
            class="ml-2 flex"
            style="
              border: 1px solid #1fb081;
              color: #1fb081;
              align-items: center;
              height: 35px;
              width: 110px;
              border-radius: 0;
            "
          >
            <template #icon>
              <img
                style="width: 16px; height: 16px"
                src="@/assets/home/map-filling.png"
                alt=""
              />
            </template>
            <div class="ml-1">地图找房</div>
          </a-button>
        </div>
        </div>
        <div class="text-[#998] text-12px mt-2 flex">
          <div class="mr-5" v-for="(item,index) in top_slect" :key="index">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
  <a-modal
      v-model:open="modal1Visible"
      title="短信验证码登录"
      style="top: 20px"
      centered
      :footer="null"
      width="400px"

    >
     <Login>
    </Login>
    </a-modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Icon from "@ant-design/icons-vue";
import { Login } from "@/components/Login";
const modal1Visible = ref(false)
const top_slect = ref([
{name: "金城时代广场", value: "0",is_select:true},
{name: "朗悦星悦荟", value: "1",is_select:false},
{name: "公园道", value: "1",is_select:false}])

const valueSearch = ref("");
const onSearch = (e: any) => {
  console.log(e);
};
</script>

<style lang="less" scoped>
.logo-cate {
  float: left;
  padding: 0 10px 0 0;
  color: #0b0f12;
  font-size: 24px;
  height: 25px;
  margin-left: 24px;
  line-height: 25px;
  margin-top: 10px;
  position: relative;
}
.logo-cate:after {
  content: "";
  position: absolute;
  left: -12px;
  height: 16px;
  bottom: 0;
  width: 1px;
  background: #0b0f12;
}
.custom-search-input :deep(.ant-input) {
  height: 26px; /* 自定义你的高度 */
}
.custom-search-input :deep(.ant-input-group-addon) {
  height: 26px; /* 与输入框高度一致 */
  background-color: #1fb081;
  button {
    background-color: transparent;
  }
}
</style>
