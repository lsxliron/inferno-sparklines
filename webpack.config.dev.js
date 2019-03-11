const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: [
        require.resolve('inferno-dev-utils/webpackHotDevClient'),
        './demo/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js',
        library: 'ReactSparklines',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'inferno': 'inferno/dist/index.dev.esm.js',
        }
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
    devServer: {
		contentBase: "src/",
		historyApiFallback: true
    },
    plugins: [
		new HtmlWebpackPlugin(
			{
				template: "./demo/index.html",
				inject: "body"
			}
		),
		new CleanWebpackPlugin(
			["dist"], {
				verbose: true
            }
        )
    ]
}
