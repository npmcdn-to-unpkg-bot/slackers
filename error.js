'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slacker = function (_Component) {
  _inherits(Slacker, _Component);

  function Slacker() {
    _classCallCheck(this, Slacker);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Slacker).apply(this, arguments));
  }

  _createClass(Slacker, [{
    key: 'render',
    value: function render(_ref) {
      var text = _ref.text;

      return (0, _preact.h)(_base2.default, {
        text: text || "Error",
        backgroundImage: icon()
      });
    }
  }]);

  return Slacker;
}(_preact.Component);

exports.default = Slacker;


function icon() {
  return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLjg6zjgqTjg6Tjg7xfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IgoJIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI4IDEyOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZmlsbD0iI0ZDQzIxQiIgZD0iTTEyNS43MSw3NC45OGM3Ljc5LTI5LjY1LTguNzMtNTkuMTgtMzguMi02NC42QzI0LjExLTEuMjctMy43Nyw1My42OCwwLjg2LDk0LjUzCgkJCWMwLDEzLjYyLDI4LjE2LDI0LjY4LDYyLjksMjQuNjhjMzIuNTYsMCw1OS4zNS05LjcyLDYyLjU3LTIyLjE2YzAuMjItMC44MywwLjMzLTEuNjcsMC4zMy0yLjUyCgkJCUMxMjYuNjYsODguMDUsMTIyLjUzLDg3LjA3LDEyNS43MSw3NC45OHoiLz4KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTguOTIsNzUuODdjLTAuNjIsMy45NiwwLjYzLDkuMDUsNS40LDkuMzljNC43OSwwLjM0LDguMS0zLjMxLDguNTItOS4wM2MwLjY2LTguNTEtNC42LTE4LjUzLTUuOC0xOC42MQoJCQlDMTA1Ljg1LDU3LjU0LDEwMC4zNCw2Ni4zOCw5OC45Miw3NS44NyIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0iIzJGMkYyRiIgZD0iTTMxLjEsNDAuMThjMi4yNy00LjUzLDcuMTktNi42OSwxMC45OC00Ljg0YzMuNzcsMS44Niw1LjAxLDcuMDMsMi43NCwxMS41NnMtNy4xNyw2LjY4LTEwLjk3LDQuODIKCQkJQzMwLjA4LDQ5Ljg3LDI4Ljg0LDQ0LjY5LDMxLjEsNDAuMTh6Ii8+CgkJPHBhdGggZmlsbD0iIzJGMkYyRiIgZD0iTTczLjA3LDc3LjQzYy0wLjM1LDEuMjYtMS41MSwyLjA4LTIuNzUsMi4wOGMtMC4yNywwLTAuNTMtMC4wNC0wLjc5LTAuMTEKCQkJYy0xNy43Mi01LjEyLTM2LjQ5LTYuODctMzYuNjgtNi44OGMtMS41Ny0wLjE2LTIuNzQtMS41NC0yLjYtMy4xMmMwLjE1LTEuNTgsMS41Mi0yLjc1LDMuMTItMi42YzAuNzksMC4wNiwxOS40OSwxLjgxLDM3Ljc0LDcuMDkKCQkJQzcyLjY0LDc0LjMyLDczLjUxLDc1LjkxLDczLjA3LDc3LjQzeiIvPgoJCTxwYXRoIGZpbGw9IiMyRjJGMkYiIGQ9Ik04NC4xLDUyLjFjLTEuMDksNS4wNi01LjQsOC40Ni05LjY1LDcuNThjLTQuMjctMC44OS02LjgzLTUuNzEtNS43Ni0xMC43OWMxLjA5LTUuMDgsNS40MS04LjQ3LDkuNjYtNy41OAoJCQlDODIuNTksNDIuMTksODUuMTgsNDcuMDEsODQuMSw1Mi4xeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=";
}
module.exports = exports['default'];