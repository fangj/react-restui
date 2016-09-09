webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UploadZone = __webpack_require__(49);

	var ImageUploader = function (_React$Component) {
	    _inherits(ImageUploader, _React$Component);

	    function ImageUploader(props) {
	        _classCallCheck(this, ImageUploader);

	        var _this = _possibleConstructorReturn(this, (ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ImageUploader, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var url = this.state.url;

	            return _react2.default.createElement(
	                'div',
	                { className: 'image_uploader' },
	                _react2.default.createElement(UploadZone, { url: '/upload', onUploaded: this.onUploaded.bind(this), accept: 'image/*' }),
	                !url ? null : _react2.default.createElement('img', { src: url })
	            );
	        }
	    }, {
	        key: 'onUploaded',
	        value: function onUploaded(files) {
	            console.log(files[0]);
	            this.setState({ url: files[0].url });
	        }
	    }]);

	    return ImageUploader;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(ImageUploader, null), document.getElementById('root'));

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(50);

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	__webpack_require__(51);
	var Dropzone = __webpack_require__(55);
	var agent = __webpack_require__(56)(__webpack_require__(57), Promise);

	var defaultView = function defaultView(props) {
	    return React.createElement('div', { style: { fontSize: "120px", textAlign: "center" } }, '+');
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
	            return React.createElement(Dropzone, _extends({ onDrop: this.onDrop.bind(this) }, others), React.createElement(View, null));
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

/***/ },

/***/ 51:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});