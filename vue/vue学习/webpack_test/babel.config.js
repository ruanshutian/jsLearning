module.exports = {
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
        // "@babel/plugin-proposal-class-properties"
        //webpack调用babel-loader的时候，会先调用这个plugins插件来使用
    ]
}