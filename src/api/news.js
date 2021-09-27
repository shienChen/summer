import request from "@/plugins/axios";

export function getNewsId(params) {
  return request({
    url: "/api/news/get",
    method: "get",
    params,
  });
}
