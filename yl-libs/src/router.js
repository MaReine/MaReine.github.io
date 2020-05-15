import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        component: () =>
            import ("./views/index.vue"),
        children: [{
                path: "/",
                redirect: "/layout"
            },
            {
                path: "/layout",
                name: "layout",
                component: () =>
                    import ("./views/example/layout.vue")
            },
            {
                path: "/sideslip",
                name: "sideslip",
                component: () =>
                    import ("./views/example/sideslip.vue")
            },
            {
                path: "/scroll",
                name: "scroll",
                component: () =>
                    import ("./views/example/scroll.vue")
            },
            {
                path: "/loading",
                name: "loading",
                component: () =>
                    import ("./views/example/loading.vue")
            }
        ]
    }]
});