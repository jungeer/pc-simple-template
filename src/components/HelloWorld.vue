<script setup lang="ts">
  defineProps<{
    msg: string;
  }>();
</script>

<template>
  <div class="greetings">
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <span class="test">aaa</span>
  </div>
</template>

<style scoped lang="less">
  .test {
    color: @primary-color;
  }
</style>
