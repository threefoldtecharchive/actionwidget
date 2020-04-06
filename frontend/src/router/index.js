import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/:site?/error',
        name: 'error',
        meta: {
            title: 'Error',
        },
        component: () =>
            import(/* webpackChunkName: "error" */ '../views/Error.vue'),
    },
    {
        path: '/:site?/signup',
        name: 'signup',
        meta: {
            title: 'Digital Twin Sign-up',
        },
        component: () =>
            import(/* webpackChunkName: "signup" */ '../views/Signup.vue'),
    },
    {
        path: '/:site?/callback/:userid',
        name: 'callback',
        meta: {
            title: 'Callback',
        },
        component: () =>
            import(/* webpackChunkName: "callback" */ '../views/Callback.vue'),
    },
    {
        path: '/:site?/intro/:userid?',
        name: 'intro',
        meta: {
            title: 'A new Internet for the planet and for humanity.',
        },
        component: () =>
            import(/* webpackChunkName: "intro" */ '../views/Intro.vue'),
    },
    {
        path: '/:site?/acknowledgements',
        name: 'acknowledgements',
        meta: {
            title: 'Acknowledgements',
        },
        component: () =>
            import(
                /* webpackChunkName: "declaration" */ '../views/Acknowledgements.vue'
            ),
    },
    {
        path: '/:site?/threefold',
        name: 'threefold',
        meta: {
            title: 'Threefold',
        },
        component: () =>
            import(
                /* webpackChunkName: "threefold" */ '../views/Threefold.vue'
            ),
    },
    {
        path: '/:site?/thankyou',
        name: 'thankyou',
        meta: {
            title: 'Thank you',
        },
        component: () =>
            import(/* webpackChunkName: "thankyou" */ '../views/Thankyou.vue'),
    },
    { path: '/', redirect: { name: 'intro' } },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
