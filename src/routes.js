import Home from './components/Home.vue'
import PlaceAPI from './components/PlaceAPI.vue'
import Profile from './components/Profile.vue'

export default {
    mode: 'history',
    routes: [
        // Redirect to home to easily (lazily) fix issue with v-list-item--active on both home and active page
        {
            path: '/',
            redirect: { name: 'home' }
        }, 
        {
            path: '/home',
            name: 'home',
            component: Home
        },        
        {
            path: '/place',
            name: 'place',
            component: PlaceAPI
        },        
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '*',
            component: Home
        }
    ]
}