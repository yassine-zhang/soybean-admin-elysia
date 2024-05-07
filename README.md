# soybean-admin-ts

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.9. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Usage

### post auth/login

```
{
  "userName":"Admin",
  "password":"123456"
}
```

```json
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJ1c2VyTmFtZSI6IkFkbWluIn1dLCJpYXQiOjE2OTg0ODQ5NzIsImV4cCI6MTczMDA0NDc5OSwiYXVkIjoic295YmVhbi1hZG1pbiIsImlzcyI6IlNveWJlYW4iLCJzdWIiOiJBZG1pbiJ9.rLqWqgErEAgX4EVy_Kl_Eb1_bDmXyiZ9bZaupVgyv5M",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJ1c2VyTmFtZSI6IkFkbWluIn1dLCJpYXQiOjE2OTg0ODQ5ODQsImV4cCI6MTc2MTU4MDc5OSwiYXVkIjoic295YmVhbi1hZG1pbiIsImlzcyI6IlNveWJlYW4iLCJzdWIiOiJBZG1pbiJ9.QLrSKVlFXAzBb3v0BFzyxBbzrVMg58SF9oLS46Z8bFI"
  },
  "code": "0000",
  "msg": "请求成功"
}
```

### get auth/getUserInfo

该接口 header 必带

Authorization : Bearer token

```json
{
  "data": {
    "userId": "2",
    "userName": "Admin",
    "roles": ["R_ADMIN"],
    "buttons": ["B_CODE2", "B_CODE3"]
  },
  "code": "0000",
  "msg": "请求成功"
}
```
