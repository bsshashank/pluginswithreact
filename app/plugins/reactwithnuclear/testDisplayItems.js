'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _radium=require('radium');var _radium2=_interopRequireDefault(_radium);var _reactor=require('./reactor');var _reactor2=_interopRequireDefault(_reactor);var _getters=require('./getters');var _getters2=_interopRequireDefault(_getters);var _testPush=require('./testPush');var _testPush2=_interopRequireDefault(_testPush);var _actions=require('./actions');var _actions2=_interopRequireDefault(_actions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var React=require('react');var ItemList=require('./testItemList');var itemslist=[{id:'1',name:'test'}];var TestDisplayItems=React.createClass({displayName:'TestDisplayItems',mixins:[_reactor2.default.ReactMixin],getDataBindings:function getDataBindings(){return{items:_getters2.default.items}},getInitialState:function getInitialState(){return{// items: itemslist,
newItem:{id:'',name:''}}},setItemState:function setItemState(event){var field=event.target.name;var value=event.target.value;this.state.newItem[field]=value;return this.setState({newItem:this.state.newItem})},onAddItem:function onAddItem(event){event.preventDefault();var id=Math.floor(Math.random()*1000+1);//itemslist.push({id:id, name:this.state.newItem.name});
//this.setState({newItem: {id:'', name:''}});
//return this.setState({ items: itemslist });
var newItem={id:id,name:'inserted on click'};_actions2.default.addItem({id:id,name:this.state.newItem.name});this.setState({newItem:{id:'',name:''}})},render:function render(){return(// <ItemList newItem={this.state.newItem} items={this.state.items} onClick={this.onAddItem} onChange={this.setItemState}/>
React.createElement('div',null,React.createElement(_testPush2.default,{newItem:this.state.newItem,onClick:this.onAddItem,onChange:this.setItemState}),React.createElement(ItemList,{items:this.state.items})))}});exports.default=(0,_radium2.default)(TestDisplayItems);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3REaXNwbGF5SXRlbXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGEseURBSUEsOEIsNkNBQ0Esa0MsK0NBQ0Esa0MsK0NBQ0Esb0MsaURBQ0Esa0MsaUlBTkEsR0FBSSxPQUFRLFFBQVEsT0FBUixDQUFaLENBQ0EsR0FBSSxVQUFXLFFBQVEsZ0JBQVIsQ0FBZixDQU9BLEdBQUksV0FBWSxDQUFDLENBQUUsR0FBRyxHQUFMLENBQVUsS0FBSyxNQUFmLENBQUQsQ0FBaEIsQ0FFQSxHQUFJLGtCQUFtQixNQUFNLFdBQU4sQ0FBa0IsZ0NBQ3ZDLE9BQVEsQ0FBQyxrQkFBUSxVQUFULENBRCtCLENBR3ZDLGVBSHVDLDJCQUdyQixDQUNoQixNQUFPLENBQ0wsTUFBTyxrQkFBUSxLQURWLENBSVIsQ0FSc0MsQ0FVdkMsZ0JBQWlCLDBCQUFXLENBQzFCLE1BQU8sQ0FDTDtBQUNBLFFBQVMsQ0FBQyxHQUFHLEVBQUosQ0FBUSxLQUFLLEVBQWIsQ0FGSixDQUlSLENBZnNDLENBaUJ2QyxhQUFjLHNCQUFTLEtBQVQsQ0FBZ0IsQ0FDNUIsR0FBSSxPQUFRLE1BQU0sTUFBTixDQUFhLElBQXpCLENBQ0EsR0FBSSxPQUFRLE1BQU0sTUFBTixDQUFhLEtBQXpCLENBQ0EsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixLQUFuQixFQUE0QixLQUE1QixDQUNBLE1BQU8sTUFBSyxRQUFMLENBQWMsQ0FBRSxRQUFTLEtBQUssS0FBTCxDQUFXLE9BQXRCLENBQWQsQ0FDUixDQXRCc0MsQ0F3QnZDLFVBQVcsbUJBQVMsS0FBVCxDQUFnQixDQUN6QixNQUFNLGNBQU4sR0FDQSxHQUFJLElBQUssS0FBSyxLQUFMLENBQVksS0FBSyxNQUFMLEdBQWdCLElBQWpCLENBQXlCLENBQXBDLENBQVQsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxHQUFJLFNBQVUsQ0FBQyxHQUFHLEVBQUosQ0FBUSxLQUFLLG1CQUFiLENBQWQsQ0FDQSxrQkFBUSxPQUFSLENBQWdCLENBQUMsR0FBRyxFQUFKLENBQVEsS0FBSyxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQWhDLENBQWhCLEVBQ0EsS0FBSyxRQUFMLENBQWMsQ0FBQyxRQUFTLENBQUMsR0FBRyxFQUFKLENBQVEsS0FBSyxFQUFiLENBQVYsQ0FBZCxDQUNELENBakNzQyxDQW1DdkMsT0FBUSxpQkFBVyxDQUNqQixNQUNFO0FBQ0EsK0JBQ0Usd0NBQVUsUUFBUyxLQUFLLEtBQUwsQ0FBVyxPQUE5QixDQUF1QyxRQUFTLEtBQUssU0FBckQsQ0FBZ0UsU0FBVSxLQUFLLFlBQS9FLEVBREYsQ0FFRSxvQkFBQyxRQUFELEVBQVUsTUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUE1QixFQUZGLENBRkYsQ0FPRCxDQTNDc0MsQ0FBbEIsQ0FBdkIsQyxnQkE4Q2UscUJBQU8sZ0JBQVAsQyIsImZpbGUiOiJ0ZXN0RGlzcGxheUl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgSXRlbUxpc3QgPSByZXF1aXJlKCcuL3Rlc3RJdGVtTGlzdCcpO1xyXG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSc7XHJcbmltcG9ydCByZWFjdG9yIGZyb20gJy4vcmVhY3RvcidcclxuaW1wb3J0IGdldHRlcnMgZnJvbSAnLi9nZXR0ZXJzJ1xyXG5pbXBvcnQgVGVzdFB1c2ggZnJvbSAnLi90ZXN0UHVzaCdcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xyXG5cclxudmFyIGl0ZW1zbGlzdCA9IFt7IGlkOicxJywgbmFtZTondGVzdCd9XTtcclxuXHJcbnZhciBUZXN0RGlzcGxheUl0ZW1zID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIG1peGluczogW3JlYWN0b3IuUmVhY3RNaXhpbl0sXHJcblxyXG4gIGdldERhdGFCaW5kaW5ncygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zOiBnZXR0ZXJzLml0ZW1zLFxyXG4gICAgICAvL25ld0l0ZW06IHtpZDonMCcsIG5hbWU6J0VudGVySXRlbSd9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIGl0ZW1zOiBpdGVtc2xpc3QsXHJcbiAgICAgIG5ld0l0ZW06IHtpZDonJywgbmFtZTonJ31cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgc2V0SXRlbVN0YXRlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIGZpZWxkID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnN0YXRlLm5ld0l0ZW1bZmllbGRdID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IHRoaXMuc3RhdGUubmV3SXRlbX0pO1xyXG4gIH0sXHJcblxyXG4gIG9uQWRkSXRlbTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaWQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxKTtcclxuICAgIC8vaXRlbXNsaXN0LnB1c2goe2lkOmlkLCBuYW1lOnRoaXMuc3RhdGUubmV3SXRlbS5uYW1lfSk7XHJcbiAgICAvL3RoaXMuc2V0U3RhdGUoe25ld0l0ZW06IHtpZDonJywgbmFtZTonJ319KTtcclxuICAgIC8vcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBpdGVtczogaXRlbXNsaXN0IH0pO1xyXG4gICAgbGV0IG5ld0l0ZW0gPSB7aWQ6aWQsIG5hbWU6J2luc2VydGVkIG9uIGNsaWNrJ307XHJcbiAgICBhY3Rpb25zLmFkZEl0ZW0oe2lkOmlkLCBuYW1lOnRoaXMuc3RhdGUubmV3SXRlbS5uYW1lfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtuZXdJdGVtOiB7aWQ6JycsIG5hbWU6Jyd9fSk7XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIDxJdGVtTGlzdCBuZXdJdGVtPXt0aGlzLnN0YXRlLm5ld0l0ZW19IGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfSBvbkNsaWNrPXt0aGlzLm9uQWRkSXRlbX0gb25DaGFuZ2U9e3RoaXMuc2V0SXRlbVN0YXRlfS8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRlc3RQdXNoIG5ld0l0ZW09e3RoaXMuc3RhdGUubmV3SXRlbX0gb25DbGljaz17dGhpcy5vbkFkZEl0ZW19IG9uQ2hhbmdlPXt0aGlzLnNldEl0ZW1TdGF0ZX0gLz5cclxuICAgICAgICA8SXRlbUxpc3QgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFRlc3REaXNwbGF5SXRlbXMpO1xyXG4iXX0=