/* eslint-disable */
import { ajax } from "./config";

// 获取基础信息
export function GetMarkDownInfo(params) {
  return ajax({
    url: params.url,
    method: "get"
  });
}
