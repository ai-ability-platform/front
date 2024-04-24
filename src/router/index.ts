import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        children: [
            {
                path: '/nlp',
                name: 'nlp',
                component: null,
                children: [
                    {
                        path: '/nlp/chat',
                        name: 'chat',
                        component: () => import('@/views/nlp/chat/index.vue')
                    },
                    {
                        path: '/nlp/real-time-transcribe',
                        name: 'real-time-transcribe',
                        component: () => import('@/views/nlp/real-time-transcribe/index.vue')
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router


