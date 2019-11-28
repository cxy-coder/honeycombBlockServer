# honeycombBlockServer

## 初始化项目
```bash
  # 新建服务器项目
  nest new server

  # 进入服务器文件夹
  cd server

  # 新建子项目
  nest g app admin

  # 运行子项目
  nest start -w admin
```

## 创建公共仓库
```bash
  # 数据库模块
  nest g lib db

  # 安装数据库依赖
  yarn add nestjs-typegoose @typegoose/typegoose
  yarn add mongoose @types/mongoose
```

## 接口文档
```bash
  # 添加swagger
  yarn add @nestjs/swagger swagger-ui-express
```