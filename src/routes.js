// import Home from './views/home.vue';
import   Showblog from './views/showBlog.vue';
import   AllBlogs from './views/allBlogs.vue';
import   contact from './views/contact.vue';
import   about from './views/aboutMe.vue';

export default [
    {
        path :'/',
        component: AllBlogs
    },
    {
        path :'/blog/:id',
        component: Showblog
    },
    {
        path :'/contact',
        component: contact
    },
    {
        path :'/About',
        component: about
    }

]