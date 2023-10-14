<script setup lang="ts">
  import { message } from "ant-design-vue";
</script>

<template>
  <main class="home">
    <a-space>
      <a-button
        type="primary"
        class="mr-8px"
        @click="message.success('点击了主要按钮')"
        >主要按钮</a-button
      >
      <a-button @click="message.info('点击了默认按钮')">默认按钮</a-button>
      <a-button type="text" @click="message.warning('点击了文本按钮')"
        >文本按钮</a-button
      >
      <a-button type="link" @click="message.error('点击了链接按钮')"
        >链接按钮</a-button
      >
      <span class="test">测试CSS变量（primary-color）</span>
    </a-space>
  </main>
</template>

<style scoped lang="less">
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .test {
    color: @primary-color;
  }
</style>
