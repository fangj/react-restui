'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _creater = require('../creater');

var _creater2 = _interopRequireDefault(_creater);

var _updater = require('../updater');

var _updater2 = _interopRequireDefault(_updater);

var _pubsubJs = require('pubsub-js');

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./Editor.less');


var Editor = function (_React$Component) {
    _inherits(Editor, _React$Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

        _this.state = {
            editor: "creater" //默认是创建
        };
        return _this;
    }

    _createClass(Editor, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _state = this.state;
            var editor = _state.editor;
            var id = _state.id;
            var _props = this.props;
            var schema = _props.schema;
            var uiSchema = _props.uiSchema;
            var url = _props.url;
            var keyField = _props.keyField;

            return React.createElement(
                'div',
                { className: 'editor' },
                editor == "creater" ? React.createElement(_creater2.default, { schema: schema, uiSchema: uiSchema, url: url, keyField: keyField }) : React.createElement(_updater2.default, { schema: schema, uiSchema: uiSchema, url: url, id: id })
            );
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var me = this;
            this.tokenCreate = _pubsubJs2.default.subscribe("create", function () {
                me.setState({ editor: "creater", id: null });
            });
            this.tokenUpdate = _pubsubJs2.default.subscribe("update", function (msg, id) {
                me.setState({ editor: "updater", id: id });
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
            _pubsubJs2.default.unsubscribe(this.tokenCreate);
            _pubsubJs2.default.unsubscribe(this.tokenUpdate);
        }
    }]);

    return Editor;
}(React.Component);

Editor.propTypes = {
    schema: React.PropTypes.object.isRequired,
    uiSchema: React.PropTypes.object,
    url: React.PropTypes.string,
    keyField: React.PropTypes.string
};


