module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@/assets/styles/config/_variables.scss"; @import "@/assets/styles/config/_mixins.scss";`
        }
      }
    }
};