<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ $t("name") }}
      </h1>
      <div class="links">
        <a-button type="primary">
          {{ "18601668063" | HideMobile }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  middleware({ store, route, redirect, params, query }) {
    // console.log("2:middleware page 组件独享前置守卫");
  },
  beforeRouteLeave(to, from, next) {
    // console.log('组件独享后置守卫');
    next(true);
  },
  // 参数的有效性校验等
  validate({ params, query }) {
    // console.log("3:validate pages ", params, query);
    return true;
  },
  // 读取数据，返回给组件
  asyncData(context) {
    // 异步业务逻辑，读取服务端数据
    // console.log("4:asyncData");
    return {
      a: 1
    };
  },
  // 读取数据 返回vuex
  fetch({ store }) {
    // console.log("5:fetch");
    // 异步业务逻辑，读取服务端数据提交vuex
  },
  data() {
    return {
      b: 234
    };
  },
  // 跑在服务器端SSR 与 客户端 CSR的钩子
  beforeCreate() {
    // console.log('beforeCreate')
  },
  // 跑在服务器端SSR 与 客户端 CSR的钩子
  created() {
    // console.log('created')
    // 自定义logo输出
    // console.log(this)
  },
  // 跑在客户端的钩子
  beforeMount() {
    // console.log('beforeMount')
    // this.$log.pretty('测试', '描述信息', 'primary')
    // console.log(this.$tools.Md5('jajahfaihsdfu'))
  },
  mounted() {
    // console.log("mounted");
  },
  beforeUpdate() {
    // console.log('beforeUpdate')
  },
  updated() {
    // console.log('updated')
  },
  // transition:'动画名'
  head(){
    return this.$seo('首页 - 爱拼物流','爱拼物流，爱拼拼箱','爱拼物流科技有限公司',[])
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
