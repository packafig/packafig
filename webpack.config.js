const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './client/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css',
            },
        ],
    },
};
