'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editor = require('../editor');

var _editor2 = _interopRequireDefault(_editor);

var _browser = require('../browser');

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./RestFormEditor.less');


var RestFormEditor = function (_React$Component) {
    _inherits(RestFormEditor, _React$Component);

    function RestFormEditor(props) {
        _classCallCheck(this, RestFormEditor);

        var _this = _possibleConstructorReturn(this, (RestFormEditor.__proto__ || Object.getPrototypeOf(RestFormEditor)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RestFormEditor, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _props = this.props;
            var schema = _props.schema;
            var uiSchema = _props.uiSchema;
            var url = _props.url;
            var keyField = _props.keyField;
            var thumbView = _props.thumbView;

            return React.createElement(
                'div',
                { className: 'rest_form_editor' },
                React.createElement(_editor2.default, { schema: schema,
                    uiSchema: uiSchema,
                    url: url,
                    keyField: keyField }),
                React.createElement(_browser2.default, { url: url,
                    thumbView: thumbView,
                    keyField: keyField })
            );
        }
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

    return RestFormEditor;
}(React.Component);

RestFormEditor.propTypes = {
    schema: React.PropTypes.object.isRequired,
    uiSchema: React.PropTypes.object,
    url: React.PropTypes.string,
    keyField: React.PropTypes.string,
    thumbView: React.PropTypes.any
};


module.exports = RestFormEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcmVzdF9mb3JtX2VkaXRvci9SZXN0Rm9ybUVkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFGQTs7O0lBR00sYzs7O0FBVUYsNEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBSWxCOzs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxJQUFUO0FBREsseUJBRTBDLEtBQUssS0FGL0M7QUFBQSxnQkFFRSxNQUZGLFVBRUUsTUFGRjtBQUFBLGdCQUVTLFFBRlQsVUFFUyxRQUZUO0FBQUEsZ0JBRWtCLEdBRmxCLFVBRWtCLEdBRmxCO0FBQUEsZ0JBRXNCLFFBRnRCLFVBRXNCLFFBRnRCO0FBQUEsZ0JBRStCLFNBRi9CLFVBRStCLFNBRi9COztBQUdMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGtCQUFmO0FBQ0ksd0RBQVEsUUFBUSxNQUFoQjtBQUNJLDhCQUFVLFFBRGQ7QUFFSSx5QkFBSyxHQUZUO0FBR0ksOEJBQVUsUUFIZCxHQURKO0FBS0kseURBQVMsS0FBSyxHQUFkO0FBQ0ksK0JBQVcsU0FEZjtBQUVJLDhCQUFVLFFBRmQ7QUFMSixhQURKO0FBV0g7Ozs2Q0FFb0IsQ0FDcEI7Ozs0Q0FFbUIsQ0FDbkI7OztrREFFeUIsUyxFQUFXLENBQ3BDOzs7OENBRXFCLFMsRUFBVyxTLEVBQVc7QUFDeEMsbUJBQU8sSUFBUDtBQUNIOzs7NENBRW1CLFMsRUFBVyxTLEVBQVcsQ0FDekM7OzsyQ0FFa0IsUyxFQUFXLFMsRUFBVyxDQUN4Qzs7OytDQUVzQixDQUN0Qjs7OztFQXBEd0IsTUFBTSxTOztBQUE3QixjLENBRUssUyxHQUFXO0FBQ2QsWUFBUSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEakI7QUFFZCxjQUFVLE1BQU0sU0FBTixDQUFnQixNQUZaO0FBR2QsU0FBSyxNQUFNLFNBQU4sQ0FBZ0IsTUFIUDtBQUlkLGNBQVUsTUFBTSxTQUFOLENBQWdCLE1BSlo7QUFLZCxlQUFXLE1BQU0sU0FBTixDQUFnQjtBQUxiLEM7OztBQXFEdEIsT0FBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6IlJlc3RGb3JtRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVxdWlyZSgnLi9SZXN0Rm9ybUVkaXRvci5sZXNzJyk7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQgQnJvd3NlciBmcm9tICcuLi9icm93c2VyJztcbmNsYXNzIFJlc3RGb3JtRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXM9IHtcbiAgICAgICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIHVpU2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB1cmw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGtleUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aHVtYlZpZXc6IFJlYWN0LlByb3BUeXBlcy5hbnlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBjb25zdCB7c2NoZW1hLHVpU2NoZW1hLHVybCxrZXlGaWVsZCx0aHVtYlZpZXd9PXRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3RfZm9ybV9lZGl0b3JcIj5cbiAgICAgICAgICAgICAgICA8RWRpdG9yIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICAgICAgICAgICAgICB1aVNjaGVtYT17dWlTY2hlbWF9XG4gICAgICAgICAgICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgICAgICAgICAgICBrZXlGaWVsZD17a2V5RmllbGR9Lz5cbiAgICAgICAgICAgICAgICA8QnJvd3NlciB1cmw9e3VybH1cbiAgICAgICAgICAgICAgICAgICAgdGh1bWJWaWV3PXt0aHVtYlZpZXd9XG4gICAgICAgICAgICAgICAgICAgIGtleUZpZWxkPXtrZXlGaWVsZH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzdEZvcm1FZGl0b3I7XG4iXX0=