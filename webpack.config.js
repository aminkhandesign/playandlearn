
const path  = require('path');

const settings = {
    mode:'development',
    entry: "./src/index.js",
    output: {
            filename:'bundle.js',
            path: path.resolve(__dirname,'public')
    },
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

module.exports = settings;
