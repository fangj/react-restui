'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./RestWriter.less');


var util = require('../util');

var agent = require('superagent-promise')(require('superagent'), Promise);

var RestWriter = function (_React$Component) {
    _inherits(RestWriter, _React$Component);

    function RestWriter(props) {
        _classCallCheck(this, RestWriter);

        var _this = _possibleConstructorReturn(this, (RestWriter.__proto__ || Object.getPrototypeOf(RestWriter)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RestWriter, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _props = this.props;
            var view = _props.view;
            var url = _props.url;
            var id = _props.id;

            var others = _objectWithoutProperties(_props, ['view', 'url', 'id']);

            var View = view;
            if (id) {
                //更新或删除
                var data = this.state.data;

                console.log('render', data);
                if (data === undefined) {
                    return null; //等待异步取得数据
                } else {
                    return React.createElement(View, _extends({ data: data, update: this.update.bind(this), remove: this.remove.bind(this) }, others));
                }
            } else {
                //新建
                return React.createElement(View, _extends({ save: this.save.bind(this) }, others));
            }
        }
    }, {
        key: 'update',
        value: function update(data) {
            var _this2 = this;

            return this._update(data).then(function (node) {
                var publish = _this2.props.publish;

                if (publish) {
                    if (publish.update) {
                        PubSub.publish(publish.update, node);
                    } else if (typeof publish == 'string') {
                        PubSub.publish(publish, node);
                    }
                }
                return node;
            });
        }
    }, {
        key: '_update',
        value: function _update(data) {
            var _props2 = this.props;
            var url = _props2.url;
            var id = _props2.id;

            return agent.put(url + '/' + id, data).then(function (resp) {
                return resp.body;
            });
        }
    }, {
        key: 'remove',
        value: function remove() {
            var _this3 = this;

            return this._remove().then(function (node) {
                var publish = _this3.props.publish;

                if (publish) {
                    if (publish.remove) {
                        PubSub.publish(publish.remove, node);
                    } else if (typeof publish == 'string') {
                        PubSub.publish(publish, node);
                    }
                }
            });
        }
    }, {
        key: '_remove',
        value: function _remove() {
            var _props3 = this.props;
            var url = _props3.url;
            var id = _props3.id;

            return agent.del(url + '/' + id).then(function (resp) {
                return resp.body;
            });
        }
    }, {
        key: 'save',
        value: function save(data) {
            var _this4 = this;

            return this._save(data).then(function (node) {
                var publish = _this4.props.publish;
                // debugger;

                if (publish) {
                    if (publish.save) {
                        PubSub.publish(publish.save, node);
                    } else if (typeof publish == 'string') {
                        PubSub.publish(publish, node);
                    }
                }
                return node;
            });
        }
    }, {
        key: '_save',
        value: function _save(data) {
            var url = this.props.url;

            return agent.post(url, data).then(function (resp) {
                return resp.body;
            });
        }
    }, {
        key: 'fetchData',
        value: function fetchData(props) {
            var _this5 = this;

            if (this.cancelablePromise) {
                this.cancelablePromise.cancel();
            }
            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
            this.cancelablePromise.promise.then(function (data) {
                _this5.setState({ data: data });
            }).catch(function (reason) {
                //console.log('isCanceled', reason.isCanceled)
                if (!reason.isCanceled) {
                    Promise.reject(reason);
                }
            });
        }
    }, {
        key: '_fetchData',
        value: function _fetchData(props) {
            var url = props.url;
            var id = props.id;

            if (!id) {
                return Promise.resolve();
            }
            return agent.get(url + '/' + id).then(function (resp) {
                return resp.body;
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount');
            this.fetchData(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log('componentWillReceiveProps');
            this.fetchData(nextProps);
        }
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

    return RestWriter;
}(React.Component);

RestWriter.propTypes = {
    view: _react.PropTypes.func.isRequired,
    url: _react.PropTypes.string,
    id: _react.PropTypes.string,
    publish: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])
};


module.exports = RestWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF93cml0ZXIvUmVzdFdyaXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7Ozs7Ozs7K2VBREE7OztBQUVBLElBQUksT0FBSyxRQUFRLFNBQVIsQ0FBVDs7QUFFQSxJQUFJLFFBQVEsUUFBUSxvQkFBUixFQUE4QixRQUFRLFlBQVIsQ0FBOUIsRUFBb0QsT0FBcEQsQ0FBWjs7SUFFTSxVOzs7QUFZRix3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1QsS0FEUzs7QUFFZixjQUFLLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFJbEI7Ozs7aUNBRVE7QUFDTCxnQkFBSSxLQUFLLElBQVQ7QUFESyx5QkFFeUIsS0FBSyxLQUY5QjtBQUFBLGdCQUVFLElBRkYsVUFFRSxJQUZGO0FBQUEsZ0JBRU8sR0FGUCxVQUVPLEdBRlA7QUFBQSxnQkFFVyxFQUZYLFVBRVcsRUFGWDs7QUFBQSxnQkFFaUIsTUFGakI7O0FBR0wsZ0JBQU0sT0FBSyxJQUFYO0FBQ0EsZ0JBQUcsRUFBSCxFQUFNO0FBQUM7QUFBRCxvQkFDSyxJQURMLEdBQ1csS0FBSyxLQURoQixDQUNLLElBREw7O0FBRUYsd0JBQVEsR0FBUixDQUFZLFFBQVosRUFBcUIsSUFBckI7QUFDQSxvQkFBRyxTQUFPLFNBQVYsRUFBb0I7QUFDaEIsMkJBQU8sSUFBUCxDQURnQixDQUNKO0FBQ2YsaUJBRkQsTUFFSztBQUNELDJCQUFPLG9CQUFDLElBQUQsYUFBTSxNQUFNLElBQVosRUFBa0IsUUFBUSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQTFCLEVBQWtELFFBQVEsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUExRCxJQUFzRixNQUF0RixFQUFQO0FBQ0g7QUFDSixhQVJELE1BUUs7QUFBQztBQUNGLHVCQUFPLG9CQUFDLElBQUQsYUFBTSxNQUFNLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENB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QUFnQixNQUZZLENBQTFCO0FBSk8sQzs7O0FBNkl2QixPQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoiUmVzdFdyaXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlcXVpcmUoJy4vUmVzdFdyaXRlci5sZXNzJyk7XHJcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gXCJyZWFjdFwiO1xyXG52YXIgdXRpbD1yZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG52YXIgYWdlbnQgPSByZXF1aXJlKCdzdXBlcmFnZW50LXByb21pc2UnKShyZXF1aXJlKCdzdXBlcmFnZW50JyksUHJvbWlzZSk7XHJcblxyXG5jbGFzcyBSZXN0V3JpdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHZpZXc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHB1Ymxpc2g6UmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHt2aWV3LHVybCxpZCwuLi5vdGhlcnN9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgVmlldz12aWV3O1xyXG4gICAgICAgIGlmKGlkKXsvL+abtOaWsOaIluWIoOmZpFxyXG4gICAgICAgICAgICBjb25zdCB7ZGF0YX09dGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlcicsZGF0YSlcclxuICAgICAgICAgICAgaWYoZGF0YT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsvL+etieW+heW8guatpeWPluW+l+aVsOaNrlxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8VmlldyBkYXRhPXtkYXRhfSB1cGRhdGU9e3RoaXMudXBkYXRlLmJpbmQodGhpcyl9IHJlbW92ZT17dGhpcy5yZW1vdmUuYmluZCh0aGlzKX0gey4uLm90aGVyc30vPiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXsvL+aWsOW7ulxyXG4gICAgICAgICAgICByZXR1cm4gPFZpZXcgc2F2ZT17dGhpcy5zYXZlLmJpbmQodGhpcyl9IHsuLi5vdGhlcnN9Lz4gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZShkYXRhKS50aGVuKG5vZGU9PntcclxuICAgICAgICAgICAgY29uc3Qge3B1Ymxpc2h9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGlmKHB1Ymxpc2gpe1xyXG4gICAgICAgICAgICAgICAgaWYocHVibGlzaC51cGRhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKHB1Ymxpc2gudXBkYXRlLG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIHB1Ymxpc2g9PSdzdHJpbmcnKXtcclxuICAgICAgICAgICAgICAgICAgICBQdWJTdWIucHVibGlzaChwdWJsaXNoLG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZShkYXRhKXtcclxuICAgICAgICBjb25zdCB7dXJsLGlkfT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBhZ2VudC5wdXQodXJsKycvJytpZCxkYXRhKS50aGVuKHJlc3A9PnJlc3AuYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZSgpLnRoZW4obm9kZT0+e1xyXG4gICAgICAgICAgICBjb25zdCB7cHVibGlzaH09dGhpcy5wcm9wcztcclxuICAgICAgICAgICAgaWYocHVibGlzaCl7XHJcbiAgICAgICAgICAgICAgICBpZihwdWJsaXNoLnJlbW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2gocHVibGlzaC5yZW1vdmUsbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0eXBlb2YgcHVibGlzaD09J3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKHB1Ymxpc2gsbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9yZW1vdmUoKXtcclxuICAgICAgICBjb25zdCB7dXJsLGlkfT10aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBhZ2VudC5kZWwodXJsKycvJytpZCkudGhlbihyZXNwPT5yZXNwLmJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmUoZGF0YSkudGhlbihub2RlPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHtwdWJsaXNofT10aGlzLnByb3BzO1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgaWYocHVibGlzaCl7XHJcbiAgICAgICAgICAgICAgICBpZihwdWJsaXNoLnNhdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKHB1Ymxpc2guc2F2ZSxub2RlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZiBwdWJsaXNoPT0nc3RyaW5nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgUHViU3ViLnB1Ymxpc2gocHVibGlzaCxub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgX3NhdmUoZGF0YSl7XHJcbiAgICAgICAgY29uc3Qge3VybH09dGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gYWdlbnQucG9zdCh1cmwsZGF0YSkudGhlbihyZXNwPT5yZXNwLmJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoRGF0YShwcm9wcyl7XHJcbiAgICAgICAgaWYodGhpcy5jYW5jZWxhYmxlUHJvbWlzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsYWJsZVByb21pc2UuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuY2VsYWJsZVByb21pc2UgPSB1dGlsLm1ha2VDYW5jZWxhYmxlKFxyXG4gICAgICAgICAgdGhpcy5fZmV0Y2hEYXRhKHByb3BzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxhYmxlUHJvbWlzZVxyXG4gICAgICAgICAgLnByb21pc2VcclxuICAgICAgICAgIC50aGVuKGRhdGE9Pnt0aGlzLnNldFN0YXRlKHtkYXRhfSk7fSlcclxuICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2lzQ2FuY2VsZWQnLCByZWFzb24uaXNDYW5jZWxlZClcclxuICAgICAgICAgICAgaWYoIXJlYXNvbi5pc0NhbmNlbGVkKXtcclxuICAgICAgICAgICAgICAgIFByb21pc2UucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2ZldGNoRGF0YShwcm9wcyl7XHJcbiAgICAgICAgY29uc3Qge3VybCxpZH09cHJvcHM7XHJcbiAgICAgICAgaWYoIWlkKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fVxyXG4gICAgICAgIHJldHVybiBhZ2VudC5nZXQodXJsKycvJytpZCkudGhlbihyZXNwPT5yZXNwLmJvZHkpOyBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudERpZE1vdW50JylcclxuICAgICAgICB0aGlzLmZldGNoRGF0YSh0aGlzLnByb3BzKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnKVxyXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKG5leHRQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3RXcml0ZXI7XHJcbiJdfQ==