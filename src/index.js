const elasticlunr = require("./elasticlunr.js");
require("./lunr.stemmer.support.js")(elasticlunr);
require("./tinyseg.js")(elasticlunr);
require("./lunr.ja.js")(elasticlunr);

elasticlunr.Index.load = function(index) {
  var idx = elasticlunr(function() {
    this.use(elasticlunr.ja);
    index.fields.forEach(f => {
      this.addField(f);
    });
    this.setRef(index.ref);
  });
  Object.keys(index.documentStore.docs).forEach(key => {
    idx.addDoc(index.documentStore.docs[key]);
  });
  return idx;
};

module.exports = elasticlunr;
