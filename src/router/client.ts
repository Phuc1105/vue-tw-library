import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts.vue'

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
                path: '/RelatedProducts',
                name: 'component-relatedProducts',
                component: () => RelatedProducts,
            }
        ]
    }
]

export default client;