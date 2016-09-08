'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rest_reader = require('../rest_reader');

var _rest_reader2 = _interopRequireDefault(_rest_reader);

var _pubsubJs = require('pubsub-js');

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./Browser.less');

var ThumbView = function ThumbView(props) {
    return React.createElement(
        'div',
        null,
        props.data ? JSON.stringify(props.data, null, 2) : "new"
    );
};

var browser = function browser(props) {
    var ThumbView = props.thumbView;
    var keyField = props.keyField;
    console.log('ThumbView', props.data);
    return React.createElement(
        'div',
        { className: 'browser' },
        React.createElement(
            'div',
            { onClick: function onClick() {
                    return _pubsubJs2.default.publish('create');
                }, className: 'new' },
            React.createElement(ThumbView, null)
        ),
        props.data.map(function (d, i) {
            return React.createElement(
                'div',
                { key: i, onClick: function onClick() {
                        return _pubsubJs2.default.publish('update', d[keyField]);
                    }, className: 'old' },
                React.createElement(ThumbView, { data: d })
            );
        })
    );
};

var Browser = function (_React$Component) {
    _inherits(Browser, _React$Component);

    function Browser(props) {
        _classCallCheck(this, Browser);

        var _this = _possibleConstructorReturn(this, (Browser.__proto__ || Object.getPrototypeOf(Browser)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Browser, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _props = this.props;
            var url = _props.url;
            var thumbView = _props.thumbView;
            var keyField = _props.keyField;

            thumbView = thumbView || ThumbView;
            return React.createElement(_rest_reader2.default, { view: browser, url: url, thumbView: thumbView, keyField: keyField });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var me = this;
            this.tokenUpdate = _pubsubJs2.default.subscribe("updated", function () {
                me.forceUpdate();
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
        value: function componentWillUnmount() {
            _pubsubJs2.default.unsubscribe(this.tokenUpdate);
        }
    }]);

    return Browser;
}(React.Component);

module.exports = Browser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvYnJvd3Nlci9Ccm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUhBOztBQUtBLElBQU0sWUFBVSxTQUFWLFNBQVUsQ0FBQyxLQUFEO0FBQUEsV0FBUztBQUFBO0FBQUE7QUFBTSxjQUFNLElBQU4sR0FBVyxLQUFLLFNBQUwsQ0FBZSxNQUFNLElBQXJCLEVBQTBCLElBQTFCLEVBQStCLENBQS9CLENBQVgsR0FBNkM7QUFBbkQsS0FBVDtBQUFBLENBQWhCOztBQUVBLElBQU0sVUFBUSxTQUFSLE9BQVEsQ0FBQyxLQUFELEVBQVM7QUFDbkIsUUFBTSxZQUFVLE1BQU0sU0FBdEI7QUFDQSxRQUFNLFdBQVMsTUFBTSxRQUFyQjtBQUNBLFlBQVEsR0FBUixDQUFZLFdBQVosRUFBd0IsTUFBTSxJQUE5QjtBQUNBLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ1E7QUFBQTtBQUFBLGNBQUssU0FBUztBQUFBLDJCQUFJLG1CQUFPLE9BQVAsQ0FBZSxRQUFmLENBQUo7QUFBQSxpQkFBZCxFQUE0QyxXQUFVLEtBQXREO0FBQTRELGdDQUFDLFNBQUQ7QUFBNUQsU0FEUjtBQUVTLGNBQU0sSUFBTixDQUFXLEdBQVgsQ0FBZSxVQUFDLENBQUQsRUFBRyxDQUFIO0FBQUEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLEtBQUssQ0FBVixFQUFhLFNBQVM7QUFBQSwrQkFBSSxtQkFBTyxPQUFQLENBQWUsUUFBZixFQUF3QixFQUFFLFFBQUYsQ0FBeEIsQ0FBSjtBQUFBLHFCQUF0QixFQUFnRSxXQUFVLEtBQTFFO0FBQWdGLG9DQUFDLFNBQUQsSUFBVyxNQUFNLENBQWpCO0FBQWhGLGFBQVA7QUFBQSxTQUFmO0FBRlQsS0FBUjtBQUlILENBUkQ7O0lBV00sTzs7O0FBRUYscUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBSWxCOzs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxJQUFUO0FBREsseUJBRXdCLEtBQUssS0FGN0I7QUFBQSxnQkFFQSxHQUZBLFVBRUEsR0FGQTtBQUFBLGdCQUVJLFNBRkosVUFFSSxTQUZKO0FBQUEsZ0JBRWMsUUFGZCxVQUVjLFFBRmQ7O0FBR0wsd0JBQVUsYUFBVyxTQUFyQjtBQUNBLG1CQUNRLDZDQUFZLE1BQU0sT0FBbEIsRUFBMkIsS0FBSyxHQUFoQyxFQUFxQyxXQUFXLFNBQWhELEVBQTJELFVBQVUsUUFBckUsR0FEUjtBQUdIOzs7NkNBRW9CLENBQ3BCOzs7NENBRW1CO0FBQ2hCLGdCQUFNLEtBQUcsSUFBVDtBQUNBLGlCQUFLLFdBQUwsR0FBaUIsbUJBQU8sU0FBUCxDQUFrQixTQUFsQixFQUE0QixZQUFJO0FBQzlDLG1CQUFHLFdBQUg7QUFDRixhQUZnQixDQUFqQjtBQUdIOzs7a0RBRXlCLFMsRUFBVyxDQUNwQzs7OzhDQUVxQixTLEVBQVcsUyxFQUFXO0FBQ3hDLG1CQUFPLElBQVA7QUFDSDs7OzRDQUVtQixTLEVBQVcsUyxFQUFXLENBQ3pDOzs7MkNBRWtCLFMsRUFBVyxTLEVBQVcsQ0FDeEM7OzsrQ0FFc0I7QUFDbkIsK0JBQU8sV0FBUCxDQUFvQixLQUFLLFdBQXpCO0FBQ0g7Ozs7RUExQ2lCLE1BQU0sUzs7QUE2QzVCLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJCcm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVxdWlyZSgnLi9Ccm93c2VyLmxlc3MnKTtcblxuaW1wb3J0IFJlc3RSZWFkZXIgZnJvbSAnLi4vcmVzdF9yZWFkZXInO1xuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuXG5jb25zdCBUaHVtYlZpZXc9KHByb3BzKT0+PGRpdj57cHJvcHMuZGF0YT9KU09OLnN0cmluZ2lmeShwcm9wcy5kYXRhLG51bGwsMik6XCJuZXdcIn08L2Rpdj5cblxuY29uc3QgYnJvd3Nlcj0ocHJvcHMpPT57XG4gICAgY29uc3QgVGh1bWJWaWV3PXByb3BzLnRodW1iVmlldztcbiAgICBjb25zdCBrZXlGaWVsZD1wcm9wcy5rZXlGaWVsZDtcbiAgICBjb25zb2xlLmxvZygnVGh1bWJWaWV3Jyxwcm9wcy5kYXRhKVxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJicm93c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PlB1YlN1Yi5wdWJsaXNoKCdjcmVhdGUnKX0gY2xhc3NOYW1lPVwibmV3XCI+PFRodW1iVmlldy8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoZCxpKT0+PGRpdiBrZXk9e2l9IG9uQ2xpY2s9eygpPT5QdWJTdWIucHVibGlzaCgndXBkYXRlJyxkW2tleUZpZWxkXSl9IGNsYXNzTmFtZT1cIm9sZFwiPjxUaHVtYlZpZXcgZGF0YT17ZH0vPjwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj4pXG59XG5cblxuY2xhc3MgQnJvd3NlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICB2YXIge3VybCx0aHVtYlZpZXcsa2V5RmllbGR9PXRoaXMucHJvcHM7XG4gICAgICAgIHRodW1iVmlldz10aHVtYlZpZXd8fFRodW1iVmlldztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVzdFJlYWRlciB2aWV3PXticm93c2VyfSB1cmw9e3VybH0gdGh1bWJWaWV3PXt0aHVtYlZpZXd9IGtleUZpZWxkPXtrZXlGaWVsZH0vPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgbWU9dGhpcztcbiAgICAgICAgdGhpcy50b2tlblVwZGF0ZT1QdWJTdWIuc3Vic2NyaWJlKCBcInVwZGF0ZWRcIiwoKT0+e1xuICAgICAgICAgICBtZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdGhpcy50b2tlblVwZGF0ZSApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCcm93c2VyO1xuIl19