import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import Product from '@/components/product/Product.vue';

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
                path: '/Product',
                name: 'component-product',
                component: () => Product,
            }
        ]
    }
]

export default client;