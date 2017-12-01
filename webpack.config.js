const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.(s?css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|svg)$/, loader: 'file-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/boilerplate/index.html'
        })
    ]
}