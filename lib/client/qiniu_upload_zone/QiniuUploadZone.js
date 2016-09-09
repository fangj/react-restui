'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('./QiniuUploadZone.less');

var Dropzone = require('react-dropzone');
var agent = require('superagent-promise')(require('superagent'), Promise);
var path = require('path');

function makeFileName(originalname) {
    var extname = path.extname(originalname);
    var basename = path.basename(originalname, extname);
    return basename + '-' + Date.now() + extname;
}
var DefaultView = function DefaultView(props) {
    return React.createElement(
        'div',
        { style: { fontSize: "120px", textAlign: "center" } },
        '+'
    );
};

var QiniuUploadZone = function (_React$Component) {
    _inherits(QiniuUploadZone, _React$Component);

    function QiniuUploadZone(props) {
        _classCallCheck(this, QiniuUploadZone);

        var _this = _possibleConstructorReturn(this, (QiniuUploadZone.__proto__ || Object.getPrototypeOf(QiniuUploadZone)).call(this, props));

        _this.state = {
            children: props.children
        };
        return _this;
    }

    _createClass(QiniuUploadZone, [{
        key: 'render',
        value: function render() {
            var me = this;
            var uptoken = this.state.uptoken;

            if (!uptoken) {
                return null;
            }
            var _props = this.props;
            var host = _props.host;
            var tokenUrl = _props.tokenUrl;
            var onUploaded = _props.onUploaded;

            var others = _objectWithoutProperties(_props, ['host', 'tokenUrl', 'onUploaded']);

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
            var uptoken = this.state.uptoken;

            if (!uptoken) {
                return;
            }
            console.log('Received files: ', files);
            var file = files[0];
            if (!file) {
                return;
            }
            var _props2 = this.props;
            var host = _props2.host;
            var onUploaded = _props2.onUploaded;

            if (!onUploaded || typeof onUploaded !== 'function') {
                return;
            }

            var uploadUrl = 'http://upload.qiniu.com';
            if (window.location.protocol === 'https:') {
                uploadUrl = 'https://up.qbox.me/';
            }
            var key = makeFileName(file.name);
            agent.post(uploadUrl).field('key', key).field('token', uptoken).field('x:filename', file.name).field('x:size', file.size).attach('file', file, file.name).set('Accept', 'application/json')
            // .on('progress', me.onProgress.bind(me))
            .then(function (res) {
                var result = res.body;
                file.url = host + "/" + result.key;
                onUploaded([file]);
            });
        }
    }, {
        key: 'onProgress',
        value: function onProgress(e) {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var tokenUrl = this.props.tokenUrl;

            agent.get(tokenUrl).then(function (res) {
                var result = res.body;
                _this2.setState({ uptoken: result.uptoken });
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ children: nextProps.children });
        }
    }]);

    return QiniuUploadZone;
}(React.Component);

QiniuUploadZone.propTypes = {
    children: React.PropTypes.node, // Contents of the dropzone
    tokenUrl: React.PropTypes.string.isRequired,
    host: React.PropTypes.string.isRequired,
    onUploaded: React.PropTypes.func.isRequired
};


