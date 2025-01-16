import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import Footer from '@/components/footer/Footer.vue';

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
                path: '/footer',
                name: 'component-footer',
                component: () => Footer,
            }
        ]
    }
]

export default client;