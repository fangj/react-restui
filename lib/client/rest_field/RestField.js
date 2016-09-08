"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactBootstrap = require("react-bootstrap");

var _rest_chooser = require("../../components/rest_chooser");

var _rest_chooser2 = _interopRequireDefault(_rest_chooser);

var _rest_reader = require("../../components/rest_reader");

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF9maWVsZC9SZXN0RmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBQSxNQUNiLEtBRGEsR0FDVSxLQURWLENBQ2IsS0FEYTtBQUFBLE1BQ04sUUFETSxHQUNVLEtBRFYsQ0FDTixRQURNO0FBQUEsTUFDSSxFQURKLEdBQ1UsS0FEVixDQUNJLEVBREo7O0FBRXBCLE1BQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixXQUFPLElBQVA7QUFDRDtBQUNELFNBQ0U7QUFBQTtBQUFBLE1BQU8sV0FBVSxlQUFqQixFQUFpQyxTQUFTLEVBQTFDO0FBQ0csZUFBVyxRQUFRLEdBQW5CLEdBQXlCO0FBRDVCLEdBREY7QUFLRDtBQUNELElBQU0sWUFBVSxTQUFWLFNBQVUsQ0FBQyxLQUFEO0FBQUEsU0FBUztBQUFBO0FBQUE7QUFBTSxVQUFNLElBQU4sR0FBVyxLQUFLLFNBQUwsQ0FBZSxNQUFNLElBQXJCLEVBQTBCLElBQTFCLEVBQStCLENBQS9CLENBQVgsR0FBNkM7QUFBbkQsR0FBVDtBQUFBLENBQWhCOztBQUdBLFNBQVMsU0FBVCxPQUE0QztBQUFBLE1BQXhCLEdBQXdCLFFBQXhCLEdBQXdCO0FBQUEsTUFBcEIsUUFBb0IsUUFBcEIsUUFBb0I7QUFBQSxNQUFYLFNBQVcsUUFBWCxTQUFXOztBQUFBLE1BRWxDLFNBRmtDO0FBQUE7O0FBR3RDLHVCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWCxLQURXOztBQUVqQixZQUFLLEtBQUwsR0FBYSxFQUFDLEtBQUksTUFBTSxRQUFYLEVBQWI7QUFGaUI7QUFHbEI7O0FBTnFDO0FBQUE7QUFBQSw4QkFRL0I7QUFDTCxhQUFLLFFBQUwsQ0FBYyxFQUFDLFdBQVUsS0FBWCxFQUFkO0FBQ0Q7QUFWcUM7QUFBQTtBQUFBLCtCQVk3QjtBQUFBOztBQUNQLFlBQU0sTUFBTSxLQUFLLEtBQUwsQ0FBVyxRQUF2QjtBQURPLFlBRUEsS0FGQSxHQUVPLEtBQUssS0FBTCxDQUFXLE1BRmxCLENBRUEsS0FGQTtBQUFBLFlBR0EsR0FIQSxHQUdLLEtBQUssS0FBTCxDQUFXLFFBSGhCLENBR0EsR0FIQTs7QUFJUCxvQkFBVSxhQUFXLFNBQXJCO0FBQ0EsZUFDRTtBQUFBO0FBQUE7QUFDQSw4QkFBQyxLQUFELElBQU8sT0FBTyxLQUFkLEVBQXFCLFVBQVUsS0FBSyxLQUFMLENBQVcsUUFBMUMsRUFBb0QsSUFBSSxHQUF4RCxHQURBO0FBRUU7QUFBQTtBQUFBLGNBQUssSUFBSSxHQUFUO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZixFQUF1QixTQUFTLG1CQUFJO0FBQUMseUJBQUssUUFBTCxDQUFjLEVBQUMsV0FBVSxJQUFYLEVBQWQ7QUFBZ0MsaUJBQXJFO0FBQ0ksZUFBQyxHQUFELEdBQUssR0FBTCxHQUFTLDZDQUFZLE1BQU0sU0FBbEIsRUFBNkIsS0FBSyxNQUFJLEdBQUosR0FBUSxHQUExQztBQURiLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQU8sTUFBTSxLQUFLLEtBQUwsQ0FBVyxTQUF4QixFQUFtQyxRQUFRLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBM0M7QUFDQTtBQUFBO0FBQUEsa0JBQUssV0FBVSxpQkFBZjtBQUNBLDhEQUFjLEtBQUssR0FBbkIsRUFBd0IsV0FBVyxTQUFuQyxFQUE4QyxVQUFVLFFBQXhELEVBQWtFLFFBQVEsR0FBMUU7QUFDQSw0QkFBVSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBRFY7QUFEQTtBQURBO0FBSkY7QUFGRixTQURGO0FBZ0JEO0FBakNxQztBQUFBO0FBQUEsK0JBbUM3QixJQW5DNkIsRUFtQ3hCO0FBQ1o7QUFDQSxhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEtBQUssR0FBekI7QUFDQSxhQUFLLFFBQUwsQ0FBYyxFQUFDLFdBQVUsS0FBWCxFQUFkO0FBQ0Q7QUF2Q3FDOztBQUFBO0FBQUEsSUFFaEIsTUFBTSxTQUZVOztBQTBDeEMsU0FBTyxTQUFQO0FBQ0g7QUFDRCxPQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoiUmVzdEZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RhbH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFJlc3RDaG9vc2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jlc3RfY2hvb3NlclwiO1xuaW1wb3J0IFJlc3RSZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVzdF9yZWFkZXJcIjtcblxuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgY29uc3Qge2xhYmVsLCByZXF1aXJlZCwgaWR9ID0gcHJvcHM7XG4gIGlmICghbGFiZWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj17aWR9PlxuICAgICAge3JlcXVpcmVkID8gbGFiZWwgKyBcIipcIiA6IGxhYmVsfVxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5jb25zdCBUaHVtYlZpZXc9KHByb3BzKT0+PGRpdj57cHJvcHMuZGF0YT9KU09OLnN0cmluZ2lmeShwcm9wcy5kYXRhLG51bGwsMik6XCJuZXdcIn08L2Rpdj5cblxuXG5mdW5jdGlvbiByZXN0RmllbGQoe3VybCxrZXlGaWVsZCx0aHVtYlZpZXd9KXtcblxuICAgIGNsYXNzIFJlc3RGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7X2lkOnByb3BzLmZvcm1EYXRhfTtcbiAgICAgIH1cblxuICAgICAgY2xvc2UoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOmZhbHNlfSlcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBfaWQgPSB0aGlzLnByb3BzLmZvcm1EYXRhO1xuICAgICAgICBjb25zdCB7dGl0bGV9PXRoaXMucHJvcHMuc2NoZW1hO1xuICAgICAgICBjb25zdCB7JGlkfT10aGlzLnByb3BzLmlkU2NoZW1hO1xuICAgICAgICB0aHVtYlZpZXc9dGh1bWJWaWV3fHxUaHVtYlZpZXc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGFiZWwgbGFiZWw9e3RpdGxlfSByZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH0gaWQ9eyRpZH0gLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9eyRpZH0gPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGh1bWInIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOnRydWV9KX19PlxuICAgICAgICAgICAgICAgICB7IV9pZD9cIitcIjo8UmVzdFJlYWRlciB2aWV3PXt0aHVtYlZpZXd9IHVybD17dXJsKycvJytfaWR9Lz59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPFJlc3RDaG9vc2VyICB1cmw9e3VybH0gdGh1bWJWaWV3PXt0aHVtYlZpZXd9IGtleUZpZWxkPXtrZXlGaWVsZH0gY2hvc2VuPXtfaWR9XG4gICAgICAgICAgICAgIG9uQ2hvb3NlPXt0aGlzLm9uQ2hvb3NlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb25DaG9vc2UoZGF0YSl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaG9vc2UnLGRhdGEpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRhdGEuX2lkKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOmZhbHNlfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlc3RGaWVsZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVzdEZpZWxkO1xuIl19