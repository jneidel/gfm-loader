# gfm-loader

> Webpack loader to apply gfm styles to html transformed via markdown-loader

[![License MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/jneidel/gfm-loader/blob/master/license)
[![Npm Downloads](https://img.shields.io/npm/dw/gfm-loader.svg?style=flat-square)](https://www.npmjs.com/package/gfm-loader)

Webpack loader to wrap markdown which has been been transformed to html in a `<body>` tag and apply gfm (github flavored markdown) styles.

## Install

[![Npm Version](https://img.shields.io/npm/v/gfm-loader.svg?style=flat-square)](https://www.npmjs.com/package/gfm-loader)

```
$ npm install gfm-loader
```

## Usage

In webpack config (read loaders from bottom to top):

```js
{
  rules: [
    {
      test: /\.md$/,
      use : [
        `file-loader?name=<output-path>`, // Save to given path
        `gfm-loader`, // Wrap html in body
        "extract-loader", // Extract html
        "html-loader", // Load html
        "markdown-loader", // Transfrom md -> html
      ]
    }
  ]
}
```

## API

### gfm-loader[?href=path]

**href:**

Default: `https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css`

Pass the `href` value that will be set as stylesheet source.

```js
`gfm-loader?href=http://gfm.com` // Sample url
```

Can be local, eg. for offline usage:

```js
`gfm-loader?href=../css/gfm.css`
```

## Example

See [`examples/webpack.config.js`](examples/webpack.config.js).

## Related

- [setup-webpack](https://github.com/jneidel/setup-webpack) - Simplifies eg. markdown transpilation; the module this loader was built for

## License

MIT © [Jonathan Neidel](https://jneidel.com)
