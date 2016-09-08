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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // require('./Updater.less');


var Updater = function (_React$Component) {
    _inherits(Updater, _React$Component);

    function Updater(props) {
        _classCallCheck(this, Updater);

        var _this = _possibleConstructorReturn(this, (Updater.__proto__ || Object.getPrototypeOf(Updater)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Updater, [{
        key: 'render',
        value: function render() {
            var me = this;
            var _props = this.props;
            var schema = _props.schema;
            var uiSchema = _props.uiSchema;
            var url = _props.url;
            var id = _props.id;

            var form = function form(props) {
                return React.createElement(
                    _reactJsonschemaForm2.default,
                    { schema: schema, uiSchema: uiSchema, formData: props.data,
                        onSubmit: function onSubmit(_ref) {
                            var formData = _ref.formData;
                            return props.update(formData).then(function (_) {
                                return _pubsubJs2.default.publish('updated');
                            });
                        } },
                    React.createElement(
                        'div',
                        { className: 'btn-toolbar' },
                        React.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-success' },
                            '保存'
                        ),
                        React.createElement(
                            'button',
                            { className: 'btn btn-danger', onClick: function onClick(e) {
                                    e.preventDefault(); //不知为何submit会被调用，人为阻止
                                    props.remove().then(function (_) {
                                        return _pubsubJs2.default.publish('updated');
                                    });
                                } },
                            '删除'
                        )
                    )
                );
            };

            return React.createElement(
                'div',
                { className: 'updater' },
                React.createElement(_rest_writer2.default, { url: url, view: form, id: id })
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

    return Updater;
}(React.Component);

Updater.propTypes = {
    schema: React.PropTypes.object.isRequired,
    uiSchema: React.PropTypes.object,
    url: React.PropTypes.string,
    id: React.PropTypes.string
};


module.exports = Updater;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvdXBkYXRlci9VcGRhdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBSEE7OztJQUtNLE87OztBQVNGLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVCxLQURTOztBQUVmLGNBQUssS0FBTCxHQUFhLEVBQWI7QUFGZTtBQUlsQjs7OztpQ0FFUTtBQUNMLGdCQUFJLEtBQUssSUFBVDtBQURLLHlCQUUwQixLQUFLLEtBRi9CO0FBQUEsZ0JBRUUsTUFGRixVQUVFLE1BRkY7QUFBQSxnQkFFUyxRQUZULFVBRVMsUUFGVDtBQUFBLGdCQUVrQixHQUZsQixVQUVrQixHQUZsQjtBQUFBLGdCQUVzQixFQUZ0QixVQUVzQixFQUZ0Qjs7QUFHTCxnQkFBTSxPQUFLLFNBQUwsSUFBSyxDQUFDLEtBQUQ7QUFBQSx1QkFBUztBQUFBO0FBQUEsc0JBQU0sUUFBUSxNQUFkLEVBQXNCLFVBQVUsUUFBaEMsRUFBMEMsVUFBVSxNQUFNLElBQTFEO0FBQ1osa0NBQVU7QUFBQSxnQ0FBRSxRQUFGLFFBQUUsUUFBRjtBQUFBLG1DQUFjLE1BQU0sTUFBTixDQUFhLFFBQWIsRUFBdUIsSUFBdkIsQ0FBNEI7QUFBQSx1Q0FBRyxtQkFBTyxPQUFQLENBQWUsU0FBZixDQUFIO0FBQUEsNkJBQTVCLENBQWQ7QUFBQSx5QkFERTtBQUVaO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQSx5QkFESjtBQUVJO0FBQUE7QUFBQSw4QkFBUSxXQUFVLGdCQUFsQixFQUFtQyxTQUFTLGlCQUFDLENBQUQsRUFBSztBQUFDLHNDQUFFLGNBQUYsR0FBRCxDQUFvQjtBQUNqRSwwQ0FBTSxNQUFOLEdBQWUsSUFBZixDQUFvQjtBQUFBLCtDQUFHLG1CQUFPLE9BQVAsQ0FBZSxTQUFmLENBQUg7QUFBQSxxQ0FBcEI7QUFBa0QsaUNBRHREO0FBQUE7QUFBQTtBQUZKO0FBRlksaUJBQVQ7QUFBQSxhQUFYOztBQVNBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFNBQWY7QUFDSSw2REFBWSxLQUFLLEdBQWpCLEVBQXNCLE1BQU0sSUFBNUIsRUFBa0MsSUFBSSxFQUF0QztBQURKLGFBREo7QUFLSDs7OzZDQUVvQixDQUNwQjs7OzRDQUVtQixDQUNuQjs7O2tEQUV5QixTLEVBQVcsQ0FDcEM7Ozs4Q0FFcUIsUyxFQUFXLFMsRUFBVztBQUN4QyxtQkFBTyxJQUFQO0FBQ0g7Ozs0Q0FFbUIsUyxFQUFXLFMsRUFBVyxDQUN6Qzs7OzJDQUVrQixTLEVBQVcsUyxFQUFXLENBQ3hDOzs7K0NBRXNCLENBQ3RCOzs7O0VBdERpQixNQUFNLFM7O0FBQXRCLE8sQ0FFSyxTLEdBQVc7QUFDZCxZQUFRLE1BQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQURqQjtBQUVkLGNBQVUsTUFBTSxTQUFOLENBQWdCLE1BRlo7QUFHZCxTQUFLLE1BQU0sU0FBTixDQUFnQixNQUhQO0FBSWQsUUFBSSxNQUFNLFNBQU4sQ0FBZ0I7QUFKTixDOzs7QUF1RHRCLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJVcGRhdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVxdWlyZSgnLi9VcGRhdGVyLmxlc3MnKTtcbmltcG9ydCBSZXN0V3JpdGVyIGZyb20gJy4uL3Jlc3Rfd3JpdGVyJztcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1qc29uc2NoZW1hLWZvcm1cIjtcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcblxuY2xhc3MgVXBkYXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzPSB7XG4gICAgICAgIHNjaGVtYTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICB1aVNjaGVtYTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgdXJsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtzY2hlbWEsdWlTY2hlbWEsdXJsLGlkfT10aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmb3JtPShwcm9wcyk9PjxGb3JtIHNjaGVtYT17c2NoZW1hfSB1aVNjaGVtYT17dWlTY2hlbWF9IGZvcm1EYXRhPXtwcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoe2Zvcm1EYXRhfSk9PnByb3BzLnVwZGF0ZShmb3JtRGF0YSkudGhlbihfPT5QdWJTdWIucHVibGlzaCgndXBkYXRlZCcpKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj7kv53lrZg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKTsvL+S4jeefpeS4uuS9lXN1Ym1pdOS8muiiq+iwg+eUqO+8jOS6uuS4uumYu+atolxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucmVtb3ZlKCkudGhlbihfPT5QdWJTdWIucHVibGlzaCgndXBkYXRlZCcpKX19PuWIoOmZpDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBkYXRlclwiPlxuICAgICAgICAgICAgICAgIDxSZXN0V3JpdGVyIHVybD17dXJsfSB2aWV3PXtmb3JtfSBpZD17aWR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVwZGF0ZXI7XG4iXX0=