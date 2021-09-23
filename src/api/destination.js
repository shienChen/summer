import request from "@/plugins/axios";

export function getDestinationList(params) {
  return request({
    url: "/api/destination/list",
    method: "get",
    params,
  });
}
