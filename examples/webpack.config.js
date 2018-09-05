const path = require( "path" );

// Run example: $ npm run build

module.exports = {
  mode  : "development",
  entry : "./examples/src/docs.bundle.js",
  output: {
    path    : path.resolve( __dirname, "build" ),
    filename: "docs.js",
  },
  module: {
    rules: [ {
      test: /\.md$/,
      use : [
        `file-loader?name=docs.html`,
        `gfm-loader?gfm=github-markdown.min.css&style=docs.css`,
        "extract-loader",
        "html-loader",
        "markdown-loader",
      ],
    } ],
  },
  optimization: {
    minimize: true,
  },
  resolveLoader: {
    modules: [
      "node_modules",
      path.resolve( __dirname, "..", ".." )
      // Only works if root-dir is named gfm-loader
    ]
  }
};

