import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';

const client = [
    {
        path: '/',
        component: () => LayoutClient,
        children: [
            {
                path: '',
                name: 'component-banner',
                component: () => Banner,
            }
        ]
    }
]

export default client;