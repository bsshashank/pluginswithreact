"use strict";Object.defineProperty(exports,"__esModule",{value:true});var React=require("react");var RenderPlugins=React.createClass({displayName:"RenderPlugins",render:function render(){console.log("props from renderplugins "+JSON.stringify(this.props));console.log("plugins from renderplugins "+JSON.stringify(this.props.registeredplugins));return React.createElement("div",{id:"injectedplugins"},this.props.registeredplugins.map(function(plugin){console.log("component "+plugin);console.log("component name "+plugin.get("name"));// console.log("componentname " + component._root.entries[0][1]);
return React.createElement(require("../plugins/"+plugin.get("name")+"/pluginContent"))}))}});exports.default=RenderPlugins;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcnBsdWdpbnMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGEseURBRUEsR0FBSSxPQUFRLFFBQVEsT0FBUixDQUFaLENBRUEsR0FBSSxlQUFnQixNQUFNLFdBQU4sQ0FBa0IsNkJBQ3BDLE9BQVEsaUJBQVcsQ0FDakIsUUFBUSxHQUFSLENBQVksNEJBQThCLEtBQUssU0FBTCxDQUFlLEtBQUssS0FBcEIsQ0FBMUMsRUFDQSxRQUFRLEdBQVIsQ0FBWSw4QkFBZ0MsS0FBSyxTQUFMLENBQWUsS0FBSyxLQUFMLENBQVcsaUJBQTFCLENBQTVDLEVBQ0EsTUFDRSw0QkFBSyxHQUFHLGlCQUFSLEVBQ0ksS0FBSyxLQUFMLENBQVcsaUJBQVgsQ0FBNkIsR0FBN0IsQ0FBaUMsU0FBUyxNQUFULENBQWlCLENBQ2hELFFBQVEsR0FBUixDQUFZLGFBQWUsTUFBM0IsRUFDQSxRQUFRLEdBQVIsQ0FBWSxrQkFBb0IsT0FBTyxHQUFQLENBQVcsTUFBWCxDQUFoQyxFQUNBO0FBQ0EsTUFBTyxPQUFNLGFBQU4sQ0FBb0IsUUFBUSxjQUFnQixPQUFPLEdBQVAsQ0FBVyxNQUFYLENBQWhCLENBQXFDLGdCQUE3QyxDQUFwQixDQUNSLENBTEQsQ0FESixDQVNILENBZG1DLENBQWxCLENBQXBCLEMsZ0JBaUJlLGEiLCJmaWxlIjoicmVuZGVycGx1Z2lucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuXHJcbnZhciBSZW5kZXJQbHVnaW5zID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb3BzIGZyb20gcmVuZGVycGx1Z2lucyBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpKTtcclxuICAgIGNvbnNvbGUubG9nKFwicGx1Z2lucyBmcm9tIHJlbmRlcnBsdWdpbnMgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnJlZ2lzdGVyZWRwbHVnaW5zKSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiaW5qZWN0ZWRwbHVnaW5zXCI+e1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5yZWdpc3RlcmVkcGx1Z2lucy5tYXAoZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IFwiICsgcGx1Z2luKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgbmFtZSBcIiArIHBsdWdpbi5nZXQoJ25hbWUnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29tcG9uZW50bmFtZSBcIiArIGNvbXBvbmVudC5fcm9vdC5lbnRyaWVzWzBdWzFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVxdWlyZSgnLi4vcGx1Z2lucy8nICsgcGx1Z2luLmdldCgnbmFtZScpICsgJy9wbHVnaW5Db250ZW50JykpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJQbHVnaW5zO1xyXG4iXX0=