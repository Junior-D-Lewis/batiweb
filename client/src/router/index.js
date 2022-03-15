import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ('../views/News.vue')
        },
        {
            path: '/souscription',
            name: 'souscription',
            component: () =>
                import ('../views/Souscription.vue')
        },
        {
            path: '/contract',
            name: 'contract',
            component: () =>
                import ('../views/Contract.vue')
        },
        {
            path: '/tele-insurance',
            name: 'tele-insurance',
            component: () =>
                import ('../views/Tele-insurance.vue')
        },
        {
            path: '/address-book',
            name: 'address-book',
            component: () =>
                import ('../views/Address-book.vue')
        },
        {
            path: '/login-client',
            name: 'login-client',
            component: () =>
            import ('../components/LoginClient.vue')
        },

        {
            path: '/portefeuille',
            name: 'portefeuille',
            component: () =>
            import ('../views/Portefeuille.vue')
        },
        {
            path: '/login-courtier',
            name: 'login-courtier',
            component: () =>
            import ('../components/LoginCourtier.vue')
        },
        {
            path: '/myClientSpace',
            name: 'myClientSpace',
            component: () =>
                import ('../components/MyClientSpace.vue')
        },
        {
            path: '/myCourtierSpace',
            name: 'myCourtierSpace',
            component: () =>
                import ('../components/MyCourtierSpace.vue')
        },
        {
            path: '/etape1',
            name: 'etape1',
            component: () =>
                import ('../components/Etape1.vue')
        },
        {
            path: '/etape2',
            name: 'etape2',
            component: () =>
                import ('../components/Etape2.vue')
        },
        {
            path: '/etape3',
            name: 'etape3',
            component: () =>
                import ('../components/Etape3.vue')
        },
        {
            path: '/etape4',
            name: 'etape4',
            component: () =>
                import ('../components/Etape4.vue')
        },
        {
            path: '/etape5',
            name: 'etape5',
            component: () =>
                import ('../components/Etape5.vue')
        },
        {
            path: '/etape6',
            name: 'etape6',
            component: () =>
                import ('../components/Etape6.vue')
        },

        {
            path: '/etape7',
            name: 'etape7',
            component: () =>
                import ('../components/Etape7.vue')
        },
        {
            path: '/etape8',
            name: 'etape8',
            component: () =>
                import ('../components/Etape8.vue')
        },
        {
            path: '/etape9',
            name: 'etape9',
            component: () =>
                import ('../components/Etape9.vue')
        },
        {
            path: '/etape10',
            name: 'etape10',
            component: () =>
                import ('../components/Etape10.vue')
        },
        {
            path: '/etape11',
            name: 'etape11',
            component: () =>
                import ('../components/Etape11.vue')
        },
        {
            path: '/etape12',
            name: 'etape12',
            component: () =>
                import ('../components/Etape12.vue')
        }
    ],

    
})

export default router