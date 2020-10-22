# aipin-nuxt-master

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



### 项目部署：

完成项目打包：将以下目录及文件上传到与服务器端

> .nuxt 目录
>
> package-lock.json 文件
>
> package.json 文件
>
> nuxt.config.json 文件
>
> static 目录
>
> server 目录



### linux下安装pm2

##### 全局安装

```node
npm install pm2 -g
```

##### 创建软连接

```
ln -s /root/node-v10.14.2-linux-x64/bin/pm2 /usr/local/bin/
```

##### 查看进程

```
pm2 list
```

##### 启动

> 引号内是线程名

```
pm2 start npm --name "my-nuxt" -- run start
```

##### 结束线程

```
pm2 delete my-nuxt
```

