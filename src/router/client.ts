import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import Content from '@/components/content/Content.vue';


const client = [
    {
        path: '/',
        component: LayoutClient,
        children: [
            {
                path: '',
                name: 'component-banner',
                component: Banner,
            },
            {
                path: '/content',
                name: 'component-content',
                component: Content,
            }
           
        ]
    }
]

export default client;
