/* eslint-disable no-undef*/
module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-1']
				}
			},
			{
				test: /\.css$/, loader: 'style-loader!css-loader'
			},
			{
				test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png)\w*/, loader: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		port: 1314
	}
};
