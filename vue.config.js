module.exports = {
  devServer: {
    proxy: {
      "/api": {
        ws: false,
        target: "http://localhost:7001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
  // css: {
  //   loaderOptions: {
  //     css: {
  //       // options here will be passed to css-loader
  //     },
  //     postcss: {
  //       // options here will be passed to postcss-loader
  //       plugins: [require('postcss-px2rem')({
  //         remUnit: 75
  //       })]
  //     }
  //   }
  // }
}
