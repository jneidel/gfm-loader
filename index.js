const loaderUtils = require( "loader-utils" );

module.exports = function gfmLoader( content ) {
  const query = loaderUtils.parseQuery( this.query );

  const gfmPath = query.gfm ?
    query.gfm :
    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css";

  const style = query.style ?
    `<link rel="stylesheet" type="text/css" href="${query.style}">` :
    null;

  const border = query.border === true ?
    `<style>
  html {
    display: flex;
    justify-content: center;
  }

  body {
    width: 100vw;
    max-width: 900px;
    padding: 40px;
    margin: 40px 0;
    border: 1px solid #e1e4e8;
    border-radius: 2px;
  }
</style>` :
    null;

  return `<head>
  <link rel="stylesheet" type="text/css" href="${gfmPath}">
  ${border ?  border : "" }
  ${style ? style : ""}
</head>
<body class="markdown-body">
  ${content}
</body>`;
};

