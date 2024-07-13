<template>
    <div class="flex flex-col">
        <div class="flex items-center justify-center">
              <div class="flex" style="max-height: 160px">
                <a-image
                  style="height: 100%"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
          </div>
          <div class="flex-col p-3">
              <div class="text-15px">公园道一号</div>
              <div class="text-12px text-[#999] mt-2 flex">
                地址:
                <div class="ml-4">香槟大道</div>
              </div>
              <div class="flex items-end mt-3">
                <div class="text-17px text-[red]">5688</div>
                <div class="text-12px text-[red] ml-1">元/㎡/天</div>
                <div class="text-14px text-[#999] ml-4">10-200㎡</div>
              </div>
            </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue"
  const props = defineProps({
    // qrcode.js配置项
    options: {
      type: Object,
      default: () => ({}),
    }
  })
  
  onMounted(() => {
    console.log(props.options);
  });
  </script>
  
  <style lang="scss" scoped></style>
  