"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactBootstrap = require("react-bootstrap");

var _rest_chooser = require("../rest_chooser");

var _rest_chooser2 = _interopRequireDefault(_rest_chooser);

var _rest_reader = require("../rest_reader");

var _rest_reader2 = _interopRequireDefault(_rest_reader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Label(props) {
  var label = props.label;
  var required = props.required;
  var id = props.id;

  if (!label) {
    return null;
  }
  return React.createElement(
    "label",
    { className: "control-label", htmlFor: id },
    required ? label + "*" : label
  );
}
var ThumbView = function ThumbView(props) {
  return React.createElement(
    "div",
    null,
    props.data ? JSON.stringify(props.data, null, 2) : "new"
  );
};

function restField(_ref) {
  var url = _ref.url;
  var keyField = _ref.keyField;
  var thumbView = _ref.thumbView;

  var RestField = function (_React$Component) {
    _inherits(RestField, _React$Component);

    function RestField(props) {
      _classCallCheck(this, RestField);

      var _this = _possibleConstructorReturn(this, (RestField.__proto__ || Object.getPrototypeOf(RestField)).call(this, props));

      _this.state = { _id: props.formData };
      return _this;
    }

    _createClass(RestField, [{
      key: "close",
      value: function close() {
        this.setState({ showModal: false });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _id = this.props.formData;
        var title = this.props.schema.title;
        var $id = this.props.idSchema.$id;

        thumbView = thumbView || ThumbView;
        return React.createElement(
          "div",
          null,
          React.createElement(Label, { label: title, required: this.props.required, id: $id }),
          React.createElement(
            "div",
            { id: $id },
            React.createElement(
              "div",
              { className: "thumb", onClick: function onClick() {
                  _this2.setState({ showModal: true });
                } },
              !_id ? "+" : React.createElement(_rest_reader2.default, { view: thumbView, url: url + '/' + _id })
            ),
            React.createElement(
              _reactBootstrap.Modal,
              { show: this.state.showModal, onHide: this.close.bind(this) },
              React.createElement(
                "div",
                { className: "modal-container" },
                React.createElement(_rest_chooser2.default, { url: url, thumbView: thumbView, keyField: keyField, chosen: _id,
                  onChoose: this.onChoose.bind(this) })
              )
            )
          )
        );
      }
    }, {
      key: "onChoose",
      value: function onChoose(data) {
        // console.log('choose',data);
        this.props.onChange(data._id);
        this.setState({ showModal: false });
      }
    }]);

    return RestField;
  }(React.Component);

  return RestField;
}
module.exports = restField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF9maWVsZC9SZXN0RmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBQSxNQUNiLEtBRGEsR0FDVSxLQURWLENBQ2IsS0FEYTtBQUFBLE1BQ04sUUFETSxHQUNVLEtBRFYsQ0FDTixRQURNO0FBQUEsTUFDSSxFQURKLEdBQ1UsS0FEVixDQUNJLEVBREo7O0FBRXBCLE1BQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixXQUFPLElBQVA7QUFDRDtBQUNELFNBQ0U7QUFBQTtBQUFBLE1BQU8sV0FBVSxlQUFqQixFQUFpQyxTQUFTLEVBQTFDO0FBQ0csZUFBVyxRQUFRLEdBQW5CLEdBQXlCO0FBRDVCLEdBREY7QUFLRDtBQUNELElBQU0sWUFBVSxTQUFWLFNBQVUsQ0FBQyxLQUFEO0FBQUEsU0FBUztBQUFBO0FBQUE7QUFBTSxVQUFNLElBQU4sR0FBVyxLQUFLLFNBQUwsQ0FBZSxNQUFNLElBQXJCLEVBQTBCLElBQTFCLEVBQStCLENBQS9CLENBQVgsR0FBNkM7QUFBbkQsR0FBVDtBQUFBLENBQWhCOztBQUdBLFNBQVMsU0FBVCxPQUE0QztBQUFBLE1BQXhCLEdBQXdCLFFBQXhCLEdBQXdCO0FBQUEsTUFBcEIsUUFBb0IsUUFBcEIsUUFBb0I7QUFBQSxNQUFYLFNBQVcsUUFBWCxTQUFXOztBQUFBLE1BRWxDLFNBRmtDO0FBQUE7O0FBR3RDLHVCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWCxLQURXOztBQUVqQixZQUFLLEtBQUwsR0FBYSxFQUFDLEtBQUksTUFBTSxRQUFYLEVBQWI7QUFGaUI7QUFHbEI7O0FBTnFDO0FBQUE7QUFBQSw4QkFRL0I7QUFDTCxhQUFLLFFBQUwsQ0FBYyxFQUFDLFdBQVUsS0FBWCxFQUFkO0FBQ0Q7QUFWcUM7QUFBQTtBQUFBLCtCQVk3QjtBQUFBOztBQUNQLFlBQU0sTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUF2QjtBQURPLFlBRUEsS0FGQSxHQUVPLEtBQUssS0FBTCxDQUFXLE1BRmxCLENBRUEsS0FGQTtBQUFBLFlBR0EsR0FIQSxHQUdLLEtBQUssS0FBTCxDQUFXLFFBSGhCLENBR0EsR0FIQTs7QUFJUCxvQkFBVSxhQUFXLFNBQXJCO0FBQ0EsZUFDRTtBQUFBO0FBQUE7QUFDQSw4QkFBQyxLQUFELElBQU8sT0FBTyxLQUFkLEVBQXFCLFVBQVUsS0FBSyxLQUFMLENBQVcsUUFBMUMsRUFBb0QsSUFBSSxHQUF4RCxHQURBO0FBRUU7QUFBQTtBQUFBLGNBQUssSUFBSSxHQUFUO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZixFQUF1QixTQUFTLG1CQUFJO0FBQUMseUJBQUssUUFBTCxDQUFjLEVBQUMsV0FBVSxJQUFYLEVBQWQ7QUFBZ0MsaUJBQXJFO0FBQ0ksZUFBQyxHQUFELEdBQUssR0FBTCxHQUFTLDZDQUFZLE1BQU0sU0FBbEIsRUFBNkIsS0FBSyxNQUFJLEdBQUosR0FBUSxHQUExQztBQURiLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQU8sTUFBTSxLQUFLLEtBQUwsQ0FBVyxTQUF4QixFQUFtQyxRQUFRLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBM0M7QUFDQTtBQUFBO0FBQUEsa0JBQUssV0FBVSxpQkFBZjtBQUNBLDhEQUFjLEtBQUssR0FBbkIsRUFBd0IsV0FBVyxTQUFuQyxFQUE4QyxVQUFVLFFBQXhELEVBQWtFLFFBQVEsR0FBMUU7QUFDQSw0QkFBVSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBRFY7QUFEQTtBQURBO0FBSkY7QUFGRixTQURGO0FBZ0JEO0FBakNxQztBQUFBO0FBQUEsK0JBbUM3QixJQW5DNkIsRUFtQ3hCO0FBQ1o7QUFDQSxhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEtBQUssR0FBekI7QUFDQSxhQUFLLFFBQUwsQ0FBYyxFQUFDLFdBQVUsS0FBWCxFQUFkO0FBQ0Q7QUF2Q3FDOztBQUFBO0FBQUEsSUFFaEIsTUFBTSxTQUZVOztBQTBDeEMsU0FBTyxTQUFQO0FBQ0g7QUFDRCxPQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoiUmVzdEZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RhbH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFJlc3RDaG9vc2VyIGZyb20gXCIuLi9yZXN0X2Nob29zZXJcIjtcbmltcG9ydCBSZXN0UmVhZGVyIGZyb20gXCIuLi9yZXN0X3JlYWRlclwiO1xuXG5mdW5jdGlvbiBMYWJlbChwcm9wcykge1xuICBjb25zdCB7bGFiZWwsIHJlcXVpcmVkLCBpZH0gPSBwcm9wcztcbiAgaWYgKCFsYWJlbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXtpZH0+XG4gICAgICB7cmVxdWlyZWQgPyBsYWJlbCArIFwiKlwiIDogbGFiZWx9XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cbmNvbnN0IFRodW1iVmlldz0ocHJvcHMpPT48ZGl2Pntwcm9wcy5kYXRhP0pTT04uc3RyaW5naWZ5KHByb3BzLmRhdGEsbnVsbCwyKTpcIm5ld1wifTwvZGl2PlxuXG5cbmZ1bmN0aW9uIHJlc3RGaWVsZCh7dXJsLGtleUZpZWxkLHRodW1iVmlld30pe1xuXG4gICAgY2xhc3MgUmVzdEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtfaWQ6cHJvcHMuZm9ybURhdGF9O1xuICAgICAgfVxuXG4gICAgICBjbG9zZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6ZmFsc2V9KVxuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IF9pZCA9IHRoaXMucHJvcHMuZm9ybURhdGE7XG4gICAgICAgIGNvbnN0IHt0aXRsZX09dGhpcy5wcm9wcy5zY2hlbWE7XG4gICAgICAgIGNvbnN0IHskaWR9PXRoaXMucHJvcHMuaWRTY2hlbWE7XG4gICAgICAgIHRodW1iVmlldz10aHVtYlZpZXd8fFRodW1iVmlldztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMYWJlbCBsYWJlbD17dGl0bGV9IHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfSBpZD17JGlkfSAvPlxuICAgICAgICAgICAgPGRpdiBpZD17JGlkfSA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aHVtYicgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6dHJ1ZX0pfX0+XG4gICAgICAgICAgICAgICAgIHshX2lkP1wiK1wiOjxSZXN0UmVhZGVyIHZpZXc9e3RodW1iVmlld30gdXJsPXt1cmwrJy8nK19pZH0vPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0gb25IaWRlPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8UmVzdENob29zZXIgIHVybD17dXJsfSB0aHVtYlZpZXc9e3RodW1iVmlld30ga2V5RmllbGQ9e2tleUZpZWxkfSBjaG9zZW49e19pZH1cbiAgICAgICAgICAgICAgb25DaG9vc2U9e3RoaXMub25DaG9vc2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvbkNob29zZShkYXRhKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nob29zZScsZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZGF0YS5faWQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6ZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVzdEZpZWxkO1xufVxubW9kdWxlLmV4cG9ydHMgPSByZXN0RmllbGQ7XG4iXX0=