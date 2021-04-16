import Vue from 'vue'
import Router from'vue-router'
import title from '@/components/title'
import quiz from '@/components/quiz'
import analysis from '@/components/analysis'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:title
        },
        {
            path:'/quiz',
            component:quiz
        },
        {
            path:'/analysis',
            component:analysis
        }
    ]
})