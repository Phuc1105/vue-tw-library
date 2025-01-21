import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import FeaturedServices from '@/components/featuredServices/FeaturedServices.vue'

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
                path: '/featuredServices',
                name: 'component-FeaturedServices',
                component: () => FeaturedServices,
            }
        ]
    }
]

export default client;