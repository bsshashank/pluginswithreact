'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _nuclearJs=require('nuclear-js');var _manager=require('../pluginManager/manager');var _manager2=_interopRequireDefault(_manager);var _actionTypes=require('../actionTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}// import Plugin from '../../plugins/reactwithnuclear/pluginContent'
var RegisteredPlugins=_manager2.default.getRegisteredPlugins();console.log('Registered Plugins '+JSON.stringify(RegisteredPlugins));console.log('Plugins '+RegisteredPlugins);/*var requiredPackages = function (plugins) {
  plugins.map(function(plugin) {
    import plugin from '../../plugins/' + plugin;
  })
}*/exports.default=(0,_nuclearJs.Store)({getInitialState:function getInitialState(){return(0,_nuclearJs.toImmutable)({components:RegisteredPlugins})},initialize:function initialize(){this.on(_actionTypes.REGISTER_COMPONENT,registerComponent);this.on(_actionTypes.MOUNT_COMPONENT,mountComponent)}});function registerComponent(state,_ref){var component=_ref.component;return state.concat(component)}function mountComponent(state){return state.get('components')}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudFN0b3JlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic0VBQUEscUNBQ0EsaUQsK0NBQ0EsMkMsa0ZBS0E7QUFFQSxHQUFJLG1CQUFvQixrQkFBZSxvQkFBZixFQUF4QixDQUNBLFFBQVEsR0FBUixDQUFZLHNCQUF3QixLQUFLLFNBQUwsQ0FBZSxpQkFBZixDQUFwQyxFQUNBLFFBQVEsR0FBUixDQUFZLFdBQWEsaUJBQXpCLEVBRUE7Ozs7bUJBTWUscUJBQU0sQ0FDbkIsZUFEbUIsMkJBQ0QsQ0FDZCxNQUFPLDJCQUFZLENBQ2pCLFdBQVcsaUJBRE0sQ0FBWixDQUdSLENBTGdCLENBT2pCLFVBUGlCLHNCQU9KLENBQ1gsS0FBSyxFQUFMLGlDQUE0QixpQkFBNUIsRUFDQSxLQUFLLEVBQUwsOEJBQXlCLGNBQXpCLENBQ0QsQ0FWZ0IsQ0FBTixDLENBYWIsUUFBUyxrQkFBVCxDQUEyQixLQUEzQixNQUFpRCxJQUFiLFVBQWEsTUFBYixTQUFhLENBQy9DLE1BQU8sT0FBTSxNQUFOLENBQWEsU0FBYixDQUNSLENBRUQsUUFBUyxlQUFULENBQXdCLEtBQXhCLENBQStCLENBQzdCLE1BQU8sT0FBTSxHQUFOLENBQVUsWUFBVixDQUNSIiwiZmlsZSI6ImNvbXBvbmVudFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUsIHRvSW1tdXRhYmxlIH0gZnJvbSAnbnVjbGVhci1qcydcclxuaW1wb3J0IFBsdWdpbnNNYW5hZ2VyIGZyb20gJy4uL3BsdWdpbk1hbmFnZXIvbWFuYWdlcidcclxuaW1wb3J0IHtcclxuICBSRUdJU1RFUl9DT01QT05FTlQsXHJcbiAgTU9VTlRfQ09NUE9ORU5ULFxyXG59IGZyb20gJy4uL2FjdGlvblR5cGVzJ1xyXG5cclxuLy8gaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi9wbHVnaW5zL3JlYWN0d2l0aG51Y2xlYXIvcGx1Z2luQ29udGVudCdcclxuXHJcbnZhciBSZWdpc3RlcmVkUGx1Z2lucyA9IFBsdWdpbnNNYW5hZ2VyLmdldFJlZ2lzdGVyZWRQbHVnaW5zKCk7XHJcbmNvbnNvbGUubG9nKFwiUmVnaXN0ZXJlZCBQbHVnaW5zIFwiICsgSlNPTi5zdHJpbmdpZnkoUmVnaXN0ZXJlZFBsdWdpbnMpKTtcclxuY29uc29sZS5sb2coXCJQbHVnaW5zIFwiICsgUmVnaXN0ZXJlZFBsdWdpbnMpO1xyXG5cclxuLyp2YXIgcmVxdWlyZWRQYWNrYWdlcyA9IGZ1bmN0aW9uIChwbHVnaW5zKSB7XHJcbiAgcGx1Z2lucy5tYXAoZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICBpbXBvcnQgcGx1Z2luIGZyb20gJy4uLy4uL3BsdWdpbnMvJyArIHBsdWdpbjtcclxuICB9KVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcclxuICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgIHJldHVybiB0b0ltbXV0YWJsZSh7XHJcbiAgICAgICAgY29tcG9uZW50czpSZWdpc3RlcmVkUGx1Z2luc1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICB0aGlzLm9uKFJFR0lTVEVSX0NPTVBPTkVOVCwgcmVnaXN0ZXJDb21wb25lbnQpO1xyXG4gICAgICB0aGlzLm9uKE1PVU5UX0NPTVBPTkVOVCwgbW91bnRDb21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50KHN0YXRlLCB7IGNvbXBvbmVudCB9KSB7XHJcbiAgICByZXR1cm4gc3RhdGUuY29uY2F0KGNvbXBvbmVudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3VudENvbXBvbmVudChzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmdldCgnY29tcG9uZW50cycpO1xyXG4gIH1cclxuIl19