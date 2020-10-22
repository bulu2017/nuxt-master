export default ({ isHMR, app, store, route, redirect, params, query, req, resp, error }) => {
    //context 服务端上下文 {store, route, redirect, params, req, resp}
    // 全局守卫业务
    // store 状态树消息
    // route 一条目标路由信息
    // redirect 强制跳转
    // params query 校验参数的合理性
    // console.log('2:middleware nuxt.config outside 全局守卫前置业务');
    // console.log(app)
    const defaultLocale = app.i18n.fallbackLocale
    if (isHMR) {
        return;
    }
    const locale = params.lang || query.lang || defaultLocale
    if (store.state.locales.indexOf(locale) === -1) {
        return error({ message: 'This page could not be found.', statusCode: 404 })
    }
    store.commit('SET_LANG', locale); // set store
    app.i18n.locale = store.state.locale
    if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
        const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
        const re = new RegExp(toReplace)
        return redirect(
            route.fullPath.replace(re, '/')
        )
    }
}