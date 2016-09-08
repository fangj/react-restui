"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rest_reader = require("../../components/rest_reader");

var _rest_reader2 = _interopRequireDefault(_rest_reader);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./RestChooser.less');


var browser = function browser(props) {
    var data = props.data;
    var thumbView = props.thumbView;
    var keyField = props.keyField;
    var onChoose = props.onChoose;
    var chosen = props.chosen;

    var ThumbView = thumbView;
    return React.createElement(
        "div",
        { className: "browser" },
        data.map(function (d, i) {
            return React.createElement(
                "div",
                { key: d[keyField], onClick: function onClick() {
                        return onChoose(d);
                    }, className: (0, _classnames2.default)("old", { "chosen": chosen === d[keyField] }) },
                React.createElement(ThumbView, { data: d })
            );
        })
    );
};

var RestChooser = function (_React$Component) {
    _inherits(RestChooser, _React$Component);

    function RestChooser(props) {
        _classCallCheck(this, RestChooser);

        var _this = _possibleConstructorReturn(this, (RestChooser.__proto__ || Object.getPrototypeOf(RestChooser)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RestChooser, [{
        key: "render",
        value: function render() {
            var me = this;
            var _props = this.props;
            var url = _props.url;
            var thumbView = _props.thumbView;
            var keyField = _props.keyField;
            var onChoose = _props.onChoose;
            var chosen = _props.chosen;


            return React.createElement(_rest_reader2.default, { view: browser,
                url: url, thumbView: thumbView, keyField: keyField, onChoose: onChoose, chosen: chosen });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {}
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }]);

    return RestChooser;
}(React.Component);

RestChooser.propTypes = {
    url: React.PropTypes.string.isRequired,
    keyField: React.PropTypes.string.isRequired,
    thumbView: React.PropTypes.func.isRequired,
    onChoose: React.PropTypes.func.isRequired,
    chosen: React.PropTypes.string
};


module.exports = RestChooser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF9jaG9vc2VyL1Jlc3RDaG9vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUZBOzs7QUFHQSxJQUFNLFVBQVEsU0FBUixPQUFRLENBQUMsS0FBRCxFQUFTO0FBQUEsUUFDWixJQURZLEdBQzZCLEtBRDdCLENBQ1osSUFEWTtBQUFBLFFBQ1AsU0FETyxHQUM2QixLQUQ3QixDQUNQLFNBRE87QUFBQSxRQUNHLFFBREgsR0FDNkIsS0FEN0IsQ0FDRyxRQURIO0FBQUEsUUFDWSxRQURaLEdBQzZCLEtBRDdCLENBQ1ksUUFEWjtBQUFBLFFBQ3FCLE1BRHJCLEdBQzZCLEtBRDdCLENBQ3FCLE1BRHJCOztBQUVuQixRQUFNLFlBQVUsU0FBaEI7QUFDQSxXQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNTLGFBQUssR0FBTCxDQUFTLFVBQUMsQ0FBRCxFQUFHLENBQUg7QUFBQSxtQkFBTztBQUFBO0FBQUEsa0JBQUssS0FBSyxFQUFFLFFBQUYsQ0FBVixFQUF1QixTQUFTO0FBQUEsK0JBQUksU0FBUyxDQUFULENBQUo7QUFBQSxxQkFBaEMsRUFBaUQsV0FBVywwQkFBRyxLQUFILEVBQVMsRUFBQyxVQUFTLFdBQVMsRUFBRSxRQUFGLENBQW5CLEVBQVQsQ0FBNUQ7QUFBdUcsb0NBQUMsU0FBRCxJQUFXLE1BQU0sQ0FBakI7QUFBdkcsYUFBUDtBQUFBLFNBQVQ7QUFEVCxLQUFSO0FBR0gsQ0FORDs7SUFTTSxXOzs7QUFVRix5QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1QsS0FEUzs7QUFFZixjQUFLLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFJbEI7Ozs7aUNBSVE7QUFDTCxnQkFBSSxLQUFLLElBQVQ7QUFESyx5QkFFMEMsS0FBSyxLQUYvQztBQUFBLGdCQUVFLEdBRkYsVUFFRSxHQUZGO0FBQUEsZ0JBRU0sU0FGTixVQUVNLFNBRk47QUFBQSxnQkFFZ0IsUUFGaEIsVUFFZ0IsUUFGaEI7QUFBQSxnQkFFeUIsUUFGekIsVUFFeUIsUUFGekI7QUFBQSxnQkFFa0MsTUFGbEMsVUFFa0MsTUFGbEM7OztBQUlMLG1CQUNNLDZDQUFZLE1BQU0sT0FBbEI7QUFDQSxxQkFBSyxHQURMLEVBQ1UsV0FBVyxTQURyQixFQUNnQyxVQUFVLFFBRDFDLEVBQ29ELFVBQVUsUUFEOUQsRUFDd0UsUUFBUSxNQURoRixHQUROO0FBSUg7Ozs2Q0FFb0IsQ0FDcEI7Ozs0Q0FFbUIsQ0FDbkI7OztrREFFeUIsUyxFQUFXLENBQ3BDOzs7OENBRXFCLFMsRUFBVyxTLEVBQVc7QUFDeEMsbUJBQU8sSUFBUDtBQUNIOzs7NENBRW1CLFMsRUFBVyxTLEVBQVcsQ0FDekM7OzsyQ0FFa0IsUyxFQUFXLFMsRUFBVyxDQUN4Qzs7OytDQUVzQixDQUN0Qjs7OztFQWhEcUIsTUFBTSxTOztBQUExQixXLENBRUssUyxHQUFZO0FBQ2YsU0FBSyxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEYjtBQUVmLGNBQVUsTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRmxCO0FBR2YsZUFBVyxNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsVUFIakI7QUFJZixjQUFVLE1BQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixVQUpoQjtBQUtmLFlBQU8sTUFBTSxTQUFOLENBQWdCO0FBTFIsQzs7O0FBaUR2QixPQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoiUmVzdENob29zZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXF1aXJlKCcuL1Jlc3RDaG9vc2VyLmxlc3MnKTtcbmltcG9ydCBSZXN0UmVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jlc3RfcmVhZGVyXCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmNvbnN0IGJyb3dzZXI9KHByb3BzKT0+e1xuICAgIGNvbnN0IHtkYXRhLHRodW1iVmlldyxrZXlGaWVsZCxvbkNob29zZSxjaG9zZW59PXByb3BzO1xuICAgIGNvbnN0IFRodW1iVmlldz10aHVtYlZpZXc7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChkLGkpPT48ZGl2IGtleT17ZFtrZXlGaWVsZF19IG9uQ2xpY2s9eygpPT5vbkNob29zZShkKX0gY2xhc3NOYW1lPXtjeChcIm9sZFwiLHtcImNob3NlblwiOmNob3Nlbj09PWRba2V5RmllbGRdfSl9PjxUaHVtYlZpZXcgZGF0YT17ZH0vPjwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj4pXG59XG5cblxuY2xhc3MgUmVzdENob29zZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyAgPXtcbiAgICAgICAgdXJsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHRodW1iVmlldzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgb25DaG9vc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGNob3NlbjpSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBjb25zdCB7dXJsLHRodW1iVmlldyxrZXlGaWVsZCxvbkNob29zZSxjaG9zZW59PXRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJlc3RSZWFkZXIgdmlldz17YnJvd3Nlcn0gXG4gICAgICAgICAgICAgIHVybD17dXJsfSB0aHVtYlZpZXc9e3RodW1iVmlld30ga2V5RmllbGQ9e2tleUZpZWxkfSBvbkNob29zZT17b25DaG9vc2V9IGNob3Nlbj17Y2hvc2VufSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3RDaG9vc2VyO1xuIl19