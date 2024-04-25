<script setup lang="ts">
import {ref} from 'vue'
import {chatApi} from "../../../api/chat";


const getChat = async () => {
    const res = await chatApi("你是谁？")
    console.log(res)
}


const count = ref(0)

const add = () => {
    count.value++
}
const onDelete = () => {
    if (count.value > 0) {
        count.value--
    }
}

const text = ref('你是谁？')
const name = ref('huison')

const inputBox = ref(0)

const addInputBox = () => {
    inputBox.value++
}

const input = ref('')
const sendInput = () => {
    // text.value = input.value

    historyChat.value.push({
        name: 'huison',
        text: input.value
    })
    receiveData()
    // inputBox.value++
    // input.value = ''
}

const historyChat = ref(
    []
);

const receiveData = () => {
    historyChat.value.push({
        name: 'ai',
        text: "我是一个基于 GPT-3.5 模型开发的 AI 机器人，可以回答各种问题并提供信息和建议。"
    })
}


</script>

<template>
    <el-container style="height: 100%">
        <el-aside style="border: 2px solid #fdfdfd; height: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <el-button @click="add" class="chat-button">New chat</el-button>
                <div v-for="(item, index) in count" :key="item">
                    <el-button class="chat-button">New chat</el-button>
                </div>
        </el-aside>
        <el-container style="margin-left: 10px">
            <!--            <el-button @click="addInputBox">测试按钮</el-button>-->
            <!--            <el-button @click="getChat">获取聊天数据</el-button>-->
            <el-main style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <template v-for="(chat, index) in historyChat" :key="index">
                    <el-row>
                        <el-text>{{ chat.name }}:</el-text>
                        <el-text>{{ chat.text }}</el-text>
                    </el-row>
                </template>
            </el-main>
            <el-footer>
                <div style="display: flex;margin: 20px">
                    <el-input v-model="input" placeholder="请输入内容" style="width: 100%"/>
                    <el-button @click="sendInput" @keydown.enter="sendInput" style="margin-left: 10px">发送</el-button>
                </div>
            </el-footer>
        </el-container>
    </el-container>
</template>

<style scoped>
.chat-button {
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 99%;
    margin-top: 10px;
}
</style>