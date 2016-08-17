'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _radium=require('radium');var _radium2=_interopRequireDefault(_radium);var _reactor=require('./reactor');var _reactor2=_interopRequireDefault(_reactor);var _getters=require('./getters');var _getters2=_interopRequireDefault(_getters);var _pluginCardRenderer=require('./pluginCardRenderer');var _pluginCardRenderer2=_interopRequireDefault(_pluginCardRenderer);var _renderPlugins=require('./renderPlugins');var _renderPlugins2=_interopRequireDefault(_renderPlugins);var _actions=require('./actions');var _actions2=_interopRequireDefault(_actions);var _pluginStore=require('./stores/pluginStore');var _pluginStore2=_interopRequireDefault(_pluginStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var React=require('react');_reactor2.default.registerStores({'plugins':_pluginStore2.default});var PluginsRenderer=React.createClass({displayName:'PluginsRenderer',mixins:[_reactor2.default.ReactMixin],getInitialState:function getInitialState(){return{showPluginCards:true,selectedPluginName:''}},getDataBindings:function getDataBindings(){return{plugins:_getters2.default.plugins}},componentDidMount:function componentDidMount(){_actions2.default.mountRegisteredPlugins()},onClick:function onClick(){console.log('called onClick');this.setState({showPluginCards:false})},render:function render(){return React.createElement('div',null,React.createElement('h6',null,'This is a Simple reactjs application that supports plugins with nuclear-js.'),this.state.showPluginCards?React.createElement(_pluginCardRenderer2.default,{registeredplugins:this.state.plugins,onPluginSelection:this.onClick}):null,this.state.showPluginCards?null:React.createElement(_renderPlugins2.default,{selectedPlugin:this.state.selectedPluginName,registeredplugins:this.state.plugins}))}});exports.default=(0,_radium2.default)(PluginsRenderer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RDb250ZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhLHlEQUdBLDhCLDZDQUNBLGtDLCtDQUNBLGtDLCtDQUNBLHdELHFFQUNBLDhDLDJEQUNBLGtDLCtDQUNBLGlELHlJQVBBLEdBQUksT0FBUSxRQUFRLE9BQVIsQ0FBWixDQVNBLGtCQUFRLGNBQVIsQ0FBdUIsQ0FDckIsK0JBRHFCLENBQXZCLEVBSUEsR0FBSSxpQkFBa0IsTUFBTSxXQUFOLENBQWtCLCtCQUN0QyxPQUFRLENBQUMsa0JBQVEsVUFBVCxDQUQ4QixDQUd0QyxnQkFBaUIsMEJBQVcsQ0FDMUIsTUFBTyxDQUFFLGdCQUFpQixJQUFuQixDQUF5QixtQkFBb0IsRUFBN0MsQ0FDUixDQUxxQyxDQU90QyxlQVBzQywyQkFPcEIsQ0FDaEIsTUFBTyxDQUNMLFFBQVMsa0JBQVEsT0FEWixDQUdSLENBWHFDLENBYXRDLGtCQUFtQiw0QkFBVSxDQUMzQixrQkFBUSxzQkFBUixFQUNELENBZnFDLENBaUJ0QyxRQUFTLGtCQUFVLENBQ2pCLFFBQVEsR0FBUixDQUFZLGdCQUFaLEVBQ0EsS0FBSyxRQUFMLENBQWMsQ0FBRSxnQkFBaUIsS0FBbkIsQ0FBZCxDQUNELENBcEJxQyxDQXNCdEMsT0FBUSxpQkFBVyxDQUNqQixNQUNFLGdDQUNFLDRHQURGLENBRUcsS0FBSyxLQUFMLENBQVcsZUFBWCxDQUE2QixrREFBb0Isa0JBQW1CLEtBQUssS0FBTCxDQUFXLE9BQWxELENBQTJELGtCQUFtQixLQUFLLE9BQW5GLEVBQTdCLENBQThILElBRmpJLENBR0csS0FBSyxLQUFMLENBQVcsZUFBWCxDQUE2QixJQUE3QixDQUFvQyw2Q0FBZSxlQUFnQixLQUFLLEtBQUwsQ0FBVyxrQkFBMUMsQ0FBOEQsa0JBQW1CLEtBQUssS0FBTCxDQUFXLE9BQTVGLEVBSHZDLENBTUgsQ0E5QnFDLENBQWxCLENBQXRCLEMsZ0JBaUNlLHFCQUFPLGVBQVAsQyIsImZpbGUiOiJ0ZXN0Q29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nO1xyXG5pbXBvcnQgcmVhY3RvciBmcm9tICcuL3JlYWN0b3InO1xyXG5pbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnO1xyXG5pbXBvcnQgUGx1Z2luQ2FyZFJlbmRlcmVyIGZyb20gJy4vcGx1Z2luQ2FyZFJlbmRlcmVyJztcclxuaW1wb3J0IFJlbmRlclBsdWdpbnMgZnJvbSAnLi9yZW5kZXJQbHVnaW5zJztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IFBsdWdpblN0b3JlIGZyb20gJy4vc3RvcmVzL3BsdWdpblN0b3JlJztcclxuXHJcbnJlYWN0b3IucmVnaXN0ZXJTdG9yZXMoe1xyXG4gICdwbHVnaW5zJzogUGx1Z2luU3RvcmUsXHJcbn0pO1xyXG5cclxudmFyIFBsdWdpbnNSZW5kZXJlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBtaXhpbnM6IFtyZWFjdG9yLlJlYWN0TWl4aW5dLFxyXG5cclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHsgc2hvd1BsdWdpbkNhcmRzOiB0cnVlLCBzZWxlY3RlZFBsdWdpbk5hbWU6ICcnIH07XHJcbiAgfSxcclxuXHJcbiAgZ2V0RGF0YUJpbmRpbmdzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGx1Z2luczogZ2V0dGVycy5wbHVnaW5zLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xyXG4gICAgYWN0aW9ucy5tb3VudFJlZ2lzdGVyZWRQbHVnaW5zKCk7XHJcbiAgfSxcclxuXHJcbiAgb25DbGljazogZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkIG9uQ2xpY2tcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BsdWdpbkNhcmRzOiBmYWxzZSB9KTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoNj5UaGlzIGlzIGEgU2ltcGxlIHJlYWN0anMgYXBwbGljYXRpb24gdGhhdCBzdXBwb3J0cyBwbHVnaW5zIHdpdGggbnVjbGVhci1qcy48L2g2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dQbHVnaW5DYXJkcyA/IDxQbHVnaW5DYXJkUmVuZGVyZXIgcmVnaXN0ZXJlZHBsdWdpbnM9e3RoaXMuc3RhdGUucGx1Z2luc30gb25QbHVnaW5TZWxlY3Rpb249e3RoaXMub25DbGlja30gLz4gOiBudWxsIH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UGx1Z2luQ2FyZHMgPyBudWxsIDogPFJlbmRlclBsdWdpbnMgc2VsZWN0ZWRQbHVnaW49e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbHVnaW5OYW1lfSByZWdpc3RlcmVkcGx1Z2lucz17dGhpcy5zdGF0ZS5wbHVnaW5zfSAvPiB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFBsdWdpbnNSZW5kZXJlcik7XHJcbiJdfQ==