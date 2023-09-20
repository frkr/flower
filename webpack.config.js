
module.exports = {
	mode: 'development',
	optimization: {
		minimize: false
	},
	performance: {
		hints: false
	},
	output: {
		path: __dirname + '/dist',
		publicPath: 'dist',
		filename:  'worker.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.md$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: true,
							name: '../[path][name].ts',
						}
					},
					'block-loader',
					'remark-loader',
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.md']
	},
	resolveLoader: {
		alias: {
			'block-loader': __dirname + '/block-loader.js'
		}
	}
};
