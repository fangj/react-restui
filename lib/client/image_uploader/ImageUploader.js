"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _upload_zone = require("../../components/upload_zone");

var _upload_zone2 = _interopRequireDefault(_upload_zone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./ImageUploader.less');

var ImageUploader = function (_React$Component) {
    _inherits(ImageUploader, _React$Component);

    function ImageUploader(props) {
        _classCallCheck(this, ImageUploader);

        var _this = _possibleConstructorReturn(this, (ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ImageUploader, [{
        key: "render",
        value: function render() {
            var me = this;
            var url = this.state.url;

            return React.createElement(
                "div",
                { className: "image_uploader" },
                React.createElement(_upload_zone2.default, { url: "/upload", onUploaded: this.onUploaded.bind(this), accept: "image/*" }),
                !url ? null : React.createElement("img", { src: url })
            );
        }
    }, {
        key: "onUploaded",
        value: function onUploaded(files) {
            console.log(files[0]);
            this.setState({ url: files[0].url });
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

    return ImageUploader;
}(React.Component);

module.exports = ImageUploader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvaW1hZ2VfdXBsb2FkZXIvSW1hZ2VVcGxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQURBLFFBQVEsc0JBQVI7O0lBR00sYTs7O0FBRUYsMkJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBSWxCOzs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxJQUFUO0FBREssZ0JBRUUsR0FGRixHQUVPLEtBQUssS0FGWixDQUVFLEdBRkY7O0FBR0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsZ0JBQWY7QUFDSyw2REFBWSxLQUFJLFNBQWhCLEVBQTBCLFlBQVksS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBQXRDLEVBQWtFLFFBQU8sU0FBekUsR0FETDtBQUVNLGlCQUFDLEdBQUQsR0FBSyxJQUFMLEdBQVUsNkJBQUssS0FBSyxHQUFWO0FBRmhCLGFBREo7QUFNSDs7O21DQUVVLEssRUFBTTtBQUNiLG9CQUFRLEdBQVIsQ0FBWSxNQUFNLENBQU4sQ0FBWjtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxFQUFDLEtBQUksTUFBTSxDQUFOLEVBQVMsR0FBZCxFQUFkO0FBQ0g7Ozs2Q0FHb0IsQ0FDcEI7Ozs0Q0FFbUIsQ0FDbkI7OztrREFFeUIsUyxFQUFXLENBQ3BDOzs7OENBRXFCLFMsRUFBVyxTLEVBQVc7QUFDeEMsbUJBQU8sSUFBUDtBQUNIOzs7NENBRW1CLFMsRUFBVyxTLEVBQVcsQ0FDekM7OzsyQ0FFa0IsUyxFQUFXLFMsRUFBVyxDQUN4Qzs7OytDQUVzQixDQUN0Qjs7OztFQTdDdUIsTUFBTSxTOztBQWdEbEMsT0FBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6IkltYWdlVXBsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL0ltYWdlVXBsb2FkZXIubGVzcycpO1xuaW1wb3J0IFVwbG9hZFpvbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkX3pvbmVcIjtcblxuY2xhc3MgSW1hZ2VVcGxvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBjb25zdCB7dXJsfT10aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV91cGxvYWRlclwiPlxuICAgICAgICAgICAgICAgICA8VXBsb2FkWm9uZSB1cmw9XCIvdXBsb2FkXCIgb25VcGxvYWRlZD17dGhpcy5vblVwbG9hZGVkLmJpbmQodGhpcyl9IGFjY2VwdD1cImltYWdlLypcIi8+XG4gICAgICAgICAgICAgICAgIHshdXJsP251bGw6PGltZyBzcmM9e3VybH0vPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVXBsb2FkZWQoZmlsZXMpe1xuICAgICAgICBjb25zb2xlLmxvZyhmaWxlc1swXSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXJsOmZpbGVzWzBdLnVybH0pO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VVcGxvYWRlcjtcbiJdfQ==