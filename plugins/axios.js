export default function({ $axios, redirect, route, store }) {
    // 基本配置
    $axios.defaults.timeout = 10000;
    //请求拦截
    $axios.onRequest(req => {
        // console.log('请求拦截');
        // req.headers.token = '设置登录的token信息'
        return req;
    });
    //响应拦截
    $axios.onResponse(resp => {
        // console.log('响应拦截');
        return resp;
    });

    // 错误信息处理
    $axios.onError(error => {

    });
}