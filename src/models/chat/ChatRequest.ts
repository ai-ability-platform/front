export interface ChatRequest {
    user_id: string; // 用户ID
    session_id: string; // 会话ID
    text?: string; // 文本消息，可选
    file?: string; // 音频文件路径，可选
}