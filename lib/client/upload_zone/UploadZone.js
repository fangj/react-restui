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

var defaultView = function defaultView(props) {
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

        _this.state = {};
        return _this;
    }

    _createClass(UploadZone, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _props = this.props;
            var view = _props.view;
            var url = _props.url;
            var onUploaded = _props.onUploaded;

            var others = _objectWithoutProperties(_props, ['view', 'url', 'onUploaded']);

            var View = view || defaultView;
            return React.createElement(
                Dropzone,
                _extends({ onDrop: this.onDrop.bind(this) }, others),
                React.createElement(View, null)
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
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {}
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }]);

    return UploadZone;
}(React.Component);

UploadZone.propTypes = {
    view: React.PropTypes.element,
    url: React.PropTypes.string.isRequired,
    onUploaded: React.PropTypes.func.isRequired
};


module.exports = UploadZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvdXBsb2FkX3pvbmUvVXBsb2FkWm9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVEsbUJBQVI7QUFDQSxJQUFJLFdBQVcsUUFBUSxnQkFBUixDQUFmO0FBQ0EsSUFBSSxRQUFRLFFBQVEsb0JBQVIsRUFBOEIsUUFBUSxZQUFSLENBQTlCLEVBQW9ELE9BQXBELENBQVo7O0FBRUEsSUFBTSxjQUFZLFNBQVosV0FBWSxDQUFDLEtBQUQ7QUFBQSxXQUFTO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBQyxVQUFTLE9BQVYsRUFBa0IsV0FBVSxRQUE1QixFQUFaO0FBQUE7QUFBQSxLQUFUO0FBQUEsQ0FBbEI7O0lBRU0sVTs7O0FBVUYsd0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBSWxCOzs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxJQUFUO0FBREsseUJBRWlDLEtBQUssS0FGdEM7QUFBQSxnQkFFRSxJQUZGLFVBRUUsSUFGRjtBQUFBLGdCQUVPLEdBRlAsVUFFTyxHQUZQO0FBQUEsZ0JBRVcsVUFGWCxVQUVXLFVBRlg7O0FBQUEsZ0JBRXlCLE1BRnpCOztBQUdMLGdCQUFNLE9BQUssUUFBTSxXQUFqQjtBQUNBLG1CQUNJO0FBQUMsd0JBQUQ7QUFBQSwyQkFBVSxRQUFRLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FBbEIsSUFBOEMsTUFBOUM7QUFDRSxvQ0FBQyxJQUFEO0FBREYsYUFESjtBQUtIOzs7K0JBRU0sSyxFQUFPO0FBQ1YsZ0JBQUksS0FBRyxJQUFQO0FBQ0Esb0JBQVEsR0FBUixDQUFZLGtCQUFaLEVBQWdDLEtBQWhDO0FBQ0EsZ0JBQUksT0FBSyxNQUFNLENBQU4sQ0FBVDtBQUNBLGdCQUFHLENBQUMsSUFBSixFQUFTO0FBQUM7QUFBUTtBQUpSLDBCQUthLEtBQUssS0FMbEI7QUFBQSxnQkFLSCxHQUxHLFdBS0gsR0FMRztBQUFBLGdCQUtDLFVBTEQsV0FLQyxVQUxEOztBQU1WLGdCQUFHLENBQUMsVUFBRCxJQUFhLE9BQU8sVUFBUCxLQUFzQixVQUF0QyxFQUFpRDtBQUFDO0FBQVE7QUFDMUQsa0JBQU0sSUFBTixDQUFXLEdBQVgsRUFDQyxNQURELENBQ1EsT0FEUixFQUNnQixJQURoQixFQUNxQixLQUFLLElBRDFCLEVBRUMsRUFGRCxDQUVJLFVBRkosRUFFZ0IsR0FBRyxVQUFILENBQWMsSUFBZCxDQUFtQixFQUFuQixDQUZoQixFQUdDLElBSEQsQ0FHTSxlQUFPO0FBQ1Qsb0JBQUksU0FBTyxJQUFJLElBQWY7QUFDQSxxQkFBSyxHQUFMLEdBQVMsT0FBTyxHQUFoQjtBQUNBLDJCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsYUFQRDtBQVFIOzs7bUNBRVUsQyxFQUFFLENBRVo7Ozs2Q0FFb0IsQ0FDcEI7Ozs0Q0FFbUIsQ0FDbkI7OztrREFFeUIsUyxFQUFXLENBQ3BDOzs7OENBRXFCLFMsRUFBVyxTLEVBQVc7QUFDeEMsbUJBQU8sSUFBUDtBQUNIOzs7NENBRW1CLFMsRUFBVyxTLEVBQVcsQ0FDekM7OzsyQ0FFa0IsUyxFQUFXLFMsRUFBVyxDQUN4Qzs7OytDQUVzQixDQUN0Qjs7OztFQXBFb0IsTUFBTSxTOztBQUF6QixVLENBR0ssUyxHQUFZO0FBQ2YsVUFBTSxNQUFNLFNBQU4sQ0FBZ0IsT0FEUDtBQUVmLFNBQUssTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRmI7QUFHZixnQkFBVyxNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUI7QUFIakIsQzs7O0FBb0V2QixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoiVXBsb2FkWm9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vVXBsb2FkWm9uZS5sZXNzJyk7XG52YXIgRHJvcHpvbmUgPSByZXF1aXJlKCdyZWFjdC1kcm9wem9uZScpO1xudmFyIGFnZW50ID0gcmVxdWlyZSgnc3VwZXJhZ2VudC1wcm9taXNlJykocmVxdWlyZSgnc3VwZXJhZ2VudCcpLFByb21pc2UpO1xuXG5jb25zdCBkZWZhdWx0Vmlldz0ocHJvcHMpPT48ZGl2IHN0eWxlPXt7Zm9udFNpemU6XCIxMjBweFwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+KzwvZGl2PlxuXG5jbGFzcyBVcGxvYWRab25lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG4gICAgc3RhdGljIHByb3BUeXBlcyAgPXtcbiAgICAgICAgdmlldzogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvblVwbG9hZGVkOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBjb25zdCB7dmlldyx1cmwsb25VcGxvYWRlZCwuLi5vdGhlcnN9PXRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IFZpZXc9dmlld3x8ZGVmYXVsdFZpZXc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJvcHpvbmUgb25Ecm9wPXt0aGlzLm9uRHJvcC5iaW5kKHRoaXMpfSB7Li4ub3RoZXJzfT5cbiAgICAgICAgICAgICAgPFZpZXcvPlxuICAgICAgICAgICAgPC9Ecm9wem9uZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkRyb3AoZmlsZXMpIHtcbiAgICAgICAgbGV0IG1lPXRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBmaWxlczogJywgZmlsZXMpO1xuICAgICAgICB2YXIgZmlsZT1maWxlc1swXTtcbiAgICAgICAgaWYoIWZpbGUpe3JldHVybjt9XG4gICAgICAgIGNvbnN0IHt1cmwsb25VcGxvYWRlZH09dGhpcy5wcm9wcztcbiAgICAgICAgaWYoIW9uVXBsb2FkZWR8fHR5cGVvZiBvblVwbG9hZGVkICE9PSAnZnVuY3Rpb24nKXtyZXR1cm47fVxuICAgICAgICBhZ2VudC5wb3N0KHVybClcbiAgICAgICAgLmF0dGFjaCgnZmlsZXMnLGZpbGUsZmlsZS5uYW1lKVxuICAgICAgICAub24oJ3Byb2dyZXNzJywgbWUub25Qcm9ncmVzcy5iaW5kKG1lKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQ9cmVzLmJvZHk7XG4gICAgICAgICAgICBmaWxlLnVybD1yZXN1bHQudXJsO1xuICAgICAgICAgICAgb25VcGxvYWRlZChbZmlsZV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblByb2dyZXNzKGUpe1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXBsb2FkWm9uZTtcbiJdfQ==