'use strict';Object.defineProperty(exports,'__esModule',{value:true});var React=require('react');var PluginCard=require('./common/pluginCard');/*var PluginCardRenderer = React.createClass({
render: function() {
return(
<div>
{
this.props.registeredplugins.map(function(plugin) {
return <PluginCard cardTitle={plugin.get('cardTitle')} cardText={plugin.get('cardText')} cardActionsButtonText={plugin.get('cardActionsButtonText')} />
})
}
</div>
);
}
});*/var PluginCardRenderer=React.createClass({displayName:'PluginCardRenderer',render:function render(){var createPluginCard=function createPluginCard(plugin){console.log('plugin in PluginCardRenderer '+plugin);return React.createElement(PluginCard,{onPluginClick:this.props.onPluginSelection,pluginName:plugin.get('name'),cardTitle:plugin.get('cardTitle'),cardText:plugin.get('cardText'),cardActionsButtonText:plugin.get('cardActionsButtonText')})};return React.createElement('div',null,this.props.registeredplugins.map(createPluginCard,this))}});exports.default=PluginCardRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbkNhcmRSZW5kZXJlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYSx5REFFQSxHQUFJLE9BQVEsUUFBUSxPQUFSLENBQVosQ0FDQSxHQUFJLFlBQWEsUUFBUSxxQkFBUixDQUFqQixDQUVBOzs7Ozs7Ozs7Ozs7S0FjQSxHQUFJLG9CQUFxQixNQUFNLFdBQU4sQ0FBa0Isa0NBQ3pDLE9BQVEsaUJBQVcsQ0FDakIsR0FBSSxrQkFBbUIsUUFBbkIsaUJBQW1CLENBQVMsTUFBVCxDQUFnQixDQUNyQyxRQUFRLEdBQVIsQ0FBWSxnQ0FBa0MsTUFBOUMsRUFDQSxNQUFRLHFCQUFDLFVBQUQsRUFBWSxjQUFlLEtBQUssS0FBTCxDQUFXLGlCQUF0QyxDQUF5RCxXQUFZLE9BQU8sR0FBUCxDQUFXLE1BQVgsQ0FBckUsQ0FBeUYsVUFBVyxPQUFPLEdBQVAsQ0FBVyxXQUFYLENBQXBHLENBQTZILFNBQVUsT0FBTyxHQUFQLENBQVcsVUFBWCxDQUF2SSxDQUErSixzQkFBdUIsT0FBTyxHQUFQLENBQVcsdUJBQVgsQ0FBdEwsRUFDVCxDQUhELENBSUEsTUFDRSxnQ0FFSSxLQUFLLEtBQUwsQ0FBVyxpQkFBWCxDQUE2QixHQUE3QixDQUFpQyxnQkFBakMsQ0FBa0QsSUFBbEQsQ0FGSixDQU1MLENBYjBDLENBQWxCLENBQXpCLEMsZ0JBZ0JlLGtCIiwiZmlsZSI6InBsdWdpbkNhcmRSZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFBsdWdpbkNhcmQgPSByZXF1aXJlKCcuL2NvbW1vbi9wbHVnaW5DYXJkJyk7XHJcblxyXG4vKnZhciBQbHVnaW5DYXJkUmVuZGVyZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbnJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbnJldHVybihcclxuPGRpdj5cclxue1xyXG50aGlzLnByb3BzLnJlZ2lzdGVyZWRwbHVnaW5zLm1hcChmdW5jdGlvbihwbHVnaW4pIHtcclxucmV0dXJuIDxQbHVnaW5DYXJkIGNhcmRUaXRsZT17cGx1Z2luLmdldCgnY2FyZFRpdGxlJyl9IGNhcmRUZXh0PXtwbHVnaW4uZ2V0KCdjYXJkVGV4dCcpfSBjYXJkQWN0aW9uc0J1dHRvblRleHQ9e3BsdWdpbi5nZXQoJ2NhcmRBY3Rpb25zQnV0dG9uVGV4dCcpfSAvPlxyXG59KVxyXG59XHJcbjwvZGl2PlxyXG4pO1xyXG59XHJcbn0pOyovXHJcblxyXG52YXIgUGx1Z2luQ2FyZFJlbmRlcmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY3JlYXRlUGx1Z2luQ2FyZCA9IGZ1bmN0aW9uKHBsdWdpbil7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicGx1Z2luIGluIFBsdWdpbkNhcmRSZW5kZXJlciBcIiArIHBsdWdpbik7XHJcbiAgICAgIHJldHVybiAoPFBsdWdpbkNhcmQgb25QbHVnaW5DbGljaz17dGhpcy5wcm9wcy5vblBsdWdpblNlbGVjdGlvbn0gcGx1Z2luTmFtZT17cGx1Z2luLmdldCgnbmFtZScpfSBjYXJkVGl0bGU9e3BsdWdpbi5nZXQoJ2NhcmRUaXRsZScpfSBjYXJkVGV4dD17cGx1Z2luLmdldCgnY2FyZFRleHQnKX0gY2FyZEFjdGlvbnNCdXR0b25UZXh0PXtwbHVnaW4uZ2V0KCdjYXJkQWN0aW9uc0J1dHRvblRleHQnKX0gLz4pO1xyXG4gICAgfTtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnJlZ2lzdGVyZWRwbHVnaW5zLm1hcChjcmVhdGVQbHVnaW5DYXJkLHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsdWdpbkNhcmRSZW5kZXJlcjtcclxuIl19