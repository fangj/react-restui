"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qiniu_upload_zone = require("../../components/qiniu_upload_zone");

var _qiniu_upload_zone2 = _interopRequireDefault(_qiniu_upload_zone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./QiniuImageUploader.less');


var QiniuImageUploader = function (_React$Component) {
    _inherits(QiniuImageUploader, _React$Component);

    function QiniuImageUploader(props) {
        _classCallCheck(this, QiniuImageUploader);

        var _this = _possibleConstructorReturn(this, (QiniuImageUploader.__proto__ || Object.getPrototypeOf(QiniuImageUploader)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(QiniuImageUploader, [{
        key: "render",
        value: function render() {
            var me = this;
            var url = this.state.url;

            return React.createElement(
                "div",
                { className: "image_uploader" },
                React.createElement(_qiniu_upload_zone2.default, { tokenUrl: "/qntoken", host: "http://7sbkh6.com1.z0.glb.clouddn.com", onUploaded: this.onUploaded.bind(this), accept: "image/*" }),
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

    return QiniuImageUploader;
}(React.Component);

module.exports = QiniuImageUploader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcWluaXVfaW1hZ2VfdXBsb2FkZXIvUWluaXVJbWFnZVVwbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFEQTs7O0lBR00sa0I7OztBQUVGLGdDQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SUFDVCxLQURTOztBQUVmLGNBQUssS0FBTCxHQUFhLEVBQWI7QUFGZTtBQUlsQjs7OztpQ0FFUTtBQUNMLGdCQUFJLEtBQUssSUFBVDtBQURLLGdCQUVFLEdBRkYsR0FFTyxLQUFLLEtBRlosQ0FFRSxHQUZGOztBQUdMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGdCQUFmO0FBQ0ssbUVBQWMsVUFBUyxVQUF2QixFQUFrQyxNQUFLLHVDQUF2QyxFQUErRSxZQUFZLEtBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixJQUFyQixDQUEzRixFQUF1SCxRQUFPLFNBQTlILEdBREw7QUFFTSxpQkFBQyxHQUFELEdBQUssSUFBTCxHQUFVLDZCQUFLLEtBQUssR0FBVjtBQUZoQixhQURKO0FBTUg7OzttQ0FFVSxLLEVBQU07QUFDYixvQkFBUSxHQUFSLENBQVksTUFBTSxDQUFOLENBQVo7QUFDQSxpQkFBSyxRQUFMLENBQWMsRUFBQyxLQUFJLE1BQU0sQ0FBTixFQUFTLEdBQWQsRUFBZDtBQUNIOzs7NkNBR29CLENBQ3BCOzs7NENBRW1CLENBQ25COzs7a0RBRXlCLFMsRUFBVyxDQUNwQzs7OzhDQUVxQixTLEVBQVcsUyxFQUFXO0FBQ3hDLG1CQUFPLElBQVA7QUFDSDs7OzRDQUVtQixTLEVBQVcsUyxFQUFXLENBQ3pDOzs7MkNBRWtCLFMsRUFBVyxTLEVBQVcsQ0FDeEM7OzsrQ0FFc0IsQ0FDdEI7Ozs7RUE3QzRCLE1BQU0sUzs7QUFnRHZDLE9BQU8sT0FBUCxHQUFpQixrQkFBakIiLCJmaWxlIjoiUWluaXVJbWFnZVVwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVxdWlyZSgnLi9RaW5pdUltYWdlVXBsb2FkZXIubGVzcycpO1xuaW1wb3J0IFFOVXBsb2FkWm9uZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xaW5pdV91cGxvYWRfem9uZVwiO1xuXG5jbGFzcyBRaW5pdUltYWdlVXBsb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgY29uc3Qge3VybH09dGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfdXBsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgPFFOVXBsb2FkWm9uZSB0b2tlblVybD1cIi9xbnRva2VuXCIgaG9zdD1cImh0dHA6Ly83c2JraDYuY29tMS56MC5nbGIuY2xvdWRkbi5jb21cIiBvblVwbG9hZGVkPXt0aGlzLm9uVXBsb2FkZWQuYmluZCh0aGlzKX0gYWNjZXB0PVwiaW1hZ2UvKlwiLz5cbiAgICAgICAgICAgICAgICAgeyF1cmw/bnVsbDo8aW1nIHNyYz17dXJsfS8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25VcGxvYWRlZChmaWxlcyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVzWzBdKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHt1cmw6ZmlsZXNbMF0udXJsfSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRaW5pdUltYWdlVXBsb2FkZXI7XG4iXX0=