/**
 * 
 * Element-Ui
 * 使用前项目中请添加组件引用 yarn add element-ui
 * 引用后在nuxt.config.js中的plugin加入插件配置
 */
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

import { Tabs } from 'element-ui';
// 按需引用
Vue.use(Tabs);