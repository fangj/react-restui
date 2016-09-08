'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactBSTable = require('react-bootstrap-table');
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;
// var Promise=require('bluebird');
var agent = require('superagent-promise')(require('superagent'), Promise);

var RestfulTable = function (_React$Component) {
  _inherits(RestfulTable, _React$Component);

  function RestfulTable(props) {
    _classCallCheck(this, RestfulTable);

    var _this = _possibleConstructorReturn(this, (RestfulTable.__proto__ || Object.getPrototypeOf(RestfulTable)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(RestfulTable, [{
    key: 'render',
    value: function render() {
      var me = this;
      var optionsProp = {
        afterDeleteRow: me.onAfterDeleteRow.bind(me), // A hook for after droping rows.
        afterInsertRow: me.onAfterInsertRow.bind(me) };
      var cellEditProp = {
        mode: "click",
        blurToSave: true,
        afterSaveCell: me.onAfterSaveCell.bind(me)
      };

      var _props = this.props;
      var data = _props.data;
      var keyField = _props.keyField;
      var cellEdit = _props.cellEdit;
      var options = _props.options;

      var others = _objectWithoutProperties(_props, ['data', 'keyField', 'cellEdit', 'options']);

      cellEditProp = Object.assign({}, cellEdit, cellEditProp);
      optionsProp = Object.assign({}, options, optionsProp);
      var remote = this.props.remote;
      if (remote === undefined) {
        remote = true;
      }
      return React.createElement(
        BootstrapTable,
        _extends({
          data: this.state.data, keyField: keyField, remote: remote, cellEdit: cellEditProp, options: optionsProp }, others),
        this.props.children
      );
    }
  }, {
    key: 'onAfterDeleteRow',
    value: function onAfterDeleteRow(rowKeys) {
      var _this2 = this;

      var me = this;
      console.log('delete', rowKeys);
      var key = rowKeys[0]; //目前只删除第一行
      var url = this.props.url;

      agent.del(url + '/' + key).then(function (resp) {
        console.log(resp.body);
        var data = me.state.data;

        data = data.filter(function (product) {
          return product._id !== key;
        });

        _this2.setState({
          data: data
        });
      });
    }
  }, {
    key: 'onAfterInsertRow',
    value: function onAfterInsertRow(row) {
      var _this3 = this;

      var _props2 = this.props;
      var url = _props2.url;
      var keyField = _props2.keyField;

      agent.post(url, row).then(function (resp) {
        console.log(resp.body);
        var data = _this3.state.data;

        data.push(resp.body);
        _this3.setState({ data: data });
      });
    }
  }, {
    key: 'onAfterSaveCell',
    value: function onAfterSaveCell(row, cellName, cellValue) {
      var cellEdit = this.props.cellEdit;


      row[cellName] = cellValue;
      var _props3 = this.props;
      var url = _props3.url;
      var keyField = _props3.keyField;

      agent.put(url + '/' + row[keyField], row).then(function (resp) {
        if (typeof cellEdit.afterSaveCell == 'function') {
          cellEdit.afterSaveCell(row, cellName, cellValue);
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      var url = this.props.url;

      agent.get(url).then(function (resp) {
        var data = resp.body;
        _this4.setState({ data: data });
      });
    }
  }]);

  return RestfulTable;
}(React.Component);

RestfulTable.propTypes = {
  url: React.PropTypes.string.isRequired,
  keyField: React.PropTypes.string.isRequired
};


module.exports = RestfulTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF90YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksZUFBZSxRQUFRLHVCQUFSLENBQW5CO0FBQ0EsSUFBSSxpQkFBaUIsYUFBYSxjQUFsQztBQUNBLElBQUksb0JBQW9CLGFBQWEsaUJBQXJDO0FBQ0E7QUFDQSxJQUFJLFFBQVEsUUFBUSxvQkFBUixFQUE4QixRQUFRLFlBQVIsQ0FBOUIsRUFBb0QsT0FBcEQsQ0FBWjs7SUFFTSxZOzs7QUFPRix3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1QsS0FEUzs7QUFFZixVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQUs7QUFETSxLQUFiO0FBRmU7QUFLbEI7Ozs7NkJBRVE7QUFDTCxVQUFNLEtBQUcsSUFBVDtBQUNBLFVBQUksY0FBYztBQUNoQix3QkFBZ0IsR0FBRyxnQkFBSCxDQUFvQixJQUFwQixDQUF5QixFQUF6QixDQURBLEVBQytCO0FBQy9DLHdCQUFnQixHQUFHLGdCQUFILENBQW9CLElBQXBCLENBQXlCLEVBQXpCLENBRkEsRUFBbEI7QUFJQSxVQUFJLGVBQWU7QUFDakIsY0FBTSxPQURXO0FBRWpCLG9CQUFZLElBRks7QUFHakIsdUJBQWUsR0FBRyxlQUFILENBQW1CLElBQW5CLENBQXdCLEVBQXhCO0FBSEUsT0FBbkI7O0FBTkssbUJBWTRDLEtBQUssS0FaakQ7QUFBQSxVQVlFLElBWkYsVUFZRSxJQVpGO0FBQUEsVUFZTyxRQVpQLFVBWU8sUUFaUDtBQUFBLFVBWWdCLFFBWmhCLFVBWWdCLFFBWmhCO0FBQUEsVUFZeUIsT0FaekIsVUFZeUIsT0FaekI7O0FBQUEsVUFZb0MsTUFacEM7O0FBYUwscUJBQWEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFpQixRQUFqQixFQUEwQixZQUExQixDQUFiO0FBQ0Esb0JBQVksT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFpQixPQUFqQixFQUF5QixXQUF6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dGVudCI6WyJ2YXIgUmVhY3RCU1RhYmxlID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwLXRhYmxlJyk7ICBcclxudmFyIEJvb3RzdHJhcFRhYmxlID0gUmVhY3RCU1RhYmxlLkJvb3RzdHJhcFRhYmxlO1xyXG52YXIgVGFibGVIZWFkZXJDb2x1bW4gPSBSZWFjdEJTVGFibGUuVGFibGVIZWFkZXJDb2x1bW47XHJcbi8vIHZhciBQcm9taXNlPXJlcXVpcmUoJ2JsdWViaXJkJyk7XHJcbnZhciBhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQtcHJvbWlzZScpKHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxQcm9taXNlKTtcclxuXHJcbmNsYXNzIFJlc3RmdWxUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgdXJsOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGtleUZpZWxkOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGRhdGE6W11cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBtZT10aGlzO1xyXG4gICAgICAgIHZhciBvcHRpb25zUHJvcCA9IHtcclxuICAgICAgICAgIGFmdGVyRGVsZXRlUm93OiBtZS5vbkFmdGVyRGVsZXRlUm93LmJpbmQobWUpLCAgLy8gQSBob29rIGZvciBhZnRlciBkcm9waW5nIHJvd3MuXHJcbiAgICAgICAgICBhZnRlckluc2VydFJvdzogbWUub25BZnRlckluc2VydFJvdy5iaW5kKG1lKSwgICAvLyBBIGhvb2sgZm9yIGFmdGVyIGluc2VydCByb3dzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2VsbEVkaXRQcm9wID0ge1xyXG4gICAgICAgICAgbW9kZTogXCJjbGlja1wiLFxyXG4gICAgICAgICAgYmx1clRvU2F2ZTogdHJ1ZSxcclxuICAgICAgICAgIGFmdGVyU2F2ZUNlbGw6IG1lLm9uQWZ0ZXJTYXZlQ2VsbC5iaW5kKG1lKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHtkYXRhLGtleUZpZWxkLGNlbGxFZGl0LG9wdGlvbnMsLi4ub3RoZXJzfT10aGlzLnByb3BzO1xyXG4gICAgICAgIGNlbGxFZGl0UHJvcD1PYmplY3QuYXNzaWduKHt9LGNlbGxFZGl0LGNlbGxFZGl0UHJvcCk7XHJcbiAgICAgICAgb3B0aW9uc1Byb3A9T2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLG9wdGlvbnNQcm9wKTtcclxuICAgICAgICB2YXIgcmVtb3RlPXRoaXMucHJvcHMucmVtb3RlO1xyXG4gICAgICAgIGlmKHJlbW90ZT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICByZW1vdGU9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb290c3RyYXBUYWJsZSBcclxuICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0ga2V5RmllbGQ9e2tleUZpZWxkfSByZW1vdGU9e3JlbW90ZX0gY2VsbEVkaXQ9e2NlbGxFZGl0UHJvcH0gb3B0aW9ucz17b3B0aW9uc1Byb3B9IHsuLi5vdGhlcnN9PlxyXG4gICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9Cb290c3RyYXBUYWJsZT5cclxuIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZnRlckRlbGV0ZVJvdyhyb3dLZXlzKXtcclxuICAgICAgY29uc3QgbWU9dGhpcztcclxuICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZScscm93S2V5cylcclxuICAgICAgY29uc3Qga2V5PXJvd0tleXNbMF07IC8v55uu5YmN5Y+q5Yig6Zmk56ys5LiA6KGMXHJcbiAgICAgIGNvbnN0IHt1cmx9PXRoaXMucHJvcHM7XHJcbiAgICAgIGFnZW50LmRlbCh1cmwrJy8nK2tleSkudGhlbihyZXNwPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcC5ib2R5KTtcclxuICAgICAgICB2YXIge2RhdGF9PW1lLnN0YXRlO1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHByb2R1Y3QuX2lkICE9PSBrZXk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIG9uQWZ0ZXJJbnNlcnRSb3cocm93KXtcclxuICAgICAgY29uc3Qge3VybCxrZXlGaWVsZH09dGhpcy5wcm9wcztcclxuICAgICAgYWdlbnQucG9zdCh1cmwscm93KS50aGVuKHJlc3A9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmJvZHkpXHJcbiAgICAgICAgdmFyIHtkYXRhfT10aGlzLnN0YXRlO1xyXG4gICAgICAgIGRhdGEucHVzaChyZXNwLmJvZHkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkFmdGVyU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKXtcclxuICAgICAgY29uc3Qge2NlbGxFZGl0fT10aGlzLnByb3BzO1xyXG5cclxuICAgICAgcm93W2NlbGxOYW1lXT1jZWxsVmFsdWU7XHJcbiAgICAgIGNvbnN0IHt1cmwsa2V5RmllbGR9PXRoaXMucHJvcHM7XHJcbiAgICAgIGFnZW50LnB1dCh1cmwrJy8nK3Jvd1trZXlGaWVsZF0scm93KS50aGVuKHJlc3A9PntcclxuICAgICAgICBpZih0eXBlb2YgY2VsbEVkaXQuYWZ0ZXJTYXZlQ2VsbD09J2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICBjZWxsRWRpdC5hZnRlclNhdmVDZWxsKHJvdywgY2VsbE5hbWUsIGNlbGxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBjb25zdCB7dXJsfT10aGlzLnByb3BzO1xyXG4gICAgICBhZ2VudC5nZXQodXJsKS50aGVuKHJlc3A9PntcclxuICAgICAgICBjb25zdCBkYXRhPXJlc3AuYm9keTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3RmdWxUYWJsZTtcclxuIl19