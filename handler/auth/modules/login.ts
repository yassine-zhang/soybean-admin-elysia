const username = Bun.env.SUPER_USERNAME;
const password = Bun.env.SUPER_PASSWORD;

export default async function ({ body, jwt, cookie: { auth } }: any) {
  // 验证账号密码是否正确
  if (username !== body.userName || password !== body.password)
    return {
      data: null,
      code: "1000",
      msg: "用户名或密码错误",
    };

  // 用户存在，生成jwt，返回jwt给客户端
  const option = {
    value: await jwt.sign(body),
    httpOnly: true,
    path: "/",
  };
  auth.set(option);

  return {
    data: {
      token: auth.value,
      refreshToken: auth.value,
    },
    code: "0000",
    msg: "请求成功",
  };
}
