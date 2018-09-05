const loaderUtils = require( "loader-utils" );

module.exports = function gfmLoader( content ) {
  const query = loaderUtils.parseQuery( this.query );

  const gfmPath = query.gfm ?
    query.gfm :
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css";

  const style = query.style ?
    `<link rel="stylesheet" type="text/css" href="${query.style}">` :
    null;

  return `<head>
  <link rel="stylesheet" type="text/css" href="${gfmPath}">
  ${style ? style : ""}
</head>
<body class="markdown-body">
  ${content}
</body>`;
};

