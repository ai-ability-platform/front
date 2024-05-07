<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {chatApi, getAllHistoryApi, createSessionApi, getHistorySessionApi} from "../../../api/chat";
import {ChatRequest} from "../../../models/chat/ChatRequest.ts";
import MarkdownIt from 'markdown-it';

const selectedSession = ref({})

const selectSession = async (session: any) => {
    selectedSession.value = session
    console.log("selectedSession = ", selectedSession.value)
    // 获取该session的历史记录
    const getHistorySessionApiRes = await getHistorySessionApi(
        selectedSession.value.user_id,
        selectedSession.value.session_id,
    )
    console.log("getHistorySessionApiRes.data = ", getHistorySessionApiRes.data)

    historyChat.value = getHistorySessionApiRes.data
    console.log("historyChat.value = ", historyChat.value)
}
const historyChat = ref(
    []
);

const getChat = async () => {
    // TODO 解决发送问题在等待的时候，可以重复发送的问题

    const data = new FormData();
    data.append('user_id', selectedSession.value.user_id);
    data.append('session_id', selectedSession.value.session_id);
    data.append('content', input.value);
    console.log("historyChat.value = ", historyChat.value)
    historyChat.value.push({
        content: input.value,
        role: "user"
    })
    input.value = ''

    const res = await chatApi(data)
    console.log(res)
    historyChat.value.push({
        role: 'assistant',
        content: res.data.content
    })

}

const sessions = ref([])

const add = async () => {
    const createSessionApiRes = await createSessionApi("1");
    console.log("createSessionApiRes = ", createSessionApiRes)
    sessions.value.push(createSessionApiRes.data)
}
const onDelete = () => {
    if (sessions.value > 0) {
        sessions.value--
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


const receiveData = () => {
    historyChat.value.push({
        name: 'ai',
        text: "我是一个基于 GPT-3.5 模型开发的 AI 机器人，可以回答各种问题并提供信息和建议。"
    })
}


onMounted(async () => {
    // get all history chat
    const getAllHistoryApiRes = await getAllHistoryApi("1");
    console.log("getAllHistoryApiRes = ", getAllHistoryApiRes)
    historyChat.value = getAllHistoryApiRes.data
    console.log("historyChat = ", historyChat.value)
    sessions.value = historyChat.value
    console.log("sessions = ", sessions.value)
})

const renderMarkdown = (content) => {
    console.log("content = ", content)
    if (content !== undefined) {
        return MarkdownIt().render(content);
    }
}


</script>

<template>
    <el-container style="height: 100%">
        <el-aside style="border: 2px solid #fdfdfd; height: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <el-button @click="add" class="chat-button">create new chat</el-button>
            <div v-for="(session, index) in sessions" :key="index">
                <el-button class="chat-button" @click="selectSession(session)">{{ session.session_name }}</el-button>
            </div>
        </el-aside>
        <el-container style="margin-left: 10px">
            <el-main style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <template v-for="(chat, index) in historyChat" :key="index">
                    <el-row type="flex" :justify="chat.role === 'user' ? 'end' : 'start'" style="margin-bottom: 10px">
                        <!-- todo markdown -->
<!--                        <el-text>{{ chat.content }}</el-text>-->
                        <el-text v-html="renderMarkdown(chat.content)"></el-text>
                    </el-row>
                </template>
            </el-main>
            <el-footer>
                <div style="display: flex;margin: 20px">
                    <el-input v-model="input" @keydown.enter="getChat" placeholder="请输入内容" style="width: 100%"/>
                    <el-button @click="getChat" style="margin-left: 10px">发送</el-button>
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