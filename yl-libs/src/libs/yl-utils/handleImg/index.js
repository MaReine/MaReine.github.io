/*
 * @Description: 处理图片相关工具类
 * @Author: wangliang
 * @Date: 2019-08-26 15:57:45
 */
/**
 * @description 图片加载失败的处理，如给个默认图什么的
 * @param area 处理某个区域内的所有图片 不传处理整个文档的图片
 * @return 无返回值
 */
function imgError(area) {
    let el = document.querySelector("body")
    if (area) {
        el = document.querySelector(area)
    }
    let imgs = el.querySelectorAll("img")
    if (imgs.length !== 0) {
        // 把nodeList对象转化成数组对象
        imgs = Array.prototype.slice.call(imgs)
        imgs.map(img => {
            if (img.hasAttributes('data-error')) {
                let url = img.getAttribute('data-error')
                if (url) {
                    let src = img.getAttribute('src')
                    if (!src) {
                        img.src = url
                    }
                    img.onerror = function() {
                        img.src = url
                    }
                }
            }
        })
    }
}

let Img = {}
Img["imgError"] = imgError;
export default Img