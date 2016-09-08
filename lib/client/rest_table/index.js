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
        afterTableComplete: me.onAfterTableComplete.bind(me), // A hook for after table render complete.
        afterDeleteRow: me.onAfterDeleteRow.bind(me), // A hook for after droping rows.
        afterInsertRow: me.onAfterInsertRow.bind(me) // A hook for after insert rows
      };
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
    key: 'onAfterTableComplete',
    value: function onAfterTableComplete() {}
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
      var _props3 = this.props;
      var url = _props3.url;
      var keyField = _props3.keyField;

      agent.put(url + '/' + row[keyField], row).then(function (resp) {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF90YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksZUFBZSxRQUFRLHVCQUFSLENBQW5CO0FBQ0EsSUFBSSxpQkFBaUIsYUFBYSxjQUFsQztBQUNBLElBQUksb0JBQW9CLGFBQWEsaUJBQXJDO0FBQ0E7QUFDQSxJQUFJLFFBQVEsUUFBUSxvQkFBUixFQUE4QixRQUFRLFlBQVIsQ0FBOUIsRUFBb0QsT0FBcEQsQ0FBWjs7SUFFTSxZOzs7QUFPRix3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1QsS0FEUzs7QUFFZixVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQUs7QUFETSxLQUFiO0FBRmU7QUFLbEI7Ozs7NkJBRVE7QUFDTCxVQUFNLEtBQUcsSUFBVDtBQUNBLFVBQUksY0FBYztBQUNoQiw0QkFBb0IsR0FBRyxvQkFBSCxDQUF3QixJQUF4QixDQUE2QixFQUE3QixDQURKLEVBQ3NDO0FBQ3RELHdCQUFnQixHQUFHLGdCQUFILENBQW9CLElBQXBCLENBQXlCLEVBQXpCLENBRkEsRUFFK0I7QUFDL0Msd0JBQWdCLEdBQUcsZ0JBQUgsQ0FBb0IsSUFBcEIsQ0FBeUIsRUFBekIsQ0FIQSxDQUcrQjtBQUgvQixPQUFsQjtBQUtBLFVBQUksZUFBZTtBQUNqQixjQUFNLE9BRFc7QUFFakIsb0JBQVksSUFGSztBQUdqQix1QkFBZSxHQUFHLGVBQUgsQ0FBbUIsSUFBbkIsQ0FBd0IsRUFBeEI7QUFIRSxPQUFuQjs7QUFQSyxtQkFhNEMsS0FBSyxLQWJqRDtBQUFBLFVBYUUsSUFiRixVQWFFLElBYkY7QUFBQSxVQWFPLFFBYlAsVUFhTyxRQWJQO0FBQUEsVUFhZ0IsUUFiaEIsVUFhZ0IsUUFiaEI7QUFBQSxVQWF5QixPQWJ6QixVQWF5QixPQWJ6Qjs7QUFBQSxVQWFvQyxNQWJwQzs7QUFjTCxxQkFBYSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWlCLFFBQWpCLEVBQTBCLFlBQTFCLENBQWI7QUFDQSxvQkFBWSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWlCLE9BQWpCLEVBQXlCLFdBQXpCLENBQVo7QUFDQSxVQUFJLFNBQU8sS0FBSyxLQUFMLENBQVcsTUFBdEI7QUFDQSxVQUFHLFdBQVMsU0FBWixFQUFzQjtBQUNwQixpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxhQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNNLGdCQUFNLEtBQUssS0FBTCxDQUFXLElBRHZCLEVBQzZCLFVBQVUsUUFEdkMsRUFDaUQsUUFBUSxNQUR6RCxFQUNpRSxVQUFVLFlBRDNFLEVBQ3lGLFNBQVMsV0FEbEcsSUFDbUgsTUFEbkg7QUFFRSxhQUFLLEtBQUwsQ0FBVztBQUZiLE9BREY7QUFPSDs7OzJDQUVxQixDQUVyQjs7O3FDQUNnQixPLEVBQVE7QUFBQTs7QUFDdkIsVUFBTSxLQUFHLElBQVQ7QUFDQSxjQUFRLEdBQVIsQ0FBWSxRQUFaLEVBQXFCLE9BQXJCO0FBQ0EsVUFBTSxNQUFJLFFBQVEsQ0FBUixDQUFWLENBSHVCLENBR0Q7QUFIQyxVQUloQixHQUpnQixHQUlYLEtBQUssS0FKTSxDQUloQixHQUpnQjs7QUFLdkIsWUFBTSxHQUFOLENBQVUsTUFBSSxHQUFKLEdBQVEsR0FBbEIsRUFBdUIsSUFBdkIsQ0FBNEIsZ0JBQU07QUFDaEMsZ0JBQVEsR0FBUixDQUFZLEtBQUssSUFBakI7QUFEZ0MsWUFFM0IsSUFGMkIsR0FFckIsR0FBRyxLQUZrQixDQUUzQixJQUYyQjs7QUFHaEMsZUFBTyxLQUFLLE1BQUwsQ0FBWSxVQUFDLE9BQUQsRUFBYTtBQUM5QixpQkFBTyxRQUFRLEdBQVIsS0FBZ0IsR0FBdkI7QUFDRCxTQUZNLENBQVA7O0FBSUEsZUFBSyxRQUFMLENBQWM7QUFDWixnQkFBTTtBQURNLFNBQWQ7QUFHRCxPQVZEO0FBWUQ7OztxQ0FDZ0IsRyxFQUFJO0FBQUE7O0FBQUEsb0JBQ0UsS0FBSyxLQURQO0FBQUEsVUFDWixHQURZLFdBQ1osR0FEWTtBQUFBLFVBQ1IsUUFEUSxXQUNSLFFBRFE7O0FBRW5CLFlBQU0sSUFBTixDQUFXLEdBQVgsRUFBZSxHQUFmLEVBQW9CLElBQXBCLENBQXlCLGdCQUFNO0FBQzdCLGdCQUFRLEdBQVIsQ0FBWSxLQUFLLElBQWpCO0FBRDZCLFlBRXhCLElBRndCLEdBRWxCLE9BQUssS0FGYSxDQUV4QixJQUZ3Qjs7QUFHN0IsYUFBSyxJQUFMLENBQVUsS0FBSyxJQUFmO0FBQ0EsZUFBSyxRQUFMLENBQWMsRUFBQyxVQUFELEVBQWQ7QUFDRCxPQUxEO0FBTUQ7OztvQ0FFZSxHLEVBQUssUSxFQUFVLFMsRUFBVTtBQUFBLG9CQUNsQixLQUFLLEtBRGE7QUFBQSxVQUNoQyxHQURnQyxXQUNoQyxHQURnQztBQUFBLFVBQzVCLFFBRDRCLFdBQzVCLFFBRDRCOztBQUV2QyxZQUFNLEdBQU4sQ0FBVSxNQUFJLEdBQUosR0FBUSxJQUFJLFFBQUosQ0FBbEIsRUFBZ0MsR0FBaEMsRUFBcUMsSUFBckMsQ0FBMEMsZ0JBQU0sQ0FDL0MsQ0FERDtBQUVEOzs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDWCxHQURXLEdBQ04sS0FBSyxLQURDLENBQ1gsR0FEVzs7QUFFbEIsWUFBTSxHQUFOLENBQVUsR0FBVixFQUFlLElBQWYsQ0FBb0IsZ0JBQU07QUFDeEIsWUFBTSxPQUFLLEtBQUssSUFBaEI7QUFDQSxlQUFLLFFBQUwsQ0FBYyxFQUFDLFVBQUQsRUFBZDtBQUNELE9BSEQ7QUFJRDs7OztFQXRGc0IsTUFBTSxTOztBQUEzQixZLENBRUksUyxHQUFZO0FBQ2xCLE9BQUksTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRFQ7QUFFbEIsWUFBUyxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUI7QUFGZCxDOzs7QUF3RnRCLE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdEJTVGFibGUgPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAtdGFibGUnKTsgIFxyXG52YXIgQm9vdHN0cmFwVGFibGUgPSBSZWFjdEJTVGFibGUuQm9vdHN0cmFwVGFibGU7XHJcbnZhciBUYWJsZUhlYWRlckNvbHVtbiA9IFJlYWN0QlNUYWJsZS5UYWJsZUhlYWRlckNvbHVtbjtcclxuLy8gdmFyIFByb21pc2U9cmVxdWlyZSgnYmx1ZWJpcmQnKTtcclxudmFyIGFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudC1wcm9taXNlJykocmVxdWlyZSgnc3VwZXJhZ2VudCcpLFByb21pc2UpO1xyXG5cclxuY2xhc3MgUmVzdGZ1bFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICB1cmw6UmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAga2V5RmllbGQ6UmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcbiAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgZGF0YTpbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IG1lPXRoaXM7XHJcbiAgICAgICAgdmFyIG9wdGlvbnNQcm9wID0ge1xyXG4gICAgICAgICAgYWZ0ZXJUYWJsZUNvbXBsZXRlOiBtZS5vbkFmdGVyVGFibGVDb21wbGV0ZS5iaW5kKG1lKSwgLy8gQSBob29rIGZvciBhZnRlciB0YWJsZSByZW5kZXIgY29tcGxldGUuXHJcbiAgICAgICAgICBhZnRlckRlbGV0ZVJvdzogbWUub25BZnRlckRlbGV0ZVJvdy5iaW5kKG1lKSwgIC8vIEEgaG9vayBmb3IgYWZ0ZXIgZHJvcGluZyByb3dzLlxyXG4gICAgICAgICAgYWZ0ZXJJbnNlcnRSb3c6IG1lLm9uQWZ0ZXJJbnNlcnRSb3cuYmluZChtZSkgICAvLyBBIGhvb2sgZm9yIGFmdGVyIGluc2VydCByb3dzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2VsbEVkaXRQcm9wID0ge1xyXG4gICAgICAgICAgbW9kZTogXCJjbGlja1wiLFxyXG4gICAgICAgICAgYmx1clRvU2F2ZTogdHJ1ZSxcclxuICAgICAgICAgIGFmdGVyU2F2ZUNlbGw6IG1lLm9uQWZ0ZXJTYXZlQ2VsbC5iaW5kKG1lKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHtkYXRhLGtleUZpZWxkLGNlbGxFZGl0LG9wdGlvbnMsLi4ub3RoZXJzfT10aGlzLnByb3BzO1xyXG4gICAgICAgIGNlbGxFZGl0UHJvcD1PYmplY3QuYXNzaWduKHt9LGNlbGxFZGl0LGNlbGxFZGl0UHJvcCk7XHJcbiAgICAgICAgb3B0aW9uc1Byb3A9T2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLG9wdGlvbnNQcm9wKTtcclxuICAgICAgICB2YXIgcmVtb3RlPXRoaXMucHJvcHMucmVtb3RlO1xyXG4gICAgICAgIGlmKHJlbW90ZT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICByZW1vdGU9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCb290c3RyYXBUYWJsZSBcclxuICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0ga2V5RmllbGQ9e2tleUZpZWxkfSByZW1vdGU9e3JlbW90ZX0gY2VsbEVkaXQ9e2NlbGxFZGl0UHJvcH0gb3B0aW9ucz17b3B0aW9uc1Byb3B9IHsuLi5vdGhlcnN9PlxyXG4gICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9Cb290c3RyYXBUYWJsZT5cclxuIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZnRlclRhYmxlQ29tcGxldGUoKXtcclxuXHJcbiAgICB9XHJcbiAgICBvbkFmdGVyRGVsZXRlUm93KHJvd0tleXMpe1xyXG4gICAgICBjb25zdCBtZT10aGlzO1xyXG4gICAgICBjb25zb2xlLmxvZygnZGVsZXRlJyxyb3dLZXlzKVxyXG4gICAgICBjb25zdCBrZXk9cm93S2V5c1swXTsgLy/nm67liY3lj6rliKDpmaTnrKzkuIDooYxcclxuICAgICAgY29uc3Qge3VybH09dGhpcy5wcm9wcztcclxuICAgICAgYWdlbnQuZGVsKHVybCsnLycra2V5KS50aGVuKHJlc3A9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmJvZHkpO1xyXG4gICAgICAgIHZhciB7ZGF0YX09bWUuc3RhdGU7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvZHVjdC5faWQgIT09IGtleTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgb25BZnRlckluc2VydFJvdyhyb3cpe1xyXG4gICAgICBjb25zdCB7dXJsLGtleUZpZWxkfT10aGlzLnByb3BzO1xyXG4gICAgICBhZ2VudC5wb3N0KHVybCxyb3cpLnRoZW4ocmVzcD0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3AuYm9keSlcclxuICAgICAgICB2YXIge2RhdGF9PXRoaXMuc3RhdGU7XHJcbiAgICAgICAgZGF0YS5wdXNoKHJlc3AuYm9keSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YX0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQWZ0ZXJTYXZlQ2VsbChyb3csIGNlbGxOYW1lLCBjZWxsVmFsdWUpe1xyXG4gICAgICBjb25zdCB7dXJsLGtleUZpZWxkfT10aGlzLnByb3BzO1xyXG4gICAgICBhZ2VudC5wdXQodXJsKycvJytyb3dba2V5RmllbGRdLHJvdykudGhlbihyZXNwPT57XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IHt1cmx9PXRoaXMucHJvcHM7XHJcbiAgICAgIGFnZW50LmdldCh1cmwpLnRoZW4ocmVzcD0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGE9cmVzcC5ib2R5O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVzdGZ1bFRhYmxlO1xyXG4iXX0=