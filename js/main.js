var foo = require('./lib/foo.js');
var content = document.getElementById('content');

foo.run([ 3, 10, "foo", "bar", 42 ], function (err, results) {
  if (err) throw err;

  results.forEach(function (r) {
    content.innerHTML += ' ' + r;
  });
});