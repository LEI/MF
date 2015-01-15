'use strict';

var ghost_modules = './node_modules/ghost/node_modules/';
var path = require('path');
var ghost = require('ghost');
var moment = require(ghost_modules + 'moment');

moment.locale('fr');

ghost({
  config: path.join(__dirname, 'config.js'),
  contentPath: path.join(__dirname, 'content')
})
  .then(function (ghostServer) {
    ghostServer.start();
  });
