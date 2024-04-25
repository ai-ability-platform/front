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
    
    inputBox.value++
    input.value = ''
}

const historyChat = ref([
    {
        name: 'huison',
        text: '你是谁？'
    },
    {
        name: 'huison',
        text: '我是huison'
    },
    {
        name: 'huison',
        text: '你好，我是huison'
    }]);

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
        <el-container>
            <el-button @click="addInputBox">测试按钮</el-button>
            <el-button @click="getChat">获取聊天数据</el-button>
            <el-main>
                <template v-for="(chat, index) in historyChat" :key="index">
                    <el-row>
                        <el-text>{{ chat.name }}:</el-text>
                        <el-text>{{ chat.text }}</el-text>
                    </el-row>
                </template>
            </el-main>
            <el-footer>
                <el-input v-model="input" placeholder="请输入内容" style="width: 100%"/>
                <el-button @click="sendInput">发送</el-button>
            </el-footer>
        </el-container>
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