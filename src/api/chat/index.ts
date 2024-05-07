import {requestChat} from "../../utils/request.ts";

enum API {
    CHAT = "/chat/",
    GET_ALL_HISTORY = "/chat/history",
    CREATE_SESSION = "/chat/session",
    GET_HISTORY_SESSION = "/chat/history/session",
}


export const chatApi = (data: any) => {
    return requestChat.post(API.CHAT, data)
};

export const getAllHistoryApi = (user_id: string) => {
    return requestChat.get(`${API.GET_ALL_HISTORY}?user_id=${user_id}`)
};

export const createSessionApi = (user_id: any) => {
    return requestChat.post(`${API.CREATE_SESSION}?user_id=${user_id}`)
};

export const getHistorySessionApi = (user_id: string, session_id: string) => {
    return requestChat.get(`${API.GET_HISTORY_SESSION}?user_id=${user_id}&session_id=${session_id}`)
}