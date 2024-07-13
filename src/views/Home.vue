<template>
  <div class="test-wrap">
    <div class="nav flex">
      <div
        :class="item.is_select ? 'select_nav' : ''"
        class="w-30 text-15px flex items-center justify-center hover-effect"
        @click="clickSelectEvent(item)"
        style="height: 100%"
        v-for="(item, index) in top_select"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- 条件筛选 -->
    <div class="flex-col mt-6">
      <div class="flex items-center">
        <div class="text-14px text-[#999]">位置:</div>
        <div class="text-14px text-[#23c993] ml-5">区域</div>
        <div class="ml-5 text-14px">地图找房</div>
      </div>
      <div class="flex-col items-center">
        <div v-for="(item, index) in select_item_list" :key="index">
          <div class="flex items-center mt-4" v-if="item.name === '区域'">
            <div class="text-14px text-[#fff]">位置:</div>
            <!-- <div class="text-14px text-[#23c993] ml-5 self-start">不限</div> -->
            <div class="flex text-14px flex-wrap flex-start flex-1">
              <div
                class="pl-5 pb-1"
                :class="item.value.name == itemX.name ? 'text-[#23c993]' : ''"
                v-for="(itemX, indexX) in item.itemList"
                :key="indexX"
                @click="item.value = itemX"
              >
                {{ itemX.name }}
              </div>
            </div>
          </div>
          <div class="flex items-center mt-4 items-center" v-else>
            <div class="text-14px text-[#999]">{{ item.name }}:</div>
            <!-- <div class="text-14px text-[#23c993] ml-5 ">不限</div> -->
            <div class="flex text-14px flex-wrap flex-1">
              <div
                :class="item.value.name == itemX.name ? 'text-[#23c993]' : ''"
                class="pl-5"
                v-for="(itemX, indexX) in item.itemList"
                :key="indexX"
                @click="item.value = itemX"
              >
                {{ itemX.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-divider />
    <!-- 已筛选的条件 -->
    <div class="flex items-center">
      <div class="text-12px text-[#999]">已筛选的条件:</div>
      <div class="flex flex-wrap ml-2">
        <div v-for="(item, index) in selectAddtionalEvent()" :key="index">
          <a-tag
            class="flex items-center"
            style="background-color: transparent"
            closable
            @close="deleteTagEvent(item)"
            >{{ item.value.name }}</a-tag
          >
        </div>
      </div>
    </div>
    <!-- 列表数据展示 -->
    <div class="flex">
      <div class="flex-1">
        <div class="flex flex-wrap mt-4">
          <div
            class="faster-filter-box active"
            v-for="(item, index) in character_list"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div class="mt-0 flex-col">
          <div  class="mr-40px wshop pt-30px" v-for="(item, index) in 10" :key="index" @click="clickDetailEvent(item)">
            <WHouse :options="item" />
          </div>
          <div class="flex items-center  mt-4">
            <a-pagination v-model:current="current" @change="changeSizeEvent" 
            :total="500" :pageSizeOptions="['10','20','50','100']">
              <template #itemRender="{ type, originalElement }">
                <a v-if="type === 'prev'">上一页</a>
                <a v-else-if="type === 'next'">下一页</a>
                <component :is="originalElement" v-else></component>
              </template>
            </a-pagination>
          </div>
        </div>
      </div>
      <div class="flex-col">
        <div>猜你喜欢</div>
        <div class="flex-col flex-wrap w-53">
          <div
            class="flex-1 border mt-4"
            v-for="(item, index) in 10"
            @click="clickDetailEvent(item)"
            :key="index"
          >
           <HHouse  :options="item" />
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { WHouse } from "@/components/WHouse"
import { HHouse } from "@/components/HHouse"
import { useRouter } from 'vue-router'
const router = useRouter()
const top_select = ref([
  { name: "全部", value: "0", is_select: true },
  { name: "店铺转让", value: "1", is_select: false },
  { name: "商铺出租", value: "1", is_select: false },
  { name: "商场招租", value: "1", is_select: false }
]);
const current = ref(2);
const character_list = [
  "纯写字楼",
  "可注册",
  "联合办公",
  "视频看房",
  "一对一服务",
  "大平台",
]

const select_item_list = ref([
  {
    name: "区域",
    value: {
      name: "不限",
      value: "",
    },
    keyStr: "city",
    is_select: false,
    itemList: [
      {
        name: "不限",
        value: "",
      },
      {
        name: "中原区",
        value: "",
      },
    ],
  },
  {
    name: "行业",
    value: {
      name: "不限",
      value: "",
    },
    keyStr: "business_line",
    is_select: false,
    itemList: [
      {
        name: "不限",
        value: "",
      },
    ],
  },
  {
    name: "筛选",
    value: {
      name: "不限",
      value: "",
    },
    keyStr: "screen",
    is_select: false,
    itemList: [
      {
        name: "不限",
        value: "",
      },
      {
        name: "面积升序",
        value: "1",
      },
      {
        name: "面积降序",
        value: "2",
      },
      {
        name: "租金升序",
        value: "3",
      },
      {
        name: "租金降序",
        value: "4",
      },
    ],
  },
  {
    name: "类型",
    value: {
      name: "不限",
      value: "",
    },
    keyStr: "type",
    itemList: [
      {
        name: "不限",
        value: "",
      },
      {
        name: "直租",
        value: "1",
      },
      {
        name: "转让",
        value: "2",
      },
      {
        name: "商场招租",
        value: "3",
      },
    ],
  },
  {
    name: "面积",
    value: {
      name: "不限",
      value: "",
    },
    is_select: false,
    keyStr: "area",
    itemList: [
      {
        name: "不限",
        value: "",
      },
      {
        name: "0-50㎡",
        value: "1",
      },
      {
        name: "50-100㎡",
        value: "2",
      },
      {
        name: "100-200㎡",
        value: "3",
      },
      {
        name: "200-500㎡",
        value: "4",
      },
      {
        name: "500㎡以上",
        value: "5",
      },
    ],
  },
  {
    name: "价格",
    value: {
      name: "不限",
      value: "",
    },
    is_select: false,
    keyStr: "rent",
    itemList: [
      {
        name: "不限",
        value: "0",
      },
      {
        name: "5000元以下",
        value: "1",
      },
      {
        name: "5000-10000元",
        value: "2",
      },
      {
        name: "1万-2万元",
        value: "3",
      },
      {
        name: "2万-5万",
        value: "4",
      },
      {
        name: "5005万元以上",
        value: "5",
      },
    ],
  },
  {
    name: "出租方式",
    value: {
      name: "不限",
      value: "",
    },
    is_select: false,
    keyStr: "rent_type",
    itemList: [
      {
        name: "不限",
        value: "",
      },
      {
        name: "月租",
        value: "1",
      },
      {
        name: "日租",
        value: "2",
      },
    ],
  },
  {
    name: "来源",
    value: {
      name: "不限",
      value: "",
    },
    is_select: false,
    keyStr: "user_source",
    itemList: [
      {
        name: "不限",
        value: "0",
      },
      {
        name: "经纪人",
        value: "1",
      },
      {
        name: "个人",
        value: "2",
      },
    ],
  },
]);
const clickSelectEvent = (item: any) => {
  for (const obj of top_select.value) {
    obj.is_select = false;
    if (item.name == obj.name) {
      obj.is_select = true;
    }
  }
}
const select_addtional_list = ref([]) as any;
const selectAddtionalEvent = () => {
  select_addtional_list.value = [];
  for (const obj of select_item_list.value) {
    if (obj.value.name != "不限") {
      select_addtional_list.value.push(obj);
    }
  }
  return select_addtional_list.value;
}
// 对已经选择的进行删除
const deleteTagEvent = (item: any) => {
  console.log(item);
  for (const obj of select_item_list.value) {
    if (obj.keyStr == item.keyStr) {
      obj.value = {
        name: "不限",
        value: "",
      };
    }
  }
}
//  对分页处理数据
const changeSizeEvent = (e:any)=>{
   console.log(e)
}

// 点击 访问详情
const clickDetailEvent = (item: any) => {
  console.log(item)
  router.push('/detail')
} 
</script>

<style lang="less" scoped>
.test-wrap {
  display: flex;
  // justify-content: center;
  // align-items: center;
  // border: 1px solid #eee;
  // box-shadow: 1px 1px 10px #eee;
  width: 1190px;
  flex-direction: column;
}
.nav {
  background-color: #23c993;
  color: #fff;
  height: 40px;
  font-size: 0;
  width: 100%;
}
.hover-effect:hover {
  background-color: #1fb081;
}
.wshop:hover {
  background-color: #f9f9f9;
  padding-right: 10px;
}
.select_nav {
  background-color: #1fb081;
}
.faster-filter-box {
  display: inline-block;
  background-color: #fff;
  border: 2px solid #f0f1f2;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 4px 0 hsla(0, 0%, 50.2%, 0.07);
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 50.2%, 0.07);
  padding: 7px 12px;
  margin-right: 18px;
  color: #666;
  margin-bottom: 4px;
  font-size: 12px;
}
.active {
  background: linear-gradient(62.6deg, #1fb081, #1fb081 1%, #46d5a7);
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(31, 176, 129, 0.3);
  box-shadow: 0 2px 4px 0 rgba(31, 176, 129, 0.3);
  color: #fff;
}
</style>
