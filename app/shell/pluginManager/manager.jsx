"use strict";

var Plugins = require('./plugins.json');

console.log("Hello from PluginsManager " + Plugins.id);

var PluginsManager = exports;

PluginsManager.getRegisteredPlugins = function () {
  return Plugins;
}
