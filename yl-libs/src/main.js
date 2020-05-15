import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Menu, Submenu, MenuItem, MenuItemGroup, Button } from "element-ui";

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Button);

import "./styles/quasar.styl";
import lang from "quasar-framework/i18n/zh-hans";
import "quasar-extras/animate";
import "quasar-extras/material-icons";
import {
    Quasar,
    QBtn,
    QLayout,
    QLayoutHeader,
    QLayoutDrawer,
    QPage,
    QPageContainer,
    QToolbar,
    QToolbarTitle,
    QList,
    QListHeader,
    QItemSeparator,
    QItem,
    QItemSide,
    QItemMain
} from "quasar";

Vue.use(Quasar, {
    config: {},
    components: {
        QBtn,
        QLayout,
        QLayoutHeader,
        QLayoutDrawer,
        QPage,
        QPageContainer,
        QToolbar,
        QToolbarTitle,
        QList,
        QListHeader,
        QItemSeparator,
        QItem,
        QItemSide,
        QItemMain
    },
    directives: {},
    plugins: {},
    i18n: lang
});

import yl from "./libs/yl-ui/index";
Vue.use(yl);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");