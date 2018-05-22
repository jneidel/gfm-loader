const loaderUtils = require( "loader-utils" );

module.exports = function gfmLoader( content ) {
  const query = loaderUtils.parseQuery( this.query );

  const gfmPath = query.href ? query.href :
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css";

  return `<head>
<link rel="stylesheet" type="text/css" href="${gfmPath}">
</head>
<body class="markdown-body">
${content}</body>`;
};
