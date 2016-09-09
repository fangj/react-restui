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

	var QiniuUploadZone = __webpack_require__(3);

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
	                _react2.default.createElement(
	                    QiniuUploadZone,
	                    { tokenUrl: '/qntoken', host: 'http://7sbkh6.com1.z0.glb.clouddn.com', onUploaded: this.onUploaded.bind(this), accept: 'image/*' },
	                    !url ? null : _react2.default.createElement('img', { src: url, style: { maxWidth: "200px", maxHeight: "200px" } })
	                )
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

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4);

/***/ },

/***/ 4:
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

	// require('./QiniuUploadZone.less');

	var Dropzone = __webpack_require__(5);
	var agent = __webpack_require__(6)(__webpack_require__(7), Promise);
	var path = __webpack_require__(12);

	function makeFileName(originalname) {
	    var extname = path.extname(originalname);
	    var basename = path.basename(originalname, extname);
	    return basename + '-' + Date.now() + extname;
	}
	var DefaultView = function DefaultView(props) {
	    return React.createElement('div', { style: { fontSize: "120px", textAlign: "center" } }, '+');
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

	            return React.createElement(Dropzone, _extends({ onDrop: this.onDrop.bind(this) }, others), this.state.children || React.createElement(DefaultView, null));
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

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }

});