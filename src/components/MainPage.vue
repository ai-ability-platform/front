<script setup lang="ts">

</script>

<template>
  <div class="hello-world">
    <el-container>
      <el-header>AI能力平台</el-header>
      <el-container>
        <el-aside width="400px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
              >
                <el-sub-menu index="1-1">
                  <template #title>自然语言处理</template>
                  <el-menu-item index="1-1-1">离线转写</el-menu-item>
                  <el-menu-item index="1-1-2">实时转写</el-menu-item>
                  <el-menu-item index="1-1-3">智能问答</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2-1">
                  <template #title>计算机视觉</template>
                  <el-menu-item index="2-1-2">人脸管理</el-menu-item>
                  <el-menu-item index="2-1-1">人脸识别</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>Main</el-main>
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