module.exports = Editor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvZWRpdG9yL0VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUhBOzs7SUFLTSxNOzs7QUFTRixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1QsS0FEUzs7QUFFZixjQUFLLEtBQUwsR0FBYTtBQUNULG9CQUFPLFNBREUsQ0FDUztBQURULFNBQWI7QUFGZTtBQUtsQjs7OztpQ0FFUTtBQUNMLGdCQUFJLEtBQUssSUFBVDtBQURLLHlCQUVhLEtBQUssS0FGbEI7QUFBQSxnQkFFRSxNQUZGLFVBRUUsTUFGRjtBQUFBLGdCQUVTLEVBRlQsVUFFUyxFQUZUO0FBQUEseUJBR2dDLEtBQUssS0FIckM7QUFBQSxnQkFHRSxNQUhGLFVBR0UsTUFIRjtBQUFBLGdCQUdTLFFBSFQsVUFHUyxRQUhUO0FBQUEsZ0JBR2tCLEdBSGxCLFVBR2tCLEdBSGxCO0FBQUEsZ0JBR3NCLFFBSHRCLFVBR3NCLFFBSHRCOztBQUlMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFFBQWY7QUFDSywwQkFBUSxTQUFSLEdBQ0QseUNBQVMsUUFBUSxNQUFqQixFQUF5QixVQUFVLFFBQW5DLEVBQTZDLEtBQUssR0FBbEQsRUFBdUQsVUFBVSxRQUFqRSxHQURDLEdBRUQseUNBQVMsUUFBUSxNQUFqQixFQUF5QixVQUFVLFFBQW5DLEVBQTZDLEtBQUssR0FBbEQsRUFBdUQsSUFBSSxFQUEzRDtBQUhKLGFBREo7QUFPSDs7OzZDQUVvQixDQUNwQjs7OzRDQUVtQjtBQUNoQixnQkFBTSxLQUFHLElBQVQ7QUFDQSxpQkFBSyxXQUFMLEdBQWlCLG1CQUFPLFNBQVAsQ0FBa0IsUUFBbEIsRUFBMkIsWUFBSTtBQUM3QyxtQkFBRyxRQUFILENBQVksRUFBQyxRQUFPLFNBQVIsRUFBa0IsSUFBRyxJQUFyQixFQUFaO0FBQ0YsYUFGZ0IsQ0FBakI7QUFHQSxpQkFBSyxXQUFMLEdBQWlCLG1CQUFPLFNBQVAsQ0FBa0IsUUFBbEIsRUFBMkIsVUFBQyxHQUFELEVBQUssRUFBTCxFQUFVO0FBQ25ELG1CQUFHLFFBQUgsQ0FBWSxFQUFDLFFBQU8sU0FBUixFQUFrQixJQUFHLEVBQXJCLEVBQVo7QUFDRixhQUZnQixDQUFqQjtBQUdIOzs7a0RBRXlCLFMsRUFBVyxDQUNwQzs7OzhDQUVxQixTLEVBQVcsUyxFQUFXO0FBQ3hDLG1CQUFPLElBQVA7QUFDSDs7OzRDQUVtQixTLEVBQVcsUyxFQUFXLENBQ3pDOzs7MkNBRWtCLFMsRUFBVyxTLEVBQVcsQ0FDeEM7OzsrQ0FFc0I7QUFDbkIsK0JBQU8sV0FBUCxDQUFvQixLQUFLLFdBQXpCO0FBQ0EsK0JBQU8sV0FBUCxDQUFvQixLQUFLLFdBQXpCO0FBQ0g7Ozs7RUExRGdCLE1BQU0sUzs7QUFBckIsTSxDQUVNLFMsR0FBVztBQUNmLFlBQVEsTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRGhCO0FBRWYsY0FBVSxNQUFNLFNBQU4sQ0FBZ0IsTUFGWDtBQUdmLFNBQUssTUFBTSxTQUFOLENBQWdCLE1BSE47QUFJZixjQUFVLE1BQU0sU0FBTixDQUFnQjtBQUpYLEM7OztBQTJEdkIsT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6IkVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlcXVpcmUoJy4vRWRpdG9yLmxlc3MnKTtcbmltcG9ydCBDcmVhdGVyIGZyb20gJy4uL2NyZWF0ZXInO1xuaW1wb3J0IFVwZGF0ZXIgZnJvbSAnLi4vdXBkYXRlcic7XG5pbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICAgc3RhdGljIHByb3BUeXBlcz0ge1xuICAgICAgICBzY2hlbWE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdWlTY2hlbWE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAga2V5RmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlZGl0b3I6XCJjcmVhdGVyXCIgIC8v6buY6K6k5piv5Yib5bu6XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBjb25zdCB7ZWRpdG9yLGlkfT10aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7c2NoZW1hLHVpU2NoZW1hLHVybCxrZXlGaWVsZH09dGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yXCI+XG4gICAgICAgICAgICAgICAge2VkaXRvcj09XCJjcmVhdGVyXCI/XG4gICAgICAgICAgICAgICAgPENyZWF0ZXIgc2NoZW1hPXtzY2hlbWF9IHVpU2NoZW1hPXt1aVNjaGVtYX0gdXJsPXt1cmx9IGtleUZpZWxkPXtrZXlGaWVsZH0vPjpcbiAgICAgICAgICAgICAgICA8VXBkYXRlciBzY2hlbWE9e3NjaGVtYX0gdWlTY2hlbWE9e3VpU2NoZW1hfSB1cmw9e3VybH0gaWQ9e2lkfS8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBtZT10aGlzO1xuICAgICAgICB0aGlzLnRva2VuQ3JlYXRlPVB1YlN1Yi5zdWJzY3JpYmUoIFwiY3JlYXRlXCIsKCk9PntcbiAgICAgICAgICAgbWUuc2V0U3RhdGUoe2VkaXRvcjpcImNyZWF0ZXJcIixpZDpudWxsfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRva2VuVXBkYXRlPVB1YlN1Yi5zdWJzY3JpYmUoIFwidXBkYXRlXCIsKG1zZyxpZCk9PntcbiAgICAgICAgICAgbWUuc2V0U3RhdGUoe2VkaXRvcjpcInVwZGF0ZXJcIixpZDppZH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdGhpcy50b2tlbkNyZWF0ZSApO1xuICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRoaXMudG9rZW5VcGRhdGUgKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRpdG9yO1xuIl19