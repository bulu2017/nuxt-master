import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

export default ({
    app,
    store
}) => {
    app.i18n = new VueI18n({
        locale: store.state.locale, // 设置语言
        fallbackLocale: 'zh',
        messages: {
            'en': require("@/plugins/locale/lang/en_us.json"),
            'zh': require("@/plugins/locale/lang/zh_cn.json")
        } // 设置地区信息
    });
    app.i18n.path = (link) => {
        // 如果是默认语言，就省略
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`;
        }
        return `/${app.i18n.locale}/${link}`;
    }
}