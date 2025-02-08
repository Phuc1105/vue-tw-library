import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import Testominal from '@/components/testominal/Testominal.vue';

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
                path: '/testominal',
                name: 'component-testominal',
                component: () => Testominal,
            }
        ]
    }
]

export default client;