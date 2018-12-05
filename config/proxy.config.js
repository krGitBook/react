module.exports = {
  '/api': {
      target: 'http://optest04.krspace.cn', // 接口的域名
      secure: true,  // 如果是https接口，需要配置这个参数
      changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      pathRewrite: {
        '^/api': '/api'
      }
  },
};