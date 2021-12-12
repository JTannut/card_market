import vue from 'vue'
import Router from 'vue-router'
import Tasks from './views/Tasks.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'



vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path:'/',
            redirect: '/tasks'
        },
        {
            path: '/tasks',
            name:'tasks',
            component: Tasks
        },
        {
            path: '/tasks/new',
            name:'new-tasks',
            component: New
        },
        {
            path: '/tasks/:id',
            name:'show',
            component: Show
        },
        {
            path: '/tasks/:id/edit',
            name:'edit',
            component: Edit
        }
    ]

})