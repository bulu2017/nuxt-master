//主模块
export const state = () => ({
    locales: ['zh', 'en'],
    locale: 'zh'
})

// mutations
export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}

export const actions = {
    // 生命周期nuxtServerInit 只初始化一次
    nuxtServerInit(store, context) {
        // 初始化数据到store中
        // console.log('1：nuxtServerInit')
    }
}

//getters
export const getters = {
    // getNav(state) {
    //     return state.bNav ? '显示' : '隐藏'
    // }
}