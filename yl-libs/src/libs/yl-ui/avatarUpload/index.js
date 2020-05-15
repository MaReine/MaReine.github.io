/*
 * @Description: 头像上传组件对外出口文件
 * @Author: wangliang
 * @Date: 2019-09-10 16:59:21
 */
import AvatarUpload from "./src/main";
AvatarUpload.install = function(Vue) {
    Vue.component(AvatarUpload.name, AvatarUpload);
};
export default AvatarUpload;