// axios 基础的封装
import axios from 'axios'

// @ts-ignore
const request = (baseURL) => {
    const instance = axios.create({
        baseURL,
        timeout: 500000
    })

    // 请求拦截器
    // @ts-ignore
    // instance.interceptors.request.use((config) => {
    //     // 配置 headers 等信息
    //     // config.headers.token = localStorage.getItem("TOKEN")
    //     // return config
    // })

    // 响应拦截器
    // instance.interceptors.response.use(
    //     (response) => {
    //         // 成功回调后简化数据
    //         return response.data
    //     },
    //     (error) => {
    //         // 失败回调,处理http网络错误
    //         console.log(error)
    //     },
    // )

    return instance
}


// @ts-ignore
export const requestChat = request(import.meta.env.VITE_CHAT_SERVE + '' + import.meta.env.VITE_APP_BASE_API)
// @ts-ignore
