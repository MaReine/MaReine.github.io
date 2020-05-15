const config = {
    menu: [{
            id: "1",
            name: "pc端组件(yl-ui)",
            subMenu: [{
                    id: "1-1",
                    name: "布局组件(layout)",
                    route: "layout"
                },
                {
                    id: "1-2",
                    name: "侧滑组件(sideslip)",
                    route: "sideslip"
                },
                {
                    id: "1-3",
                    name: "滚动加载组件(scroll)",
                    route: "scroll"
                },
                {
                    id: "1-4",
                    name: "loading组件(loading)",
                    route: "loading"
                }
            ]
        },
        {
            id: "2",
            name: "移动端组件(yl-mobile-ui)",
            subMenu: []
        },
        {
            id: "3",
            name: "字体图标(yl-icon)"
        },
        {
            id: "4",
            name: "工具类(yl-utils)"
        }
    ]
};

const GetMenu = params => {
    let res = config.menu[0].subMenu[0];
    if (params) {
        config.menu.forEach(item => {
            if (item.subMenu && item.subMenu.length !== 0) {
                item.subMenu.forEach(sub => {
                    if (params.path) {
                        if (sub.route && sub.route === params.path) {
                            res = sub;
                            return false;
                        }
                    } else if (params.id) {
                        if (sub.id && sub.id === params.id) {
                            res = sub;
                            return false;
                        }
                    } else {
                        return false;
                    }
                });
            } else {
                if (params.path) {
                    if (item.route && item.route === params.path) {
                        res = item;
                        return false;
                    }
                } else if (params.id) {
                    if (item.id && item.id === params.id) {
                        res = item;
                        return false;
                    }
                } else {
                    return false;
                }
            }
        });
    }
    return res;
};
export { config, GetMenu };
export default config;