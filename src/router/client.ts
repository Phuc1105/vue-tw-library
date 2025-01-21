import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import RelatePost from '@/components/relatedPost/RelatedPost.vue'

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
                path: '/RelatePost',
                name: 'component-relatePost',
                component: () => RelatePost,
            }
        ]
    }
]

export default client;