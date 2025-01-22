import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import QA from '@/components/qa/QA.vue';


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
                path: '/qa',
                name: 'component-qa',
                component: () => QA,
            }
        ]
    }
]

export default client;