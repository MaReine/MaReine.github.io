import axios from "axios";
/* eslint-disable */
// 统一处理ajax请求
export function ajax(options) {
  return new Promise((resolve, reject) => {
    // axios全局配置
    const https = axios.create({
      timeout: 30 * 1000
    });
    // 全局处理请求响应或错误
    https(options)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
