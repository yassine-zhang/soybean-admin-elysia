export default async function ({ jwt, set, headers }: any) {
  // 验证token
  const payload = await jwt.verify(headers["authorization"].split(" ")[1]);
  if (!payload) {
    set.status = 401;
    return { status: -1, error: "Unauthorized" };
  }

  return {
    data: {
      userId: "0",
      userName: payload.userName,
      roles: ["R_SUPER"],
      buttons: ["B_CODE1", "B_CODE2", "B_CODE3"],
    },
    code: "0000",
    msg: "请求成功",
  };
}
