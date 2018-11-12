//proxy配置
module.exports = {
    devServer: {
        proxy: {
            //上面这个是预留的，也不知道具体咋用
            '/api': {
                target: 'http://127.0.0.1:3000',
                ws: true, //开启websocket代理
                changeOrigin: true, //虚拟服务器收发请求，解决跨域
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            '/users': {
                target: 'http://127.0.0.1:3000',
                ws: true, //开启websocket代理
                changeOrigin: true, //虚拟服务器收发请求，解决跨域
                pathRewrite: {
                    '^/users': '/users'
                }
            }
        }
    }
}
