<template>
  <div flex>
    <div class="flex items-center justify-center">
      <div class="flex" style="width: 180px; height: 130px">
        <img
          style="height: 100%; width: 100%; object-fit: cover"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
      <div class="flex-1 self-start ml-4">
        <div class="text-17px font-bold">
          郑东新区楷林中心持续招商中！200平至6000平均可满足！！
        </div>
        <div class="text-12px text-[#000] mt-4">
          高新区玉兰街
        </div>
        <div class="text-12px text-[#000] mt-4">
          写字楼  中区/112层
        </div>
        <div class="flex flex-wrap mt-4">
          <a-tag class="mb-2" :bordered="false" color="processing" v-for="(item,index) in 13" :key="index">Tag {{item}}</a-tag>
        </div>
      </div>
      <div class="flex-col flex items-center ">
        <div class="flex items-center">
          1000
          <div class="text-14px">㎡</div>
        </div>
        <div class="text-[#999] text-12px mt-1">建筑面积</div>
      </div>
      <div class="flex-col flex ml-5 items-center">
        <div class="flex text-[red] items-center">
          <div>1000</div>
          <div class="text-12px">元/㎡/天</div>
        </div>
        <div class="text-[#999] text-12px mt-1">月租/日租</div>
      </div>
    </div>
    <a-divider style="margin-bottom: 0px;" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps({
  // qrcode.js配置项
  options: {
    type: Object,
    default: () => ({}),
  },
});

onMounted(() => {
  console.log(props.options);
});
</script>

<style lang="scss" scoped></style>
