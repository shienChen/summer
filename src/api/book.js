import request from "@/plugins/axios";

export function getBookId(params) {
  return request({
    url: "/api/view/get",
    method: "get",
    params,
  });
}
