'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _radium=require('radium');var _radium2=_interopRequireDefault(_radium);var _reactor=require('../dispatcher/reactor');var _reactor2=_interopRequireDefault(_reactor);var _getters=require('../data/getters');var _getters2=_interopRequireDefault(_getters);var _pluginCardRenderer=require('../render/pluginCardRenderer');var _pluginCardRenderer2=_interopRequireDefault(_pluginCardRenderer);var _renderPlugins=require('../render/renderPlugins');var _renderPlugins2=_interopRequireDefault(_renderPlugins);var _actions=require('../actions/actions');var _actions2=_interopRequireDefault(_actions);var _pluginStore=require('../stores/pluginStore');var _pluginStore2=_interopRequireDefault(_pluginStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var React=require('react');_reactor2.default.registerStores({'plugins':_pluginStore2.default});var PluginsRenderer=React.createClass({displayName:'PluginsRenderer',mixins:[_reactor2.default.ReactMixin],getInitialState:function getInitialState(){return{showPluginCards:true,selectedPluginName:''}},getDataBindings:function getDataBindings(){return{plugins:_getters2.default.plugins}},componentDidMount:function componentDidMount(){_actions2.default.mountRegisteredPlugins()},onClick:function onClick(){console.log('called onClick');this.setState({showPluginCards:false})},render:function render(){return React.createElement('div',null,React.createElement('h6',null,'This is a Simple reactjs application that supports plugins with nuclear-js.'),this.state.showPluginCards?React.createElement(_pluginCardRenderer2.default,{registeredplugins:this.state.plugins,onPluginSelection:this.onClick}):null,this.state.showPluginCards?null:React.createElement(_renderPlugins2.default,{selectedPlugin:this.state.selectedPluginName,registeredplugins:this.state.plugins}))}});exports.default=(0,_radium2.default)(PluginsRenderer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcENvbnRlbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGEseURBR0EsOEIsNkNBQ0EsOEMsK0NBQ0Esd0MsK0NBQ0EsZ0UscUVBQ0Esc0QsMkRBQ0EsMkMsK0NBQ0Esa0QseUlBUEEsR0FBSSxPQUFRLFFBQVEsT0FBUixDQUFaLENBU0Esa0JBQVEsY0FBUixDQUF1QixDQUNyQiwrQkFEcUIsQ0FBdkIsRUFJQSxHQUFJLGlCQUFrQixNQUFNLFdBQU4sQ0FBa0IsK0JBQ3RDLE9BQVEsQ0FBQyxrQkFBUSxVQUFULENBRDhCLENBR3RDLGdCQUFpQiwwQkFBVyxDQUMxQixNQUFPLENBQUUsZ0JBQWlCLElBQW5CLENBQXlCLG1CQUFvQixFQUE3QyxDQUNSLENBTHFDLENBT3RDLGVBUHNDLDJCQU9wQixDQUNoQixNQUFPLENBQ0wsUUFBUyxrQkFBUSxPQURaLENBR1IsQ0FYcUMsQ0FhdEMsa0JBQW1CLDRCQUFVLENBQzNCLGtCQUFRLHNCQUFSLEVBQ0QsQ0FmcUMsQ0FpQnRDLFFBQVMsa0JBQVUsQ0FDakIsUUFBUSxHQUFSLENBQVksZ0JBQVosRUFDQSxLQUFLLFFBQUwsQ0FBYyxDQUFFLGdCQUFpQixLQUFuQixDQUFkLENBQ0QsQ0FwQnFDLENBc0J0QyxPQUFRLGlCQUFXLENBQ2pCLE1BQ0UsZ0NBQ0UsNEdBREYsQ0FFRyxLQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTZCLGtEQUFvQixrQkFBbUIsS0FBSyxLQUFMLENBQVcsT0FBbEQsQ0FBMkQsa0JBQW1CLEtBQUssT0FBbkYsRUFBN0IsQ0FBOEgsSUFGakksQ0FHRyxLQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTZCLElBQTdCLENBQW9DLDZDQUFlLGVBQWdCLEtBQUssS0FBTCxDQUFXLGtCQUExQyxDQUE4RCxrQkFBbUIsS0FBSyxLQUFMLENBQVcsT0FBNUYsRUFIdkMsQ0FNSCxDQTlCcUMsQ0FBbEIsQ0FBdEIsQyxnQkFpQ2UscUJBQU8sZUFBUCxDIiwiZmlsZSI6ImFwcENvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbmltcG9ydCBSYWRpdW0gZnJvbSAncmFkaXVtJztcclxuaW1wb3J0IHJlYWN0b3IgZnJvbSAnLi4vZGlzcGF0Y2hlci9yZWFjdG9yJztcclxuaW1wb3J0IGdldHRlcnMgZnJvbSAnLi4vZGF0YS9nZXR0ZXJzJztcclxuaW1wb3J0IFBsdWdpbkNhcmRSZW5kZXJlciBmcm9tICcuLi9yZW5kZXIvcGx1Z2luQ2FyZFJlbmRlcmVyJztcclxuaW1wb3J0IFJlbmRlclBsdWdpbnMgZnJvbSAnLi4vcmVuZGVyL3JlbmRlclBsdWdpbnMnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMnO1xyXG5pbXBvcnQgUGx1Z2luU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3BsdWdpblN0b3JlJztcclxuXHJcbnJlYWN0b3IucmVnaXN0ZXJTdG9yZXMoe1xyXG4gICdwbHVnaW5zJzogUGx1Z2luU3RvcmUsXHJcbn0pO1xyXG5cclxudmFyIFBsdWdpbnNSZW5kZXJlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBtaXhpbnM6IFtyZWFjdG9yLlJlYWN0TWl4aW5dLFxyXG5cclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHsgc2hvd1BsdWdpbkNhcmRzOiB0cnVlLCBzZWxlY3RlZFBsdWdpbk5hbWU6ICcnIH07XHJcbiAgfSxcclxuXHJcbiAgZ2V0RGF0YUJpbmRpbmdzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGx1Z2luczogZ2V0dGVycy5wbHVnaW5zLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xyXG4gICAgYWN0aW9ucy5tb3VudFJlZ2lzdGVyZWRQbHVnaW5zKCk7XHJcbiAgfSxcclxuXHJcbiAgb25DbGljazogZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkIG9uQ2xpY2tcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BsdWdpbkNhcmRzOiBmYWxzZSB9KTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoNj5UaGlzIGlzIGEgU2ltcGxlIHJlYWN0anMgYXBwbGljYXRpb24gdGhhdCBzdXBwb3J0cyBwbHVnaW5zIHdpdGggbnVjbGVhci1qcy48L2g2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dQbHVnaW5DYXJkcyA/IDxQbHVnaW5DYXJkUmVuZGVyZXIgcmVnaXN0ZXJlZHBsdWdpbnM9e3RoaXMuc3RhdGUucGx1Z2luc30gb25QbHVnaW5TZWxlY3Rpb249e3RoaXMub25DbGlja30gLz4gOiBudWxsIH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UGx1Z2luQ2FyZHMgPyBudWxsIDogPFJlbmRlclBsdWdpbnMgc2VsZWN0ZWRQbHVnaW49e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbHVnaW5OYW1lfSByZWdpc3RlcmVkcGx1Z2lucz17dGhpcy5zdGF0ZS5wbHVnaW5zfSAvPiB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBsdWdpbnNSZW5kZXJlcik7XHJcbiJdfQ==