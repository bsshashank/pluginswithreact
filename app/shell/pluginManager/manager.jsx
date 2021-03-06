"use strict";

var Plugins = require('./plugins.json');
var DatabaseApi = require('./databaseapi');

var PluginsManager = exports;

PluginsManager.getRegisteredPlugins = function () {
  return Plugins;
}

PluginsManager.registerNewPlugin = function(plugin) {
  DatabaseApi.savePlugin(plugin);
}
