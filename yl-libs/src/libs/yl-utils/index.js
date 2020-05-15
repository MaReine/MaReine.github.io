/*
 * @Description: 工具类对外出口函数
 * @Author: wangliang
 * @Date: 2019-08-23 17:01:34
 */
import Url from './handleUrl/index'
import Img from './handleImg/index'

let Utils = {};
Utils["Url"] = Url
Utils["Img"] = Img

// 按需 导出
export { Url, Img }

// 全部 导出
export default Utils