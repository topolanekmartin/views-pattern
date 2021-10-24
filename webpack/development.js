const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./common")
const { WEBPACK_BUILD_DIR } = require('./constants');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, WEBPACK_BUILD_DIR),
        },
        compress: true,
        port: 3000,
    },
});
