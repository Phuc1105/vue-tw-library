import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import Header from '@/components/header/Header.vue'

const client = [
    {
        path: '/',
        component: () => LayoutClient,
        children: [
            {
                path: '',
                name: 'component-banner',
                component: () => Banner,
            },
            {
                path: '/Header',
                name: 'component-header',
                component: () => Header,
            }
        ]
    }
]

export default client;