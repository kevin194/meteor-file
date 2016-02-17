Package.describe({
  summary: "Simple file uploading for Meteor"
});

Package.onUse(function(api) {
  api.use(["ejson", "underscore"]);
  api.imply(["ejson", "underscore"]);
  api.addFiles(["meteor-file.js"], ["client", "server"]);
  api.export([
    'MeteorFile'
  ],['client', 'server']);
});
