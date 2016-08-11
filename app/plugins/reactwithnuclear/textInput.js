'use strict';var React=require('react');var Input=React.createClass({displayName:'Input',render:function render(){var wrapperClass='form-group';if(this.props.error&&this.props.error.length>0){wrapperClass+=' '+'has error'}return React.createElement('div',{className:'wrapper-class'},React.createElement('label',{htmlFor:this.props.name},this.props.label),React.createElement('div',{className:'field'},React.createElement('input',{type:'text',name:this.props.name,className:'form-control',placeholder:this.props.placeholder,ref:this.props.name,onChange:this.props.onChange,value:this.props.value}),React.createElement('div',{className:'input'},this.props.error)))}});module.exports=Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRJbnB1dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQSxHQUFJLE9BQVEsUUFBUSxPQUFSLENBQVosQ0FFQSxHQUFJLE9BQVEsTUFBTSxXQUFOLENBQWtCLHFCQUM1QixPQUFRLGlCQUFXLENBQ2pCLEdBQUksY0FBZSxZQUFuQixDQUNBLEdBQUcsS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFvQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCLENBQTBCLENBQWpELENBQW9ELENBQ2xELGNBQWdCLElBQU0sV0FDdkIsQ0FDRCxNQUNFLDRCQUFLLFVBQVUsZUFBZixFQUNFLDZCQUFPLFFBQVMsS0FBSyxLQUFMLENBQVcsSUFBM0IsRUFBa0MsS0FBSyxLQUFMLENBQVcsS0FBN0MsQ0FERixDQUVFLDJCQUFLLFVBQVUsT0FBZixFQUNFLDZCQUFPLEtBQUssTUFBWixDQUNFLEtBQU0sS0FBSyxLQUFMLENBQVcsSUFEbkIsQ0FFRSxVQUFVLGNBRlosQ0FHRSxZQUFhLEtBQUssS0FBTCxDQUFXLFdBSDFCLENBSUUsSUFBSyxLQUFLLEtBQUwsQ0FBVyxJQUpsQixDQUtFLFNBQVcsS0FBSyxLQUFMLENBQVcsUUFMeEIsQ0FNRSxNQUFRLEtBQUssS0FBTCxDQUFXLEtBTnJCLEVBREYsQ0FRRSwyQkFBSyxVQUFVLE9BQWYsRUFBd0IsS0FBSyxLQUFMLENBQVcsS0FBbkMsQ0FSRixDQUZGLENBY0gsQ0FyQjJCLENBQWxCLENBQVosQ0F3QkEsT0FBTyxPQUFQLENBQWlCLEtBQWpCIiwiZmlsZSI6InRleHRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuXHJcbnZhciBJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIGlmKHRoaXMucHJvcHMuZXJyb3IgJiYgdGhpcy5wcm9wcy5lcnJvci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdyYXBwZXJDbGFzcyArPSBcIiBcIiArIFwiaGFzIGVycm9yXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItY2xhc3NcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5uYW1lfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMucHJvcHMub25DaGFuZ2UgfVxyXG4gICAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPnt0aGlzLnByb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XHJcbiJdfQ==