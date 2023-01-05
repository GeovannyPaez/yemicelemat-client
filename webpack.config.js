const path = require('path');
const htmlWebpackPlugin= require('html-webpack-plugin');
const miniCssExtractPlugin= require('mini-css-extract-plugin');
const Dotevn= require('dotenv-webpack');

module.exports={
    entry:'src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath: '/',
        clean:true
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/, 
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },{
                test: /\.(sa|sc|c)ss$/i,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html',
            filename:'/index.html'
        }),
        new miniCssExtractPlugin({
            filename:'[name].css'
        }),
        new Dotevn(),
        
    ],
    optimization:{
        minimize:true
    }
}
