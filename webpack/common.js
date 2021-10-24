const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { WEBPACK_BUILD_DIR } = require('./constants');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, WEBPACK_BUILD_DIR),
        filename: "[name].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
        }),
    ],
};
