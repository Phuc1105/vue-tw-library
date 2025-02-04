import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import ProductDetail from '@/components/productdetail/ProductDetail.vue';

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
                path: '/productdetail',
                name: 'component-=productdetail',
                component: () => ProductDetail,
            }
        ]
    }
]

export default client;