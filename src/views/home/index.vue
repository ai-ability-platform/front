<script setup lang="ts">
import {useRouter} from 'vue-router'

let router = useRouter()
const goRoute = (path) => {
  console.log("跳转到 = ", path)
  router.push(path)
}

</script>

<template>
  <div class="hello-world">
    <el-container style="height: 100%">
      <el-header style="padding: 10px">AI能力平台</el-header>
      <el-container style="margin-top: -30px">
        <el-aside style="width: 200px;height: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin-top: 19px">
          <el-menu
              default-active="2"
          >
            <el-sub-menu index="1-1">
              <template #title>自然语言处理</template>
              <el-menu-item index="1-1-1">离线转写</el-menu-item>
              <el-menu-item index="1-1-2" @click="goRoute('/nlp/real-time-transcribe')">实时转写
              </el-menu-item>
              <el-menu-item index="1-1-3" @click="goRoute('/nlp/chat')">智能问答</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2-1">
              <template #title>计算机视觉</template>
              <el-menu-item index="2-1-2">人脸管理</el-menu-item>
              <el-menu-item index="2-1-1">人脸识别</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main style="height: 100%;">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>
.hello-world {
  width: 100%;
  height: 100vh;
}
</style>
