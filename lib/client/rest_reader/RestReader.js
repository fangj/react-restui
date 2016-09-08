'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../util');

var agent = require('superagent-promise')(require('superagent'), Promise);

var RestReader = function (_React$Component) {
    _inherits(RestReader, _React$Component);

    function RestReader(props) {
        _classCallCheck(this, RestReader);

        var _this = _possibleConstructorReturn(this, (RestReader.__proto__ || Object.getPrototypeOf(RestReader)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RestReader, [{
        key: 'render',
        value: function render() {
            var me = this;
            var data = this.state.data;

            if (!data) {
                return null;
            } else {
                var _props = this.props;
                var view = _props.view;

                var others = _objectWithoutProperties(_props, ['view']);

                var View = view;
                return React.createElement(View, _extends({ data: data }, others));
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchData(this.props);

            var me = this;
            var mySubscriber = function mySubscriber(msg, data) {
                console.log(msg, data);
                me.fetchData();
            };
            var subscribe = this.props.subscribe || [];
            this.tokens = subscribe.map(function (msg) {
                console.log('subscribe msg', msg);
                return PubSub.subscribe(msg, mySubscriber);
            });
        }
    }, {
        key: 'fetchData',
        value: function fetchData(props) {
            var _this2 = this;

            if (this.cancelablePromise) {
                this.cancelablePromise.cancel();
            }
            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
            this.cancelablePromise.promise.then(function (data) {
                _this2.setState({ data: data });
            }).catch(function (reason) {
                //console.log('isCanceled', reason.isCanceled);
                if (!reason.isCanceled) {
                    // console.log('catch',reason)
                    // Promise.reject(reason);
                    throw reason;
                }
            });
        }
    }, {
        key: '_fetchData',
        value: function _fetchData(props) {
            var url = props.url;
            // console.log('restreader _fetchData',url);

            return agent.get(url).then(function (resp) {
                return resp.body;
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
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
        value: function componentWillUnmount() {
            this.cancelablePromise.cancel();
            this.tokens.map(function (token) {
                PubSub.unsubscribe(token);
                console.log('unsubscribe', token);
            });
        }
    }]);

    return RestReader;
}(React.Component);

RestReader.propTypes = {
    view: _react.PropTypes.func.isRequired,
    url: _react.PropTypes.string.isRequired,
    subscribe: React.PropTypes.array
};


module.exports = RestReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF9yZWFkZXIvUmVzdFJlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUNBLElBQUksT0FBSyxRQUFRLFNBQVIsQ0FBVDs7QUFFQSxJQUFJLFFBQVEsUUFBUSxvQkFBUixFQUE4QixRQUFRLFlBQVIsQ0FBOUIsRUFBb0QsT0FBcEQsQ0FBWjs7SUFHTSxVOzs7QUFTRix3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1QsS0FEUzs7QUFFZixjQUFLLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFJbEI7Ozs7aUNBRVE7QUFDTCxnQkFBSSxLQUFLLElBQVQ7QUFESyxnQkFFRSxJQUZGLEdBRVEsS0FBSyxLQUZiLENBRUUsSUFGRjs7QUFHTCxnQkFBRyxDQUFDLElBQUosRUFBUztBQUNMLHVCQUFPLElBQVA7QUFDSCxhQUZELE1BRUs7QUFBQSw2QkFDc0IsS0FBSyxLQUQzQjtBQUFBLG9CQUNNLElBRE4sVUFDTSxJQUROOztBQUFBLG9CQUNjLE1BRGQ7O0FBRUQsb0JBQU0sT0FBSyxJQUFYO0FBQ0EsdUJBQU8sb0JBQUMsSUFBRCxhQUFNLE1BQU0sSUFBWixJQUFzQixNQUF0QixFQUFQO0FBQ0g7QUFDSjs7OzZDQUVvQixDQUNwQjs7OzRDQUVtQjtBQUNoQixpQkFBSyxTQUFMLENBQWUsS0FBSyxLQUFwQjs7QUFFQSxnQkFBTSxLQUFHLElBQVQ7QUFDQSxnQkFBSSxlQUFlLFNBQWYsWUFBZSxDQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCO0FBQ3BDLHdCQUFRLEdBQVIsQ0FBYSxHQUFiLEVBQWtCLElBQWxCO0FBQ0EsbUJBQUcsU0FBSDtBQUNILGFBSEQ7QUFJQSxnQkFBTSxZQUFVLEtBQUssS0FBTCxDQUFXLFNBQVgsSUFBc0IsRUFBdEM7QUFDQSxpQkFBSyxNQUFMLEdBQVksVUFBVSxHQUFWLENBQWMsZUFBSztBQUMzQix3QkFBUSxHQUFSLENBQVksZUFBWixFQUE0QixHQUE1QjtBQUNBLHVCQUFPLE9BQU8sU0FBUCxDQUFrQixHQUFsQixFQUF1QixZQUF2QixDQUFQO0FBQ0gsYUFIVyxDQUFaO0FBSUg7OztrQ0FFUyxLLEVBQU07QUFBQTs7QUFDWixnQkFBRyxLQUFLLGlCQUFSLEVBQTBCO0FBQ3RCLHFCQUFLLGlCQUFMLENBQXVCLE1BQXZCO0FBQ0g7QUFDRCxpQkFBSyxpQkFBTCxHQUF5QixLQUFLLGNBQUwsQ0FDdkIsS0FBSyxVQUFMLENBQWdCLEtBQWhCLENBRHVCLENBQXpCO0FBR0EsaUJBQUssaUJBQUwsQ0FDRyxPQURILENBRUcsSUFGSCxDQUVRLGdCQUFNO0FBQUMsdUJBQUssUUFBTCxDQUFjLEVBQUMsVUFBRCxFQUFkO0FBQXVCLGFBRnRDLEVBR0csS0FISCxDQUdTLFVBQUMsTUFBRCxFQUFZO0FBQ2pCO0FBQ0Esb0JBQUcsQ0FBQyxPQUFPLFVBQVgsRUFBc0I7QUFDbEI7QUFDQTtBQUNBLDBCQUFNLE1BQU47QUFDSDtBQUNOLGFBVkM7QUFXSDs7O21DQUVVLEssRUFBTTtBQUFBLGdCQUNOLEdBRE0sR0FDRCxLQURDLENBQ04sR0FETTtBQUViOztBQUNBLG1CQUFPLE1BQU0sR0FBTixDQUFVLEdBQVYsRUFBZSxJQUFmLENBQW9CO0FBQUEsdUJBQU0sS0FBSyxJQUFYO0FBQUEsYUFBcEIsQ0FBUDtBQUNIOzs7a0RBRXlCLFMsRUFBVztBQUNqQyxpQkFBSyxTQUFMLENBQWUsU0FBZjtBQUNIOzs7OENBRXFCLFMsRUFBVyxTLEVBQVc7QUFDeEMsbUJBQU8sSUFBUDtBQUNIOzs7NENBRW1CLFMsRUFBVyxTLEVBQVcsQ0FDekM7OzsyQ0FFa0IsUyxFQUFXLFMsRUFBVyxDQUN4Qzs7OytDQUVzQjtBQUNuQixpQkFBSyxpQkFBTCxDQUF1QixNQUF2QjtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLGlCQUFPO0FBQ25CLHVCQUFPLFdBQVAsQ0FBb0IsS0FBcEI7QUFDQSx3QkFBUSxHQUFSLENBQVksYUFBWixFQUEwQixLQUExQjtBQUNILGFBSEQ7QUFJSDs7OztFQTNGb0IsTUFBTSxTOztBQUF6QixVLENBRUssUyxHQUFZO0FBQ2YsVUFBTSxpQkFBVSxJQUFWLENBQWUsVUFETjtBQUVmLFNBQUssaUJBQVUsTUFBVixDQUFpQixVQUZQO0FBR2YsZUFBVyxNQUFNLFNBQU4sQ0FBZ0I7QUFIWixDOzs7QUE0RnZCLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJSZXN0UmVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSBcInJlYWN0XCI7XHJcbnZhciB1dGlsPXJlcXVpcmUoJy4uL3V0aWwnKTtcclxuXHJcbnZhciBhZ2VudCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQtcHJvbWlzZScpKHJlcXVpcmUoJ3N1cGVyYWdlbnQnKSxQcm9taXNlKTtcclxuXHJcblxyXG5jbGFzcyBSZXN0UmVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzICA9e1xyXG4gICAgICAgIHZpZXc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgc3Vic2NyaWJlOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IG1lID0gdGhpcztcclxuICAgICAgICBjb25zdCB7ZGF0YX09dGhpcy5zdGF0ZTtcclxuICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCB7dmlldywuLi5vdGhlcnN9PXRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGNvbnN0IFZpZXc9dmlldztcclxuICAgICAgICAgICAgcmV0dXJuIDxWaWV3IGRhdGE9e2RhdGF9IHsuLi5vdGhlcnN9Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBjb25zdCBtZT10aGlzO1xyXG4gICAgICAgIHZhciBteVN1YnNjcmliZXIgPSBmdW5jdGlvbiggbXNnLCBkYXRhICl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBtc2csIGRhdGEgKTtcclxuICAgICAgICAgICAgbWUuZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzdWJzY3JpYmU9dGhpcy5wcm9wcy5zdWJzY3JpYmV8fFtdO1xyXG4gICAgICAgIHRoaXMudG9rZW5zPXN1YnNjcmliZS5tYXAobXNnPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpYmUgbXNnJyxtc2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZSggbXNnLCBteVN1YnNjcmliZXIgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaERhdGEocHJvcHMpe1xyXG4gICAgICAgIGlmKHRoaXMuY2FuY2VsYWJsZVByb21pc2Upe1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbGFibGVQcm9taXNlLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbmNlbGFibGVQcm9taXNlID0gdXRpbC5tYWtlQ2FuY2VsYWJsZShcclxuICAgICAgICAgIHRoaXMuX2ZldGNoRGF0YShwcm9wcylcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsYWJsZVByb21pc2VcclxuICAgICAgICAgIC5wcm9taXNlXHJcbiAgICAgICAgICAudGhlbihkYXRhPT57dGhpcy5zZXRTdGF0ZSh7ZGF0YX0pO30pXHJcbiAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpc0NhbmNlbGVkJywgcmVhc29uLmlzQ2FuY2VsZWQpO1xyXG4gICAgICAgICAgICBpZighcmVhc29uLmlzQ2FuY2VsZWQpe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhdGNoJyxyZWFzb24pXHJcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9mZXRjaERhdGEocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IHt1cmx9PXByb3BzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXN0cmVhZGVyIF9mZXRjaERhdGEnLHVybCk7XHJcbiAgICAgICAgcmV0dXJuIGFnZW50LmdldCh1cmwpLnRoZW4ocmVzcD0+cmVzcC5ib2R5KTsgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICB0aGlzLmZldGNoRGF0YShuZXh0UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNhbmNlbGFibGVQcm9taXNlLmNhbmNlbCgpO1xyXG4gICAgICAgIHRoaXMudG9rZW5zLm1hcCh0b2tlbj0+e1xyXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliZScsdG9rZW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3RSZWFkZXI7XHJcbiJdfQ==