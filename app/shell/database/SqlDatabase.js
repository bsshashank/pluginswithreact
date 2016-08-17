'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _lovefield=require('lovefield');var _lovefield2=_interopRequireDefault(_lovefield);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}/**
 * 
 * 
 * @class SqlDatabase
 */var SqlDatabase=/**
   * Creates an instance of SqlDatabase.
   * 
   * @param {any} dbName
   * @param {number} [dbVersion=1]
   */function SqlDatabase(dbName){var dbVersion=arguments.length<=1||arguments[1]===undefined?1:arguments[1];_classCallCheck(this,SqlDatabase);this.db=_lovefield2.default.schema.create(dbName,dbVersion)};exports.default=SqlDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNxbERhdGFiYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic0VBQ0Esb0MscVJBRUE7Ozs7TUFLTSxZLENBRUo7Ozs7O0tBTUEscUJBQVksTUFBWixDQUFtQyxJQUFmLFVBQWUsK0NBQUgsQ0FBRyxnREFDakMsS0FBSyxFQUFMLENBQVUsb0JBQUcsTUFBSCxDQUFVLE1BQVYsQ0FBaUIsTUFBakIsQ0FBeUIsU0FBekIsQ0FDWCxDLGlCQUlZLFciLCJmaWxlIjoiU3FsRGF0YWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IGxmIGZyb20gJ2xvdmVmaWVsZCc7XG5cbi8qKlxuICogXG4gKiBcbiAqIEBjbGFzcyBTcWxEYXRhYmFzZVxuICovXG5jbGFzcyBTcWxEYXRhYmFzZSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgU3FsRGF0YWJhc2UuXG4gICAqIFxuICAgKiBAcGFyYW0ge2FueX0gZGJOYW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGJWZXJzaW9uPTFdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYk5hbWUsIGRiVmVyc2lvbiA9IDEpIHtcbiAgICB0aGlzLmRiID0gbGYuc2NoZW1hLmNyZWF0ZShkYk5hbWUsIGRiVmVyc2lvbik7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTcWxEYXRhYmFzZTtcbiJdfQ==