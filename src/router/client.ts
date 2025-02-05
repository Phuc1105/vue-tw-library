import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import PostDetails from '@/components/postDetails/PostDetails.vue';



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
                path: '/postdetails',
                name: 'component-postDetails',
                component: () => PostDetails,
            }

        ]
    }
]

export default client;