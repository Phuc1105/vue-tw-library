import Banner from '@/views/banner/Banner.vue';
import LayoutClient from '@/layouts/client.vue';
import Footer from '@/components/footer/Footer.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconPinterest from '@/components/icons/IconPinterest.vue';
import IconYoutube from '@/components/icons/IconYoutube.vue';
import IconInsta from '@/components/icons/IconInsta.vue';
import IconTikTok from '@/components/icons/IconTikTok.vue';
// import QA from '@/components/q&a/Q&A.vue';
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
            },
            // {
            //     path: '/q&a',
            //     name: 'component-q&a',
            //     component: () => QA,
            // }
        ]
    }
]

export default client;