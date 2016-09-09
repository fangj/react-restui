'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./UploadZone.less');
var Dropzone = require('react-dropzone');
var agent = require('superagent-promise')(require('superagent'), Promise);

var DefaultView = function DefaultView(props) {
    return React.createElement(
        'div',
        { style: { fontSize: "120px", textAlign: "center" } },
        '+'
    );
};

var UploadZone = function (_React$Component) {
    _inherits(UploadZone, _React$Component);

    function UploadZone(props) {
        _classCallCheck(this, UploadZone);

        var _this = _possibleConstructorReturn(this, (UploadZone.__proto__ || Object.getPrototypeOf(UploadZone)).call(this, props));

        _this.state = {
            children: props.children
        };
        return _this;
    }

    _createClass(UploadZone, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _props = this.props;
            var url = _props.url;
            var onUploaded = _props.onUploaded;

            var others = _objectWithoutProperties(_props, ['url', 'onUploaded']);

            return React.createElement(
                Dropzone,
                _extends({ onDrop: this.onDrop.bind(this) }, others),
                this.state.children || React.createElement(DefaultView, null)
            );
        }
    }, {
        key: 'onDrop',
        value: function onDrop(files) {
            var me = this;
            console.log('Received files: ', files);
            var file = files[0];
            if (!file) {
                return;
            }
            var _props2 = this.props;
            var url = _props2.url;
            var onUploaded = _props2.onUploaded;

            if (!onUploaded || typeof onUploaded !== 'function') {
                return;
            }
            agent.post(url).attach('files', file, file.name).on('progress', me.onProgress.bind(me)).then(function (res) {
                var result = res.body;
                file.url = result.url;
                onUploaded([file]);
            });
        }
    }, {
        key: 'onProgress',
        value: function onProgress(e) {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ children: nextProps.children });
        }
    }]);

    return UploadZone;
}(React.Component);

UploadZone.propTypes = {
    children: React.PropTypes.node, // Contents of the dropzone
    url: React.PropTypes.string.isRequired,
    onUploaded: React.PropTypes.func.isRequired
};


