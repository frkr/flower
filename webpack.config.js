
module.exports = {
    mode: 'production',
    optimization: {
        minimize: false
    },
    performance: {
        hints: false
    },
    output: {
        path: __dirname +'/dist',
        filename: 'worker.js'
    },
    entry: './main.js',
    module: {
        rules: [
            {
                test: /\.md$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            name: (resourcePath) => {
                                if (resourcePath.endsWith('README.md')) {
                                    return 'envtype.d.ts';
                                }
                                return '[path][name].ts';
                            },
                        }
                    },
                    'block-loader',
                    'remark-loader',
                ]
            },
        ]
    },
    resolveLoader: {
        alias: {
            'block-loader': __dirname + '/block-loader.js'
        }
    },
    stats: {
        errorDetails: true
    }
};
