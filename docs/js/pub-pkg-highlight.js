/*
 * pub-pkg-highlight.js
 *
 * browserify entry point - mainly to initialize highlight.js
 * also supports pub-generator 'update-view' events
 *
 * copyright 2015-2019, Jurgen Leschner - github.com/jldec - MIT license
 *
 * for highlight.js please see included static/js/LICENSE-HIGHLIGHT
 * or visit https://github.com/highlightjs/highlight.js
 */

hljs.initHighlightingOnLoad();

window.onGenerator = function(generator) {
  generator.on('update-view', function(path, query, hash, window, $html) {
    $('pre code', $html).each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });
};
