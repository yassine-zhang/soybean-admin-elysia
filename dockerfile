# 使用官方的Bun镜像
FROM oven/bun:1.1.4 as base

# 设置工作目录
WORKDIR /usr/src/app

# 将本地项目文件复制到工作目录
COPY . .

# 安装项目依赖
RUN bun install

# 暴露容器运行时的端口
EXPOSE 9094

# 运行Bun应用
CMD ["bun", "run", "start"]