<script setup lang="ts">
import {jsRecorder} from '../../../hooks/recordCore.ts'
import {ref} from 'vue'
const websocket = ref<WebSocket | null>(null);

// 初始化录音对象并传入回调函数
const recorder = jsRecorder((blob: any, encTime: any) => {
    // console.log('blob === ', blob, encTime);
    // 发送音频 blob
    if (websocket.value && isRecording.value) {
        websocket.value.send(blob);
    }
});

// 录音状态变量
const isRecording = ref(false);

// 开始录音方法
const recStart = () => {
    isRecording.value = true;
    recorder.recStart();
};

// 停止录音方法
const recStop = () => {
    isRecording.value = false;
    recorder.recStop();
};

// 打开 WebSocket 连接方法
const websocketOpen = () => {
    if (!websocket.value || websocket.value.readyState !== WebSocket.OPEN) {
        websocket.value = new WebSocket('ws://localhost:8000');
        console.log("websocket连接成功")

        // 添加消息监听器前先移除可能存在的监听器
        /*
        * removeEventListener是 JavaScript 中用于移除事件监听器的方法。
        * 它通常与 addEventListener 方法一起使用，用于在对象上移除之前添加的事件监听器。
        在 JavaScript 中，你可以通过 addEventListener 方法向特定的事件目标（比如元素、WebSocket 等）添加事件监听器，用于监听指定类型的事件。
        * 而 removeEventListener 方法则用于从相同的事件目标上移除之前添加的事件监听器。
        例如，在上面的代码示例中，我们使用了 removeEventListener 方法来移除之前可能存在的消息监听器，
        * 以确保在重新打开 WebSocket 连接时不会重复添加监听器。这有助于避免出现意外的行为或错误。
        * */
        websocket.value.removeEventListener('message', handleMessage);

        // 添加消息监听器
        websocket.value.addEventListener('message', handleMessage);
    }
};

// 消息处理函数
const handleMessage = (event: MessageEvent) => {
    // 打印接收到的数据
    console.log('接收到的数据:', event.data);
};

// 关闭 WebSocket 连接方法
const websocketClose = () => {
    if (websocket.value && websocket.value.readyState === WebSocket.OPEN) {
        // 移除消息监听器
        websocket.value.removeEventListener('message', handleMessage);
        websocket.value.close();
    }
};
</script>

<template>
    <el-container>
        <el-header>
            语音实时转写
        </el-header>
        <el-main>
            <h2 style="border: 2px solid #0f0f10; height: 100% ">
                语音实时转写
            </h2>
        </el-main>

        <el-footer style="margin-top: 30%">
            <el-button type="primary" @click="websocketOpen">建立websocket连接</el-button>
            <el-button type="primary" @click="recStart">开始录音</el-button>
            <el-button type="primary" @click="recStop">停止录音</el-button>
            <el-button type="primary" @click="websocketClose">关闭websocket连接</el-button>
        </el-footer>
    </el-container>
</template>

<style scoped>

</style>