"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rest_reader = require("../rest_reader");

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF9jaG9vc2VyL1Jlc3RDaG9vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUZBOzs7QUFHQSxJQUFNLFVBQVEsU0FBUixPQUFRLENBQUMsS0FBRCxFQUFTO0FBQUEsUUFDWixJQURZLEdBQzZCLEtBRDdCLENBQ1osSUFEWTtBQUFBLFFBQ1AsU0FETyxHQUM2QixLQUQ3QixDQUNQLFNBRE87QUFBQSxRQUNHLFFBREgsR0FDNkIsS0FEN0IsQ0FDRyxRQURIO0FBQUEsUUFDWSxRQURaLEdBQzZCLEtBRDdCLENBQ1ksUUFEWjtBQUFBLFFBQ3FCLE1BRHJCLEdBQzZCLEtBRDdCLENBQ3FCLE1BRHJCOztBQUVuQixRQUFNLFlBQVUsU0FBaEI7QUFDQSxXQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNTLGFBQUssR0FBTCxDQUFTLFVBQUMsQ0FBRCxFQUFHLENBQUg7QUFBQSxtQkFBTztBQUFBO0FBQUEsa0JBQUssS0FBSyxFQUFFLFFBQUYsQ0FBVixFQUF1QixTQUFTO0FBQUEsK0JBQUksU0FBUyxDQUFULENBQUo7QUFBQSxxQkFBaEMsRUFBaUQsV0FBVywwQkFBRyxLQUFILEVBQVMsRUFBQyxVQUFTLFdBQVMsRUFBRSxRQUFGLENBQW5CLEVBQVQsQ0FBNUQ7QUFBdUcsb0NBQUMsU0FBRCxJQUFXLE1BQU0sQ0FBakI7QUFBdkcsYUFBUDtBQUFBLFNBQVQ7QUFEVCxLQUFSO0FBR0gsQ0FORDs7SUFTTSxXOzs7QUFVRix5QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1QsS0FEUzs7QUFFZixjQUFLLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFJbEI7Ozs7aUNBSVE7QUFDTCxnQkFBSSxLQUFLLElBQVQ7QUFESyx5QkFFMEMsS0FBSyxLQUYvQztBQUFBLGdCQUVFLEdBRkYsVUFFRSxHQUZGO0FBQUEsZ0JBRU0sU0FGTixVQUVNLFNBRk47QUFBQSxnQkFFZ0IsUUFGaEIsVUFFZ0IsUUFGaEI7QUFBQSxnQkFFeUIsUUFGekIsVUFFeUIsUUFGekI7QUFBQSxnQkFFa0MsTUFGbEMsVUFFa0MsTUFGbEM7OztBQUlMLG1CQUNNLDZDQUFZLE1BQU0sT0FBbEI7QUFDQSxxQkFBSyxHQURMLEVBQ1UsV0FBVyxTQURyQixFQUNnQyxVQUFVLFFBRDFDLEVBQ29ELFVBQVUsUUFEOUQsRUFDd0UsUUFBUSxNQURoRixHQUROO0FBSUg7Ozs2Q0FFb0IsQ0FDcEI7Ozs0Q0FFbUIsQ0FDbkI7OztrREFFeUIsUyxFQUFXLENBQ3BDOzs7OENBRXFCLFMsRUFBVyxTLEVBQVc7QUFDeEMsbUJBQU8sSUFBUDtBQUNIOzs7NENBRW1CLFMsRUFBVyxTLEVBQVcsQ0FDekM7OzsyQ0FFa0IsUyxFQUFXLFMsRUFBVyxDQUN4Qzs7OytDQUVzQixDQUN0Qjs7OztFQWhEcUIsTUFBTSxTOztBQUExQixXLENBRUssUyxHQUFZO0FBQ2YsU0FBSyxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEYjtBQUVmLGNBQVUsTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRmxCO0FBR2YsZUFBVyxNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsVUFIakI7QUFJZixjQUFVLE1BQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixVQUpoQjtBQUtmLFlBQU8sTUFBTSxTQUFOLENBQWdCO0FBTFIsQzs7O0FBaUR2QixPQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoiUmVzdENob29zZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXF1aXJlKCcuL1Jlc3RDaG9vc2VyLmxlc3MnKTtcbmltcG9ydCBSZXN0UmVhZGVyIGZyb20gXCIuLi9yZXN0X3JlYWRlclwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5jb25zdCBicm93c2VyPShwcm9wcyk9PntcbiAgICBjb25zdCB7ZGF0YSx0aHVtYlZpZXcsa2V5RmllbGQsb25DaG9vc2UsY2hvc2VufT1wcm9wcztcbiAgICBjb25zdCBUaHVtYlZpZXc9dGh1bWJWaWV3O1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJicm93c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZCxpKT0+PGRpdiBrZXk9e2Rba2V5RmllbGRdfSBvbkNsaWNrPXsoKT0+b25DaG9vc2UoZCl9IGNsYXNzTmFtZT17Y3goXCJvbGRcIix7XCJjaG9zZW5cIjpjaG9zZW49PT1kW2tleUZpZWxkXX0pfT48VGh1bWJWaWV3IGRhdGE9e2R9Lz48L2Rpdj4pfVxuICAgICAgICAgICAgPC9kaXY+KVxufVxuXG5cbmNsYXNzIFJlc3RDaG9vc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgID17XG4gICAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB0aHVtYlZpZXc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2hvb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBjaG9zZW46UmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgY29uc3Qge3VybCx0aHVtYlZpZXcsa2V5RmllbGQsb25DaG9vc2UsY2hvc2VufT10aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSZXN0UmVhZGVyIHZpZXc9e2Jyb3dzZXJ9IFxuICAgICAgICAgICAgICB1cmw9e3VybH0gdGh1bWJWaWV3PXt0aHVtYlZpZXd9IGtleUZpZWxkPXtrZXlGaWVsZH0gb25DaG9vc2U9e29uQ2hvb3NlfSBjaG9zZW49e2Nob3Nlbn0gLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXN0Q2hvb3NlcjtcbiJdfQ==