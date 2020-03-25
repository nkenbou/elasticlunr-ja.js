module.exports = {
  mode: "production",
  entry: `./src/index.js`,
  output: {
    filename: "elasticlunr.min.js",
    library: "elasticlunr",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};