module.exports = UploadZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvdXBsb2FkX3pvbmUvVXBsb2FkWm9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVEsbUJBQVI7QUFDQSxJQUFJLFdBQVcsUUFBUSxnQkFBUixDQUFmO0FBQ0EsSUFBSSxRQUFRLFFBQVEsb0JBQVIsRUFBOEIsUUFBUSxZQUFSLENBQTlCLEVBQW9ELE9BQXBELENBQVo7O0FBRUEsSUFBTSxjQUFZLFNBQVosV0FBWSxDQUFDLEtBQUQ7QUFBQSxXQUFTO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBQyxVQUFTLE9BQVYsRUFBa0IsV0FBVSxRQUE1QixFQUFaO0FBQUE7QUFBQSxLQUFUO0FBQUEsQ0FBbEI7O0lBRU0sVTs7O0FBVUYsd0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxzQkFBUyxNQUFNO0FBRE4sU0FBYjtBQUZlO0FBS2xCOzs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxJQUFUO0FBREsseUJBRTRCLEtBQUssS0FGakM7QUFBQSxnQkFFRSxHQUZGLFVBRUUsR0FGRjtBQUFBLGdCQUVNLFVBRk4sVUFFTSxVQUZOOztBQUFBLGdCQUVvQixNQUZwQjs7QUFHTCxtQkFDSTtBQUFDLHdCQUFEO0FBQUEsMkJBQVUsUUFBUSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWxCLElBQThDLE1BQTlDO0FBQ0cscUJBQUssS0FBTCxDQUFXLFFBQVgsSUFBcUIsb0JBQUMsV0FBRDtBQUR4QixhQURKO0FBS0g7OzsrQkFFTSxLLEVBQU87QUFDVixnQkFBSSxLQUFHLElBQVA7QUFDQSxvQkFBUSxHQUFSLENBQVksa0JBQVosRUFBZ0MsS0FBaEM7QUFDQSxnQkFBSSxPQUFLLE1BQU0sQ0FBTixDQUFUO0FBQ0EsZ0JBQUcsQ0FBQyxJQUFKLEVBQVM7QUFBQztBQUFRO0FBSlIsMEJBS2EsS0FBSyxLQUxsQjtBQUFBLGdCQUtILEdBTEcsV0FLSCxHQUxHO0FBQUEsZ0JBS0MsVUFMRCxXQUtDLFVBTEQ7O0FBTVYsZ0JBQUcsQ0FBQyxVQUFELElBQWEsT0FBTyxVQUFQLEtBQXNCLFVBQXRDLEVBQWlEO0FBQUM7QUFBUTtBQUMxRCxrQkFBTSxJQUFOLENBQVcsR0FBWCxFQUNDLE1BREQsQ0FDUSxPQURSLEVBQ2dCLElBRGhCLEVBQ3FCLEtBQUssSUFEMUIsRUFFQyxFQUZELENBRUksVUFGSixFQUVnQixHQUFHLFVBQUgsQ0FBYyxJQUFkLENBQW1CLEVBQW5CLENBRmhCLEVBR0MsSUFIRCxDQUdNLGVBQU87QUFDVCxvQkFBSSxTQUFPLElBQUksSUFBZjtBQUNBLHFCQUFLLEdBQUwsR0FBUyxPQUFPLEdBQWhCO0FBQ0EsMkJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxhQVBEO0FBUUg7OzttQ0FFVSxDLEVBQUUsQ0FFWjs7O2tEQUV5QixTLEVBQVc7QUFDakMsaUJBQUssUUFBTCxDQUFjLEVBQUMsVUFBUyxVQUFVLFFBQXBCLEVBQWQ7QUFDSDs7OztFQWxEb0IsTUFBTSxTOztBQUF6QixVLENBR0ssUyxHQUFZO0FBQ2YsY0FBVSxNQUFNLFNBQU4sQ0FBZ0IsSUFEWCxFQUNpQjtBQUNoQyxTQUFLLE1BQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQUZiO0FBR2YsZ0JBQVcsTUFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCO0FBSGpCLEM7OztBQXFEdkIsT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6IlVwbG9hZFpvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL1VwbG9hZFpvbmUubGVzcycpO1xudmFyIERyb3B6b25lID0gcmVxdWlyZSgncmVhY3QtZHJvcHpvbmUnKTtcbnZhciBhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQtcHJvbWlzZScpKHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxQcm9taXNlKTtcblxuY29uc3QgRGVmYXVsdFZpZXc9KHByb3BzKT0+PGRpdiBzdHlsZT17e2ZvbnRTaXplOlwiMTIwcHhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19Pis8L2Rpdj5cblxuY2xhc3MgVXBsb2FkWm9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgID17XG4gICAgICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMubm9kZSwgLy8gQ29udGVudHMgb2YgdGhlIGRyb3B6b25lXG4gICAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvblVwbG9hZGVkOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjpwcm9wcy5jaGlsZHJlblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgY29uc3Qge3VybCxvblVwbG9hZGVkLC4uLm90aGVyc309dGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcm9wem9uZSBvbkRyb3A9e3RoaXMub25Ecm9wLmJpbmQodGhpcyl9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGlsZHJlbnx8PERlZmF1bHRWaWV3Lz59XG4gICAgICAgICAgICA8L0Ryb3B6b25lPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uRHJvcChmaWxlcykge1xuICAgICAgICBsZXQgbWU9dGhpcztcbiAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGZpbGVzOiAnLCBmaWxlcyk7XG4gICAgICAgIHZhciBmaWxlPWZpbGVzWzBdO1xuICAgICAgICBpZighZmlsZSl7cmV0dXJuO31cbiAgICAgICAgY29uc3Qge3VybCxvblVwbG9hZGVkfT10aGlzLnByb3BzO1xuICAgICAgICBpZighb25VcGxvYWRlZHx8dHlwZW9mIG9uVXBsb2FkZWQgIT09ICdmdW5jdGlvbicpe3JldHVybjt9XG4gICAgICAgIGFnZW50LnBvc3QodXJsKVxuICAgICAgICAuYXR0YWNoKCdmaWxlcycsZmlsZSxmaWxlLm5hbWUpXG4gICAgICAgIC5vbigncHJvZ3Jlc3MnLCBtZS5vblByb2dyZXNzLmJpbmQobWUpKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdD1yZXMuYm9keTtcbiAgICAgICAgICAgIGZpbGUudXJsPXJlc3VsdC51cmw7XG4gICAgICAgICAgICBvblVwbG9hZGVkKFtmaWxlXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3MoZSl7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGlsZHJlbjpuZXh0UHJvcHMuY2hpbGRyZW59KVxuICAgIH1cblxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVcGxvYWRab25lO1xuIl19