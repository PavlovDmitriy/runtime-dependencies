const path = require('path');

module.exports = {
    entry: './src/index.ts',
    target: "node",
    mode: "development",
    devtool: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'get-runtime-dependencies.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