module.exports = QiniuUploadZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcWluaXVfdXBsb2FkX3pvbmUvUWluaXVVcGxvYWRab25lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBSSxXQUFXLFFBQVEsZ0JBQVIsQ0FBZjtBQUNBLElBQUksUUFBUSxRQUFRLG9CQUFSLEVBQThCLFFBQVEsWUFBUixDQUE5QixFQUFvRCxPQUFwRCxDQUFaO0FBQ0EsSUFBSSxPQUFLLFFBQVEsTUFBUixDQUFUOztBQUVBLFNBQVMsWUFBVCxDQUFzQixZQUF0QixFQUFtQztBQUMvQixRQUFJLFVBQVEsS0FBSyxPQUFMLENBQWEsWUFBYixDQUFaO0FBQ0EsUUFBSSxXQUFTLEtBQUssUUFBTCxDQUFjLFlBQWQsRUFBMkIsT0FBM0IsQ0FBYjtBQUNBLFdBQU8sV0FBVyxHQUFYLEdBQWlCLEtBQUssR0FBTCxFQUFqQixHQUE0QixPQUFuQztBQUNIO0FBQ0QsSUFBTSxjQUFZLFNBQVosV0FBWSxDQUFDLEtBQUQ7QUFBQSxXQUFTO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBQyxVQUFTLE9BQVYsRUFBa0IsV0FBVSxRQUE1QixFQUFaO0FBQUE7QUFBQSxLQUFUO0FBQUEsQ0FBbEI7O0lBRU0sZTs7O0FBU0YsNkJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHNJQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCxzQkFBUyxNQUFNO0FBRE4sU0FBYjtBQUZlO0FBS2xCOzs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxJQUFUO0FBREssZ0JBRUUsT0FGRixHQUVXLEtBQUssS0FGaEIsQ0FFRSxPQUZGOztBQUdMLGdCQUFHLENBQUMsT0FBSixFQUFZO0FBQ1IsdUJBQU8sSUFBUDtBQUNIO0FBTEkseUJBTXNDLEtBQUssS0FOM0M7QUFBQSxnQkFNRSxJQU5GLFVBTUUsSUFORjtBQUFBLGdCQU1PLFFBTlAsVUFNTyxRQU5QO0FBQUEsZ0JBTWdCLFVBTmhCLFVBTWdCLFVBTmhCOztBQUFBLGdCQU04QixNQU45Qjs7QUFPTCxtQkFDSTtBQUFDLHdCQUFEO0FBQUEsMkJBQVUsUUFBUSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWxCLElBQThDLE1BQTlDO0FBQ0cscUJBQUssS0FBTCxDQUFXLFFBQVgsSUFBcUIsb0JBQUMsV0FBRDtBQUR4QixhQURKO0FBS0g7OzsrQkFFTSxLLEVBQU87QUFDVixnQkFBSSxLQUFHLElBQVA7QUFEVSxnQkFFSCxPQUZHLEdBRU0sS0FBSyxLQUZYLENBRUgsT0FGRzs7QUFHVixnQkFBRyxDQUFDLE9BQUosRUFBWTtBQUFDO0FBQVE7QUFDckIsb0JBQVEsR0FBUixDQUFZLGtCQUFaLEVBQWdDLEtBQWhDO0FBQ0EsZ0JBQUksT0FBSyxNQUFNLENBQU4sQ0FBVDtBQUNBLGdCQUFHLENBQUMsSUFBSixFQUFTO0FBQUM7QUFBUTtBQU5SLDBCQU9jLEtBQUssS0FQbkI7QUFBQSxnQkFPSCxJQVBHLFdBT0gsSUFQRztBQUFBLGdCQU9FLFVBUEYsV0FPRSxVQVBGOztBQVFWLGdCQUFHLENBQUMsVUFBRCxJQUFhLE9BQU8sVUFBUCxLQUFzQixVQUF0QyxFQUFpRDtBQUFDO0FBQVE7O0FBRTFELGdCQUFJLFlBQVkseUJBQWhCO0FBQ0EsZ0JBQUksT0FBTyxRQUFQLENBQWdCLFFBQWhCLEtBQTZCLFFBQWpDLEVBQTJDO0FBQ3pDLDRCQUFZLHFCQUFaO0FBQ0Q7QUFDRCxnQkFBSSxNQUFJLGFBQWEsS0FBSyxJQUFsQixDQUFSO0FBQ0Esa0JBQU0sSUFBTixDQUFXLFNBQVgsRUFDSyxLQURMLENBQ1csS0FEWCxFQUNrQixHQURsQixFQUVLLEtBRkwsQ0FFVyxPQUZYLEVBRW9CLE9BRnBCLEVBR0ssS0FITCxDQUdXLFlBSFgsRUFHeUIsS0FBSyxJQUg5QixFQUlLLEtBSkwsQ0FJVyxRQUpYLEVBSXFCLEtBQUssSUFKMUIsRUFLSyxNQUxMLENBS1ksTUFMWixFQUtvQixJQUxwQixFQUswQixLQUFLLElBTC9CLEVBTUssR0FOTCxDQU1TLFFBTlQsRUFNbUIsa0JBTm5CO0FBT0k7QUFQSixhQVFLLElBUkwsQ0FRVSxlQUFPO0FBQ1Qsb0JBQUksU0FBTyxJQUFJLElBQWY7QUFDQSxxQkFBSyxHQUFMLEdBQVMsT0FBSyxHQUFMLEdBQVMsT0FBTyxHQUF6QjtBQUNBLDJCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsYUFaTDtBQWFIOzs7bUNBRVUsQyxFQUFFLENBRVo7Ozs0Q0FFbUI7QUFBQTs7QUFBQSxnQkFDVCxRQURTLEdBQ0MsS0FBSyxLQUROLENBQ1QsUUFEUzs7QUFFaEIsa0JBQU0sR0FBTixDQUFVLFFBQVYsRUFBb0IsSUFBcEIsQ0FBeUIsZUFBSztBQUMxQixvQkFBSSxTQUFPLElBQUksSUFBZjtBQUNBLHVCQUFLLFFBQUwsQ0FBYyxFQUFDLFNBQVEsT0FBTyxPQUFoQixFQUFkO0FBQ0gsYUFIRDtBQUlIOzs7a0RBRXlCLFMsRUFBVztBQUNqQyxpQkFBSyxRQUFMLENBQWMsRUFBQyxVQUFTLFVBQVUsUUFBcEIsRUFBZDtBQUNIOzs7O0VBMUV5QixNQUFNLFM7O0FBQTlCLGUsQ0FFSyxTLEdBQVk7QUFDZixjQUFVLE1BQU0sU0FBTixDQUFnQixJQURYLEVBQ2lCO0FBQ2hDLGNBQVUsTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRmxCO0FBR2YsVUFBTSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFIZDtBQUlmLGdCQUFXLE1BQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQjtBQUpqQixDOzs7QUE0RXZCLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJRaW5pdVVwbG9hZFpvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXF1aXJlKCcuL1Fpbml1VXBsb2FkWm9uZS5sZXNzJyk7XG5cbnZhciBEcm9wem9uZSA9IHJlcXVpcmUoJ3JlYWN0LWRyb3B6b25lJyk7XG52YXIgYWdlbnQgPSByZXF1aXJlKCdzdXBlcmFnZW50LXByb21pc2UnKShyZXF1aXJlKCdzdXBlcmFnZW50JyksUHJvbWlzZSk7XG52YXIgcGF0aD1yZXF1aXJlKCdwYXRoJyk7XG5cbmZ1bmN0aW9uIG1ha2VGaWxlTmFtZShvcmlnaW5hbG5hbWUpe1xuICAgIHZhciBleHRuYW1lPXBhdGguZXh0bmFtZShvcmlnaW5hbG5hbWUpO1xuICAgIHZhciBiYXNlbmFtZT1wYXRoLmJhc2VuYW1lKG9yaWdpbmFsbmFtZSxleHRuYW1lKTtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyAnLScgKyBEYXRlLm5vdygpK2V4dG5hbWU7XG59XG5jb25zdCBEZWZhdWx0Vmlldz0ocHJvcHMpPT48ZGl2IHN0eWxlPXt7Zm9udFNpemU6XCIxMjBweFwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+KzwvZGl2PlxuXG5jbGFzcyBRaW5pdVVwbG9hZFpvbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyAgPXtcbiAgICAgICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5ub2RlLCAvLyBDb250ZW50cyBvZiB0aGUgZHJvcHpvbmVcbiAgICAgICAgdG9rZW5Vcmw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaG9zdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvblVwbG9hZGVkOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46cHJvcHMuY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHt1cHRva2VufT10aGlzLnN0YXRlO1xuICAgICAgICBpZighdXB0b2tlbil7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7aG9zdCx0b2tlblVybCxvblVwbG9hZGVkLC4uLm90aGVyc309dGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcm9wem9uZSBvbkRyb3A9e3RoaXMub25Ecm9wLmJpbmQodGhpcyl9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGlsZHJlbnx8PERlZmF1bHRWaWV3Lz59XG4gICAgICAgICAgICA8L0Ryb3B6b25lPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uRHJvcChmaWxlcykge1xuICAgICAgICBsZXQgbWU9dGhpcztcbiAgICAgICAgY29uc3Qge3VwdG9rZW59PXRoaXMuc3RhdGU7XG4gICAgICAgIGlmKCF1cHRva2VuKXtyZXR1cm47fVxuICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgZmlsZXM6ICcsIGZpbGVzKTtcbiAgICAgICAgdmFyIGZpbGU9ZmlsZXNbMF07XG4gICAgICAgIGlmKCFmaWxlKXtyZXR1cm47fVxuICAgICAgICBjb25zdCB7aG9zdCxvblVwbG9hZGVkfT10aGlzLnByb3BzO1xuICAgICAgICBpZighb25VcGxvYWRlZHx8dHlwZW9mIG9uVXBsb2FkZWQgIT09ICdmdW5jdGlvbicpe3JldHVybjt9XG5cbiAgICAgICAgdmFyIHVwbG9hZFVybCA9ICdodHRwOi8vdXBsb2FkLnFpbml1LmNvbSdcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcbiAgICAgICAgICB1cGxvYWRVcmwgPSAnaHR0cHM6Ly91cC5xYm94Lm1lLydcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5PW1ha2VGaWxlTmFtZShmaWxlLm5hbWUpO1xuICAgICAgICBhZ2VudC5wb3N0KHVwbG9hZFVybClcbiAgICAgICAgICAgIC5maWVsZCgna2V5Jywga2V5KVxuICAgICAgICAgICAgLmZpZWxkKCd0b2tlbicsIHVwdG9rZW4pXG4gICAgICAgICAgICAuZmllbGQoJ3g6ZmlsZW5hbWUnLCBmaWxlLm5hbWUpXG4gICAgICAgICAgICAuZmllbGQoJ3g6c2l6ZScsIGZpbGUuc2l6ZSlcbiAgICAgICAgICAgIC5hdHRhY2goJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpXG4gICAgICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAgICAgICAvLyAub24oJ3Byb2dyZXNzJywgbWUub25Qcm9ncmVzcy5iaW5kKG1lKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdD1yZXMuYm9keTtcbiAgICAgICAgICAgICAgICBmaWxlLnVybD1ob3N0K1wiL1wiK3Jlc3VsdC5rZXk7XG4gICAgICAgICAgICAgICAgb25VcGxvYWRlZChbZmlsZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Qcm9ncmVzcyhlKXtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7dG9rZW5Vcmx9PXRoaXMucHJvcHM7XG4gICAgICAgIGFnZW50LmdldCh0b2tlblVybCkudGhlbihyZXM9PntcbiAgICAgICAgICAgIHZhciByZXN1bHQ9cmVzLmJvZHk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1cHRva2VuOnJlc3VsdC51cHRva2VufSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hpbGRyZW46bmV4dFByb3BzLmNoaWxkcmVufSlcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRaW5pdVVwbG9hZFpvbmU7XG4iXX0=