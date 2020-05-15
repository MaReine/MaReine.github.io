module.exports = {
  // 基本路径
  publicPath: "./",

  devServer: {
    port: 9002, // 端口号
    host: "0.0.0.0",
    open: false //配置自动启动浏览器
  },

  pluginOptions: {
    quasar: {
      theme: "ios"
    }
  },

  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar-framework[\\\/]/]
};
