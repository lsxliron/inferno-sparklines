const CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, 'src/Sparklines.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        library: 'ReactSparklines',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
        
    module: {
        rules:[{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                babelrc: true
            }
        }]
    },
    plugins: [
		new CleanWebpackPlugin(
			["dist"], {
				verbose: true
            }
        )
    ]
}
