<script setup lang="ts">
import {ref} from 'vue'

const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<template>
  <el-container style="height: 100%;">
    <el-aside style="border: 2px solid #9f9fbd; height: 100% ">
            <el-button @click="add" class="chat-button">New chat</el-button>
      <el-scrollbar>
        <p v-for="item in count" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </el-scrollbar>
    </el-aside>
    <el-main>聊天区域</el-main>

  </el-container>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.chat-button {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 99%;
  margin-top: 10px;
}
</style>