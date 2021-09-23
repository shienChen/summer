import request from "@/plugins/axios";

export function getLocationList(params) {
  return request({
    url: "/api/location/list",
    method: "get",
    params,
  });
}
