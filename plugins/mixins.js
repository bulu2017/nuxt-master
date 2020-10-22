import Vue from 'vue';
/**
 * 全局方法
 */
import * as tools from '../assets/lib/tools'; // 工具类
Object.keys(tools).forEach(key => Vue.filter(key, tools[key])); // 过滤器
Vue.prototype.$tools = tools; // 工具类属性方法注册
/**
 * 全局指令引入
 */

/**
 * 全局组件引入
 */

/**
 * SEO 
 */
Vue.mixin({
    methods: {
        $seo(title, keywords = '', description = '', payload = []) {
            return {
                title,
                meta: [
                    { hid: 'keywords', name: 'keywords', keywords },
                    { hid: 'description', name: 'description', description }
                ].concat(payload)
            }
        }
    }
})