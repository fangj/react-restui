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
var defaultView = function defaultView(props) {
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

        _this.state = {};
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
            var view = _props.view;
            var host = _props.host;
            var tokenUrl = _props.tokenUrl;
            var onUploaded = _props.onUploaded;

            var others = _objectWithoutProperties(_props, ['view', 'host', 'tokenUrl', 'onUploaded']);

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
        key: 'componentWillMount',
        value: function componentWillMount() {}
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

    return QiniuUploadZone;
}(React.Component);

QiniuUploadZone.propTypes = {
    view: React.PropTypes.element,
    tokenUrl: React.PropTypes.string.isRequired,
    host: React.PropTypes.string.isRequired,
    onUploaded: React.PropTypes.func.isRequired
};


module.exports = QiniuUploadZone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcWluaXVfdXBsb2FkX3pvbmUvUWluaXVVcGxvYWRab25lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBSSxXQUFXLFFBQVEsZ0JBQVIsQ0FBZjtBQUNBLElBQUksUUFBUSxRQUFRLG9CQUFSLEVBQThCLFFBQVEsWUFBUixDQUE5QixFQUFvRCxPQUFwRCxDQUFaO0FBQ0EsSUFBSSxPQUFLLFFBQVEsTUFBUixDQUFUOztBQUVBLFNBQVMsWUFBVCxDQUFzQixZQUF0QixFQUFtQztBQUMvQixRQUFJLFVBQVEsS0FBSyxPQUFMLENBQWEsWUFBYixDQUFaO0FBQ0EsUUFBSSxXQUFTLEtBQUssUUFBTCxDQUFjLFlBQWQsRUFBMkIsT0FBM0IsQ0FBYjtBQUNBLFdBQU8sV0FBVyxHQUFYLEdBQWlCLEtBQUssR0FBTCxFQUFqQixHQUE0QixPQUFuQztBQUNIO0FBQ0QsSUFBTSxjQUFZLFNBQVosV0FBWSxDQUFDLEtBQUQ7QUFBQSxXQUFTO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBQyxVQUFTLE9BQVYsRUFBa0IsV0FBVSxRQUE1QixFQUFaO0FBQUE7QUFBQSxLQUFUO0FBQUEsQ0FBbEI7O0lBRU0sZTs7O0FBU0YsNkJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHNJQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBSWxCOzs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxJQUFUO0FBREssZ0JBRUUsT0FGRixHQUVXLEtBQUssS0FGaEIsQ0FFRSxPQUZGOztBQUdMLGdCQUFHLENBQUMsT0FBSixFQUFZO0FBQ1IsdUJBQU8sSUFBUDtBQUNIO0FBTEkseUJBTTJDLEtBQUssS0FOaEQ7QUFBQSxnQkFNRSxJQU5GLFVBTUUsSUFORjtBQUFBLGdCQU1PLElBTlAsVUFNTyxJQU5QO0FBQUEsZ0JBTVksUUFOWixVQU1ZLFFBTlo7QUFBQSxnQkFNcUIsVUFOckIsVUFNcUIsVUFOckI7O0FBQUEsZ0JBTW1DLE1BTm5DOztBQU9MLGdCQUFNLE9BQUssUUFBTSxXQUFqQjtBQUNBLG1CQUNJO0FBQUMsd0JBQUQ7QUFBQSwyQkFBVSxRQUFRLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FBbEIsSUFBOEMsTUFBOUM7QUFDRSxvQ0FBQyxJQUFEO0FBREYsYUFESjtBQUtIOzs7K0JBRU0sSyxFQUFPO0FBQ1YsZ0JBQUksS0FBRyxJQUFQO0FBRFUsZ0JBRUgsT0FGRyxHQUVNLEtBQUssS0FGWCxDQUVILE9BRkc7O0FBR1YsZ0JBQUcsQ0FBQyxPQUFKLEVBQVk7QUFBQztBQUFRO0FBQ3JCLG9CQUFRLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxLQUFoQztBQUNBLGdCQUFJLE9BQUssTUFBTSxDQUFOLENBQVQ7QUFDQSxnQkFBRyxDQUFDLElBQUosRUFBUztBQUFDO0FBQVE7QUFOUiwwQkFPYyxLQUFLLEtBUG5CO0FBQUEsZ0JBT0gsSUFQRyxXQU9ILElBUEc7QUFBQSxnQkFPRSxVQVBGLFdBT0UsVUFQRjs7QUFRVixnQkFBRyxDQUFDLFVBQUQsSUFBYSxPQUFPLFVBQVAsS0FBc0IsVUFBdEMsRUFBaUQ7QUFBQztBQUFROztBQUUxRCxnQkFBSSxZQUFZLHlCQUFoQjtBQUNBLGdCQUFJLE9BQU8sUUFBUCxDQUFnQixRQUFoQixLQUE2QixRQUFqQyxFQUEyQztBQUN6Qyw0QkFBWSxxQkFBWjtBQUNEO0FBQ0QsZ0JBQUksTUFBSSxhQUFhLEtBQUssSUFBbEIsQ0FBUjtBQUNBLGtCQUFNLElBQU4sQ0FBVyxTQUFYLEVBQ0ssS0FETCxDQUNXLEtBRFgsRUFDa0IsR0FEbEIsRUFFSyxLQUZMLENBRVcsT0FGWCxFQUVvQixPQUZwQixFQUdLLEtBSEwsQ0FHVyxZQUhYLEVBR3lCLEtBQUssSUFIOUIsRUFJSyxLQUpMLENBSVcsUUFKWCxFQUlxQixLQUFLLElBSjFCLEVBS0ssTUFMTCxDQUtZLE1BTFosRUFLb0IsSUFMcEIsRUFLMEIsS0FBSyxJQUwvQixFQU1LLEdBTkwsQ0FNUyxRQU5ULEVBTW1CLGtCQU5uQjtBQU9JO0FBUEosYUFRSyxJQVJMLENBUVUsZUFBTztBQUNULG9CQUFJLFNBQU8sSUFBSSxJQUFmO0FBQ0EscUJBQUssR0FBTCxHQUFTLE9BQUssR0FBTCxHQUFTLE9BQU8sR0FBekI7QUFDQSwyQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILGFBWkw7QUFhSDs7O21DQUVVLEMsRUFBRSxDQUVaOzs7NkNBRW9CLENBQ3BCOzs7NENBRW1CO0FBQUE7O0FBQUEsZ0JBQ1QsUUFEUyxHQUNDLEtBQUssS0FETixDQUNULFFBRFM7O0FBRWhCLGtCQUFNLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLElBQXBCLENBQXlCLGVBQUs7QUFDMUIsb0JBQUksU0FBTyxJQUFJLElBQWY7QUFDQSx1QkFBSyxRQUFMLENBQWMsRUFBQyxTQUFRLE9BQU8sT0FBaEIsRUFBZDtBQUNILGFBSEQ7QUFJSDs7O2tEQUV5QixTLEVBQVcsQ0FDcEM7Ozs4Q0FFcUIsUyxFQUFXLFMsRUFBVztBQUN4QyxtQkFBTyxJQUFQO0FBQ0g7Ozs0Q0FFbUIsUyxFQUFXLFMsRUFBVyxDQUN6Qzs7OzJDQUVrQixTLEVBQVcsUyxFQUFXLENBQ3hDOzs7K0NBRXNCLENBQ3RCOzs7O0VBekZ5QixNQUFNLFM7O0FBQTlCLGUsQ0FFSyxTLEdBQVk7QUFDZixVQUFNLE1BQU0sU0FBTixDQUFnQixPQURQO0FBRWYsY0FBVSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFGbEI7QUFHZixVQUFNLE1BQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQUhkO0FBSWYsZ0JBQVcsTUFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCO0FBSmpCLEM7OztBQTBGdkIsT0FBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6IlFpbml1VXBsb2FkWm9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlcXVpcmUoJy4vUWluaXVVcGxvYWRab25lLmxlc3MnKTtcblxudmFyIERyb3B6b25lID0gcmVxdWlyZSgncmVhY3QtZHJvcHpvbmUnKTtcbnZhciBhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQtcHJvbWlzZScpKHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxQcm9taXNlKTtcbnZhciBwYXRoPXJlcXVpcmUoJ3BhdGgnKTtcblxuZnVuY3Rpb24gbWFrZUZpbGVOYW1lKG9yaWdpbmFsbmFtZSl7XG4gICAgdmFyIGV4dG5hbWU9cGF0aC5leHRuYW1lKG9yaWdpbmFsbmFtZSk7XG4gICAgdmFyIGJhc2VuYW1lPXBhdGguYmFzZW5hbWUob3JpZ2luYWxuYW1lLGV4dG5hbWUpO1xuICAgIHJldHVybiBiYXNlbmFtZSArICctJyArIERhdGUubm93KCkrZXh0bmFtZTtcbn1cbmNvbnN0IGRlZmF1bHRWaWV3PShwcm9wcyk9PjxkaXYgc3R5bGU9e3tmb250U2l6ZTpcIjEyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT4rPC9kaXY+XG5cbmNsYXNzIFFpbml1VXBsb2FkWm9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzICA9e1xuICAgICAgICB2aWV3OiBSZWFjdC5Qcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgdG9rZW5Vcmw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaG9zdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvblVwbG9hZGVkOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgY29uc3Qge3VwdG9rZW59PXRoaXMuc3RhdGU7XG4gICAgICAgIGlmKCF1cHRva2VuKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHt2aWV3LGhvc3QsdG9rZW5Vcmwsb25VcGxvYWRlZCwuLi5vdGhlcnN9PXRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IFZpZXc9dmlld3x8ZGVmYXVsdFZpZXc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJvcHpvbmUgb25Ecm9wPXt0aGlzLm9uRHJvcC5iaW5kKHRoaXMpfSB7Li4ub3RoZXJzfT5cbiAgICAgICAgICAgICAgPFZpZXcvPlxuICAgICAgICAgICAgPC9Ecm9wem9uZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkRyb3AoZmlsZXMpIHtcbiAgICAgICAgbGV0IG1lPXRoaXM7XG4gICAgICAgIGNvbnN0IHt1cHRva2VufT10aGlzLnN0YXRlO1xuICAgICAgICBpZighdXB0b2tlbil7cmV0dXJuO31cbiAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGZpbGVzOiAnLCBmaWxlcyk7XG4gICAgICAgIHZhciBmaWxlPWZpbGVzWzBdO1xuICAgICAgICBpZighZmlsZSl7cmV0dXJuO31cbiAgICAgICAgY29uc3Qge2hvc3Qsb25VcGxvYWRlZH09dGhpcy5wcm9wcztcbiAgICAgICAgaWYoIW9uVXBsb2FkZWR8fHR5cGVvZiBvblVwbG9hZGVkICE9PSAnZnVuY3Rpb24nKXtyZXR1cm47fVxuXG4gICAgICAgIHZhciB1cGxvYWRVcmwgPSAnaHR0cDovL3VwbG9hZC5xaW5pdS5jb20nXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgICAgICAgdXBsb2FkVXJsID0gJ2h0dHBzOi8vdXAucWJveC5tZS8nXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleT1tYWtlRmlsZU5hbWUoZmlsZS5uYW1lKTtcbiAgICAgICAgYWdlbnQucG9zdCh1cGxvYWRVcmwpXG4gICAgICAgICAgICAuZmllbGQoJ2tleScsIGtleSlcbiAgICAgICAgICAgIC5maWVsZCgndG9rZW4nLCB1cHRva2VuKVxuICAgICAgICAgICAgLmZpZWxkKCd4OmZpbGVuYW1lJywgZmlsZS5uYW1lKVxuICAgICAgICAgICAgLmZpZWxkKCd4OnNpemUnLCBmaWxlLnNpemUpXG4gICAgICAgICAgICAuYXR0YWNoKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKVxuICAgICAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgICAgICAgLy8gLm9uKCdwcm9ncmVzcycsIG1lLm9uUHJvZ3Jlc3MuYmluZChtZSkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ9cmVzLmJvZHk7XG4gICAgICAgICAgICAgICAgZmlsZS51cmw9aG9zdCtcIi9cIityZXN1bHQua2V5O1xuICAgICAgICAgICAgICAgIG9uVXBsb2FkZWQoW2ZpbGVdKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3MoZSl7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHt0b2tlblVybH09dGhpcy5wcm9wcztcbiAgICAgICAgYWdlbnQuZ2V0KHRva2VuVXJsKS50aGVuKHJlcz0+e1xuICAgICAgICAgICAgdmFyIHJlc3VsdD1yZXMuYm9keTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VwdG9rZW46cmVzdWx0LnVwdG9rZW59KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFFpbml1VXBsb2FkWm9uZTtcbiJdfQ==