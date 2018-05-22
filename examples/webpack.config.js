const path = require( "path" );

module.exports = {
  mode  : "development",
  entry : "./src/docs.bundle.js",
  output: {
    path    : path.resolve( __dirname, "build" ),
    filename: "docs.js",
  },
  module: {
    rules: [ {
      test: /\.md$/,
      use : [
        `file-loader?name=docs.html`,
        `gfm-loader?href=gfm.css`,
        "extract-loader",
        "html-loader",
        "markdown-loader",
      ],
    } ],
  },
  optimization: {
    minimize: true,
  },
};
