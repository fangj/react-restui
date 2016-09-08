'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rest_writer = require('../rest_writer');

var _rest_writer2 = _interopRequireDefault(_rest_writer);

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _pubsubJs = require('pubsub-js');

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./Creater.less');


var Creater = function (_React$Component) {
    _inherits(Creater, _React$Component);

    function Creater(props) {
        _classCallCheck(this, Creater);

        var _this = _possibleConstructorReturn(this, (Creater.__proto__ || Object.getPrototypeOf(Creater)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Creater, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _props = this.props;
            var schema = _props.schema;
            var uiSchema = _props.uiSchema;
            var url = _props.url;
            var keyField = _props.keyField;

            var form = function form(props) {
                return React.createElement(
                    _reactJsonschemaForm2.default,
                    { schema: schema, uiSchema: uiSchema,
                        onSubmit: function onSubmit(_ref) {
                            var formData = _ref.formData;
                            return props.save(formData).then(function (d) {
                                _pubsubJs2.default.publish('updated');_pubsubJs2.default.publish('update', d[keyField]);
                            });
                        } },
                    React.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-success' },
                        '保存'
                    )
                );
            };

            return React.createElement(
                'div',
                { className: 'creater' },
                React.createElement(_rest_writer2.default, { url: url, view: form })
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

    return Creater;
}(React.Component);

Creater.propTypes = {
    schema: React.PropTypes.object.isRequired,
    uiSchema: React.PropTypes.object,
    url: React.PropTypes.string,
    keyField: React.PropTypes.string
};


module.exports = Creater;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY3JlYXRlci9DcmVhdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBSEE7OztJQUtNLE87OztBQVNGLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVCxLQURTOztBQUVmLGNBQUssS0FBTCxHQUFhLEVBQWI7QUFGZTtBQUlsQjs7OztpQ0FFUTtBQUNMLGdCQUFJLEtBQUssSUFBVDtBQURLLHlCQUVnQyxLQUFLLEtBRnJDO0FBQUEsZ0JBRUUsTUFGRixVQUVFLE1BRkY7QUFBQSxnQkFFUyxRQUZULFVBRVMsUUFGVDtBQUFBLGdCQUVrQixHQUZsQixVQUVrQixHQUZsQjtBQUFBLGdCQUVzQixRQUZ0QixVQUVzQixRQUZ0Qjs7QUFHTCxnQkFBTSxPQUFLLFNBQUwsSUFBSyxDQUFDLEtBQUQ7QUFBQSx1QkFBUztBQUFBO0FBQUEsc0JBQU0sUUFBUSxNQUFkLEVBQXNCLFVBQVUsUUFBaEM7QUFDWixrQ0FBVTtBQUFBLGdDQUFFLFFBQUYsUUFBRSxRQUFGO0FBQUEsbUNBQWMsTUFBTSxJQUFOLENBQVcsUUFBWCxFQUFxQixJQUFyQixDQUEwQixhQUFHO0FBQUMsbURBQU8sT0FBUCxDQUFlLFNBQWYsRUFBMEIsbUJBQU8sT0FBUCxDQUFlLFFBQWYsRUFBd0IsRUFBRSxRQUFGLENBQXhCO0FBQXNDLDZCQUE5RixDQUFkO0FBQUEseUJBREU7QUFFUjtBQUFBO0FBQUEsMEJBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQUZRLGlCQUFUO0FBQUEsYUFBWDs7QUFLQSxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQ0ksNkRBQVksS0FBSyxHQUFqQixFQUFzQixNQUFNLElBQTVCO0FBREosYUFESjtBQUtIOzs7NkNBRW9CLENBQ3BCOzs7NENBRW1CLENBQ25COzs7a0RBRXlCLFMsRUFBVyxDQUNwQzs7OzhDQUVxQixTLEVBQVcsUyxFQUFXO0FBQ3hDLG1CQUFPLElBQVA7QUFDSDs7OzRDQUVtQixTLEVBQVcsUyxFQUFXLENBQ3pDOzs7MkNBRWtCLFMsRUFBVyxTLEVBQVcsQ0FDeEM7OzsrQ0FFc0IsQ0FDdEI7Ozs7RUFsRGlCLE1BQU0sUzs7QUFBdEIsTyxDQUVNLFMsR0FBVztBQUNmLFlBQVEsTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRGhCO0FBRWYsY0FBVSxNQUFNLFNBQU4sQ0FBZ0IsTUFGWDtBQUdmLFNBQUssTUFBTSxTQUFOLENBQWdCLE1BSE47QUFJZixjQUFVLE1BQU0sU0FBTixDQUFnQjtBQUpYLEM7OztBQW1EdkIsT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6IkNyZWF0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXF1aXJlKCcuL0NyZWF0ZXIubGVzcycpO1xuaW1wb3J0IFJlc3RXcml0ZXIgZnJvbSAnLi4vcmVzdF93cml0ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWpzb25zY2hlbWEtZm9ybVwiO1xuaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuXG5jbGFzcyBDcmVhdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgICBzdGF0aWMgcHJvcFR5cGVzPSB7XG4gICAgICAgIHNjaGVtYTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICB1aVNjaGVtYTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgdXJsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBrZXlGaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtzY2hlbWEsdWlTY2hlbWEsdXJsLGtleUZpZWxkfT10aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmb3JtPShwcm9wcyk9PjxGb3JtIHNjaGVtYT17c2NoZW1hfSB1aVNjaGVtYT17dWlTY2hlbWF9IFxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoe2Zvcm1EYXRhfSk9PnByb3BzLnNhdmUoZm9ybURhdGEpLnRoZW4oZD0+e1B1YlN1Yi5wdWJsaXNoKCd1cGRhdGVkJyk7UHViU3ViLnB1Ymxpc2goJ3VwZGF0ZScsZFtrZXlGaWVsZF0pO30pfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+5L+d5a2YPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGVyXCI+XG4gICAgICAgICAgICAgICAgPFJlc3RXcml0ZXIgdXJsPXt1cmx9IHZpZXc9e2Zvcm19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDcmVhdGVyO1xuIl19