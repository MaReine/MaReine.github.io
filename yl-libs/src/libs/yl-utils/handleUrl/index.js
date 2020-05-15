/*
 * @Description: 处理url相关的工具类
 * @Author: wangliang
 * @Date: 2019-08-23 17:01:34
 */

/**
 * @description: 获取url后面带的参数
 * @param {String} url 链接地址 可不传 自动拿地址栏的url
 * @param {String} name 参数名称
 * @return: 返回参数对应的值,不传参数返回当前窗口url带的所有参数,没有返回null
 */
function getQuery() {
    switch (arguments.length) {
        case 1:
            var url = window.location.href,
                name = arguments[0];
            return _factory(url, name);
            break;
        case 2:
            var url = arguments[0],
                name = arguments[1];
            return _factory(url, name);
            break;
        default:
            let res = null,
                search = window.location.search;
            if (search) {
                let searchArray = search.split('?')[1].split('&');
                res = {};
                searchArray.map(s => {
                    if (s.indexOf('=') !== -1) {
                        res[s.split('=')[0]] = s.split('=')[1];
                    } else {
                        res[s] = null;
                    }
                });
            }
            return res;
    }

    function _factory(a, b) {
        let reg = new RegExp("(^|&)" + b + "=([^&]*)(&|$)");
        a = a.indexOf('?') === -1 ? '' : a.split('?')[1];
        let r = a.match(reg);
        return r != null ? decodeURI(r[2]) : null;
    }
}

/**
 * @description: 替换url中某个参数的值
 * @param {String} url 链接地址 可不传 自动拿地址栏的url
 * @param {String} key 需要修改值得参数名
 * @param {String | Number} value 替换的值
 * @return: 返回替换后的url 传入的参数不对会返回一个 ""
 */
function replaceQuery() {
    if (arguments.length < 2) {
        return "";
        console.error("[replaceQuery] 参数缺失");
    } else {
        switch (arguments.length) {
            case 2:
                var url = window.location.href;
                var key = arguments[0];
                var value = arguments[1];
                return _factory(url, key, value);
                break;
            case 3:
                var url = arguments[0];
                var key = arguments[1];
                var value = arguments[2];
                return _factory(url, key, value);
                break;
        }

        function _factory(a, b, c) {
            let res = a;
            let reg = new RegExp("(" + b + "=)([^&]*)", "g");
            res = a.replace(reg, b + "=" + c);
            return res;
        }
    }
}

let Url = {};
Url["getQuery"] = getQuery;
Url["replaceQuery"] = replaceQuery;
export default Url