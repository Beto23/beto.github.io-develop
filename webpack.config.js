const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src');

//common plugins
const plugins = [
    new HtmlWebpackPlugin({
        hash: true,
        template: path.join(sourcePath, 'index.html'),
        filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
]

//common rules
const rules = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            query: {
                presets: ['stage-2','react'],
                plugins: ['transform-es2015-modules-commonjs']
            }
        }
    },
    {
        test: /\.(png|gif|jpe?g|svg|ico)$/,
        use: 'url-loader?limit=20480&name=images/[name]-[hash].[ext]',
    },
    {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        exclude: /node:modules/,
        use: 'url-loader?limit=100000&name=fonts/[name].[ext]'
    }
]

if(isProduction) {
  // Production plugins
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('style-[hash].css')
  );
  //Production Rules
  rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader',
        publicPath: '/dist'
      }),
    }
  );
} else {
    // Development plugins
    plugins.push(
        new DashboardPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:9000' })
    );

    // Development rules
    rules.push(
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    )
}

module.exports = {
    devtool: isProduction ? false : 'source-map',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins,
    devtool: "source-map",
    module: {
        rules
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        alias: {
            stylesComponents: path.resolve(__dirname, 'src/styles/components/'),
            stylesPages: path.resolve(__dirname, 'src/styles/pages/'),
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 9000,
        compress: isProduction,
        inline: !isProduction,
        host: '0.0.0.0',
        disableHostCheck: true,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            },
        },
    }
}