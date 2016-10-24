var path=require('path');
var webpack=require('webpack');
var extractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
	entry:['webpack/hot/dev-server',path.resolve(__dirname,'./app/main.js')],
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
		  {
		  	test:/\.js$/,
		  	exclude:/(node_modules|bower_componets)/,
		  	loader:'babel',
		  	query:{
		  		presets:['es2015','react']
		  	}
		  },
		  {
		  	test:/\.less$/,
			loader:extractTextPlugin.extract("css!less")
		  }
		]
	},
	plugins:[
           new extractTextPlugin("[name].css"),
           new webpack.HotModuleReplacementPlugin()
          
	]
};