<template>
  <div class="fr-input">输入框"kai sign ccc"{{ testData }}</div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const testData = ref<string>('测试数据kai')
    return {
      testData
    }
  },
});
</script>
<style scoped></style>
