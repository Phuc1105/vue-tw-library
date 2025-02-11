import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import Header from '@/components/header/Header.vue'
import Content from '@/components/content/Content.vue';

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
            },
            {
                path: '/Content',
                name: 'component-content',
                component: () => Content,
            }
        ]
    }
]

export default client;