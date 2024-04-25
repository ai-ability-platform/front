import {requestChat} from "../../utils/request.ts";

enum API {
    CHAT = "/chat"
}

export const chatApi = (query: string) => {
    // return requestChat.post(API.CHAT, query)
    return requestChat.post(`${API.CHAT}?query=${query}`)
};