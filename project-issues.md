# Project Issues


## #1 source-map on webpack.config.prod is not work
#### Try to use SourceMapDevToolPlugin
> look at: (https://webpack.js.org/configuration/devtool/)

> Use the SourceMapDevToolPlugin for a more fine grained configuration. See the source-map-loader to deal with existing source maps.


## #2 Generate an external css file with a hash in the filename  
#### this is not work with .less on webpack.config.prod
> Generate an external css file with a hash in the filename
new ExtractTextPlugin('[name].[contenthash].css'),

