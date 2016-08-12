"use strict";

var Plugins = require('./plugins.json');
var actions = require('../actions');

console.log("Hello from PluginsManager " + Plugins.id);

var PluginsManager = exports;

PluginsManager.getRegisteredPlugins = function () {
  return Plugins;
}
