export default ({
    app,
    redirect,
    params,
    query,
    store
}) => {
    // app == vue 实例
    // redirect 跳转函数
    app.router.beforeEach((to, from, next) => {
        // 全局前置守卫，插件
        // console.log('插件全局前置守卫');
        // console.log(to);
        next(true)
    });

    app.router.afterEach((to, from) => {
        // console.log(from);
        // console.log('插件全局后置守卫');
    });
}