'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _electron=require('electron');var _electron2=_interopRequireDefault(_electron);var _react=require('react');var _react2=_interopRequireDefault(_react);var _radium=require('radium');var _radium2=_interopRequireDefault(_radium);var _DocumentDatabase=require('./database/DocumentDatabase');var _DocumentDatabase2=_interopRequireDefault(_DocumentDatabase);var _SqlDatabase=require('./database/SqlDatabase');var _SqlDatabase2=_interopRequireDefault(_SqlDatabase);var _Window=require('./Window');var _Window2=_interopRequireDefault(_Window);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var app=_electron2.default.remote.app;var appCfg=app.sysConfig();/**
 *
 *
 * @class Shell
 * @extends {React.Component}
 */var Shell=function(_React$Component){_inherits(Shell,_React$Component);/**
   * Creates an instance of Shell.
   *
   */function Shell(){_classCallCheck(this,Shell);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Shell).call(this));_this.title=appCfg.app.name+' '+appCfg.app.version;_this.sqlDB=new _SqlDatabase2.default(appCfg.app.name);_this.docDB=new _DocumentDatabase2.default(appCfg.app.name);_this.minimizeApp=_this.minimizeApp.bind(_this);_this.toggleFullScreen=_this.toggleFullScreen.bind(_this);_this.closeApp=_this.closeApp.bind(_this);return _this}/**
   *
   */_createClass(Shell,[{key:'minimizeApp',value:function minimizeApp(){app.minimizeAppToSysTray()}/**
   *
   */},{key:'toggleFullScreen',value:function toggleFullScreen(){app.toggleFullscreen()}/**
   *
   */},{key:'closeApp',value:function closeApp(){this.docDB.save({event:'closed'}).then(function(){app.close()})}/**
   *
   *
   * @returns
   */},{key:'render',value:function render(){return _react2.default.createElement(_Window2.default,{appName:this.title,activeModule:'Todo',style:appCfg.platform,closeHandler:this.closeApp,fullScreenHandler:this.toggleFullScreen,minimizeHandler:this.minimizeApp},this.props.children)}}]);return Shell}(_react2.default.Component);exports.default=(0,_radium2.default)(Shell);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNoZWxsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaWtCQUNBLGtDLGlEQUNBLDRCLDJDQUNBLDhCLDZDQUVBLDZELGlFQUNBLG1ELHVEQUVBLGdDLDA2QkFFQSxHQUFNLEtBQU0sbUJBQVMsTUFBVCxDQUFnQixHQUE1QixDQUNBLEdBQU0sUUFBUyxJQUFJLFNBQUosRUFBZixDQUVBOzs7OztNQU1NLE0sOERBRUo7OztLQUlBLGdCQUFjLGdIQUVaLE1BQUssS0FBTCxDQUFnQixPQUFPLEdBQVAsQ0FBVyxJQUEzQixLQUFtQyxPQUFPLEdBQVAsQ0FBVyxPQUE5QyxDQUNBLE1BQUssS0FBTCxDQUFhLDBCQUFnQixPQUFPLEdBQVAsQ0FBVyxJQUEzQixDQUFiLENBQ0EsTUFBSyxLQUFMLENBQWEsK0JBQXFCLE9BQU8sR0FBUCxDQUFXLElBQWhDLENBQWIsQ0FFQSxNQUFLLFdBQUwsQ0FBbUIsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQW5CLENBQ0EsTUFBSyxnQkFBTCxDQUF3QixNQUFLLGdCQUFMLENBQXNCLElBQXRCLE9BQXhCLENBQ0EsTUFBSyxRQUFMLENBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEIsQ0FSWSxZQVNiLENBRUQ7O3dFQUdjLENBQ1osSUFBSSxvQkFBSixFQUNELENBRUQ7O2dFQUdtQixDQUNqQixJQUFJLGdCQUFKLEVBQ0QsQ0FFRDs7Z0RBR1csQ0FDVCxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLENBQUUsTUFBTyxRQUFULENBQWhCLEVBQXFDLElBQXJDLENBQTBDLFVBQU0sQ0FDOUMsSUFBSSxLQUFKLEVBQ0QsQ0FGRCxDQUdELENBRUQ7Ozs7NENBS1MsQ0FDUCxNQUNFLGlEQUFRLFFBQVMsS0FBSyxLQUF0QixDQUNRLGFBQWEsTUFEckIsQ0FFUSxNQUFPLE9BQU8sUUFGdEIsQ0FHUSxhQUFjLEtBQUssUUFIM0IsQ0FJUSxrQkFBbUIsS0FBSyxnQkFKaEMsQ0FLUSxnQkFBaUIsS0FBSyxXQUw5QixFQU1JLEtBQUssS0FBTCxDQUFXLFFBTmYsQ0FTSCxDLGtCQXhEaUIsZ0JBQU0sUyxrQkEyRFgscUJBQU8sS0FBUCxDIiwiZmlsZSI6IlNoZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBlbGVjdHJvbiBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nO1xuXG5pbXBvcnQgRG9jdW1lbnREYXRhYmFzZSBmcm9tICcuL2RhdGFiYXNlL0RvY3VtZW50RGF0YWJhc2UnO1xuaW1wb3J0IFNxbERhdGFiYXNlIGZyb20gJy4vZGF0YWJhc2UvU3FsRGF0YWJhc2UnO1xuXG5pbXBvcnQgV2luZG93IGZyb20gJy4vV2luZG93JztcblxuY29uc3QgYXBwID0gZWxlY3Ryb24ucmVtb3RlLmFwcDtcbmNvbnN0IGFwcENmZyA9IGFwcC5zeXNDb25maWcoKTtcblxuLyoqXG4gKlxuICpcbiAqIEBjbGFzcyBTaGVsbFxuICogQGV4dGVuZHMge1JlYWN0LkNvbXBvbmVudH1cbiAqL1xuY2xhc3MgU2hlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFNoZWxsLlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRpdGxlID0gYCR7YXBwQ2ZnLmFwcC5uYW1lfSAke2FwcENmZy5hcHAudmVyc2lvbn1gO1xuICAgIHRoaXMuc3FsREIgPSBuZXcgU3FsRGF0YWJhc2UoYXBwQ2ZnLmFwcC5uYW1lKTtcbiAgICB0aGlzLmRvY0RCID0gbmV3IERvY3VtZW50RGF0YWJhc2UoYXBwQ2ZnLmFwcC5uYW1lKTtcblxuICAgIHRoaXMubWluaW1pemVBcHAgPSB0aGlzLm1pbmltaXplQXBwLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVGdWxsU2NyZWVuID0gdGhpcy50b2dnbGVGdWxsU2NyZWVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFwcCA9IHRoaXMuY2xvc2VBcHAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbWluaW1pemVBcHAoKSB7XG4gICAgYXBwLm1pbmltaXplQXBwVG9TeXNUcmF5KCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XG4gICAgYXBwLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY2xvc2VBcHAoKSB7XG4gICAgdGhpcy5kb2NEQi5zYXZlKHsgZXZlbnQ6ICdjbG9zZWQnIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgYXBwLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHJldHVybnNcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdpbmRvdyBhcHBOYW1lPXt0aGlzLnRpdGxlfVxuICAgICAgICAgICAgICBhY3RpdmVNb2R1bGU9J1RvZG8nXG4gICAgICAgICAgICAgIHN0eWxlPXthcHBDZmcucGxhdGZvcm19XG4gICAgICAgICAgICAgIGNsb3NlSGFuZGxlcj17dGhpcy5jbG9zZUFwcH1cbiAgICAgICAgICAgICAgZnVsbFNjcmVlbkhhbmRsZXI9e3RoaXMudG9nZ2xlRnVsbFNjcmVlbn1cbiAgICAgICAgICAgICAgbWluaW1pemVIYW5kbGVyPXt0aGlzLm1pbmltaXplQXBwfT5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvV2luZG93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaXVtKFNoZWxsKTtcbiJdfQ==