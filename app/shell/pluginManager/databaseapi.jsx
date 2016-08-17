var jsonfile = require('jsonfile');
var file = './app/shell/pluginManager/plugins.json';

var DatabaseApi = exports;

DatabaseApi.savePlugin = function(plugin){
  jsonfile.readFile(file, function(err, obj) {
    if(err)
      console.log("error reading plugin configuration " + err);
    console.dir("json from file " + JSON.stringify(obj));
  })
}
