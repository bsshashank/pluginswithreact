'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _radium=require('radium');var _radium2=_interopRequireDefault(_radium);var _ControlStyles=require('./ControlStyles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var CloseButton=function(_React$Component){_inherits(CloseButton,_React$Component);function CloseButton(){_classCallCheck(this,CloseButton);return _possibleConstructorReturn(this,Object.getPrototypeOf(CloseButton).apply(this,arguments))}_createClass(CloseButton,[{key:'render',value:function render(){var btnStyles=[];var icon={};if(this.props.style!=='darwin'){btnStyles=[_ControlStyles.winButtonStyle.base,_ControlStyles.winButtonStyle.close];icon=_react2.default.createElement('svg',{x:'0px',y:'0px',viewBox:'0 0 10.2 10.2',style:[_ControlStyles.winIconStyle]},_react2.default.createElement('polygon',{fill:'#ffffff',points:'10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 '}))}else{btnStyles=[_ControlStyles.osxButtonStyle.base,_ControlStyles.osxButtonStyle.close];icon=_react2.default.createElement('svg',{x:'0px',y:'0px',viewBox:'0 0 6.4 6.4',style:[_ControlStyles.osxIconStyle]},_react2.default.createElement('polygon',{fill:'#4d0000',points:'6.4,0.8 5.6,0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2 '}))}return _react2.default.createElement('a',{key:'closeBtn',style:btnStyles,onClick:this.props.clickHandler},icon)}}]);return CloseButton}(_react2.default.Component);exports.default=(0,_radium2.default)(CloseButton);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsb3NlQnV0dG9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaWtCQUNBLDRCLDJDQUNBLDhCLDZDQUVBLDhDLGc0QkFFTSxZLDZSQUVLLENBRVAsR0FBSSxXQUFZLEVBQWhCLENBQ0EsR0FBSSxNQUFPLEVBQVgsQ0FDQSxHQUFJLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBcUIsUUFBekIsQ0FBbUMsQ0FDakMsVUFBWSxDQUFDLDhCQUFlLElBQWhCLENBQXNCLDhCQUFlLEtBQXJDLENBQVosQ0FDQSxLQUNFLHFDQUFLLEVBQUUsS0FBUCxDQUFhLEVBQUUsS0FBZixDQUFxQixRQUFRLGVBQTdCLENBQTZDLE1BQU8sNkJBQXBELEVBQ0UseUNBQVMsS0FBSyxTQUFkLENBQXdCLE9BQU8sOEZBQS9CLEVBREYsQ0FJSCxDQVBELElBT08sQ0FDTCxVQUFZLENBQUMsOEJBQWUsSUFBaEIsQ0FBc0IsOEJBQWUsS0FBckMsQ0FBWixDQUNBLEtBQ0UscUNBQUssRUFBRSxLQUFQLENBQWEsRUFBRSxLQUFmLENBQXFCLFFBQVEsYUFBN0IsQ0FBMkMsTUFBTyw2QkFBbEQsRUFDRSx5Q0FBUyxLQUFLLFNBQWQsQ0FBd0IsT0FBTyxzRkFBL0IsRUFERixDQUlILENBRUQsTUFDRSxvQ0FBRyxJQUFJLFVBQVAsQ0FBa0IsTUFBTyxTQUF6QixDQUFvQyxRQUFTLEtBQUssS0FBTCxDQUFXLFlBQXhELEVBQ0ksSUFESixDQUlILEMsd0JBM0J1QixnQkFBTSxTLGtCQThCakIscUJBQU8sV0FBUCxDIiwiZmlsZSI6IkNsb3NlQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmFkaXVtIGZyb20gJ3JhZGl1bSc7XG5cbmltcG9ydCB7d2luQnV0dG9uU3R5bGUsIHdpbkljb25TdHlsZSwgb3N4QnV0dG9uU3R5bGUsIG9zeEljb25TdHlsZX0gZnJvbSAnLi9Db250cm9sU3R5bGVzJztcblxuY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBidG5TdHlsZXMgPSBbXTtcbiAgICB2YXIgaWNvbiA9IHt9O1xuICAgIGlmICh0aGlzLnByb3BzLnN0eWxlICE9PSAnZGFyd2luJykge1xuICAgICAgYnRuU3R5bGVzID0gW3dpbkJ1dHRvblN0eWxlLmJhc2UsIHdpbkJ1dHRvblN0eWxlLmNsb3NlXTtcbiAgICAgIGljb24gPSAoXG4gICAgICAgIDxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwLjIgMTAuMlwiIHN0eWxlPXtbd2luSWNvblN0eWxlXX0+XG4gICAgICAgICAgPHBvbHlnb24gZmlsbD1cIiNmZmZmZmZcIiBwb2ludHM9XCIxMC4yLDAuNyA5LjUsMCA1LjEsNC40IDAuNywwIDAsMC43IDQuNCw1LjEgMCw5LjUgMC43LDEwLjIgNS4xLDUuOCA5LjUsMTAuMiAxMC4yLDkuNSA1LjgsNS4xIFwiPjwvcG9seWdvbj5cbiAgICAgICAgPC9zdmc+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG5TdHlsZXMgPSBbb3N4QnV0dG9uU3R5bGUuYmFzZSwgb3N4QnV0dG9uU3R5bGUuY2xvc2VdO1xuICAgICAgaWNvbiA9IChcbiAgICAgICAgPHN2ZyB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNi40IDYuNFwiIHN0eWxlPXtbb3N4SWNvblN0eWxlXX0+XG4gICAgICAgICAgPHBvbHlnb24gZmlsbD1cIiM0ZDAwMDBcIiBwb2ludHM9XCI2LjQsMC44IDUuNiwwIDMuMiwyLjQgMC44LDAgMCwwLjggMi40LDMuMiAwLDUuNiAwLjgsNi40IDMuMiw0IDUuNiw2LjQgNi40LDUuNiA0LDMuMiBcIj48L3BvbHlnb24+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGEga2V5PVwiY2xvc2VCdG5cIiBzdHlsZT17YnRuU3R5bGVzfSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrSGFuZGxlcn0+XG4gICAgICAgIHsgaWNvbiB9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpdW0oQ2xvc2VCdXR0b24pO1xuIl19