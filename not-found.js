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
        text: text || "Not Found",
        backgroundImage: icon()
      });
    }
  }]);

  return Slacker;
}(_preact.Component);

exports.default = Slacker;


function icon() {
  return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KICAgIDxnPgogICAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik0xMjUuODMsNzUuMzVjNy44MS0zMC4wNS04LjkyLTU5LjE0LTM4LjI4LTY1LjQ5QzI0LjIzLTMuODMtMy44OSw1My43NSwwLjc1LDk1LjE3CiAgICAgICAgICBjMCwxMy44MSwyOC4yMiwyNS4wMiw2My4wMiwyNS4wMmMzMi42MywwLDU5LjQ1LTkuODYsNjIuNjktMjIuNDdjMC4yMS0wLjg0LDAuMzItMS43LDAuMzItMi41NgogICAgICAgICAgQzEyNi43OCw4OC42LDEyMi42NSw4Ny42MSwxMjUuODMsNzUuMzV6Ii8+CiAgICAgIDwvZGVmcz4KICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2OC42MDU1IiB5MT0iNjUuMzUwNiIgeDI9IjgyLjMwNjUiIHkyPSIxMC4yNDE4Ij4KICAgICAgICA8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkNDMjFCIi8+CiAgICAgICAgPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzQyQURFNyIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIiBmaWxsPSJ1cmwoI1NWR0lEXzJfKSIvPgogICAgICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzNfIj4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CiAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2c+CgkJPHBhdGggZmlsbD0iI0VENkMzMCIgZD0iTTQ1LjkyLDEwMi44OWMzLjUxLDEuMTQsNi40NSwzLjYsOS4yOSw1LjkyYzMuMzMsMi44NSw3LjExLDQuMjksMTEuNTQsMy44OGMzLjc3LTAuMzUsNy40Mi0yLjA0LDkuOC01LjE3CgkJCWM2LjU4LTguNjgsMS44Ni0yMC40NywwLjAzLTIzLjczYy0zLjk4LTYuNjQtMTAuMDItMTEuNjQtMTYuODYtMTQuNDRjLTMuNjUtMS41My04LjE1LTIuNjctMTIuMzktMi44NgoJCQljLTEwLjEyLTAuNTgtMjEuOSwzLjA3LTI5LjA2LDEzLjQ4Yy01LjQyLDcuNjQtNi42NiwyMC4yLDIuNjQsMjQuMzdjMy4wNCwxLjM2LDYuNDgsMS43OCw5LjYzLDAuNTQKCQkJYzQuMS0xLjYzLDguNjgtMy4xMiwxMy4xNi0yLjQ5QzQ0LjQ2LDEwMi40OCw0NS4yLDEwMi42Niw0NS45MiwxMDIuODl6Ii8+CgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTkwLjI0LDUxLjM0Yy0xLjYyLDguOTEtOS42MSwxNC45Mi0xNy44MywxMy40MmMtOC4yNC0xLjUtMTMuNTktOS45NC0xMS45NS0xOC44NQoJCQljMS42Mi04LjkxLDkuNi0xNC45MSwxNy44My0xMy40MUM4Ni41MiwzNCw5MS44Nyw0Mi40Myw5MC4yNCw1MS4zNHoiLz4KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDcuOSw0Ny43NWMtMy4yNyw4LjE2LTExLjQzLDEyLjU3LTE4LjIxLDkuODVjLTYuODEtMi43Mi05LjY2LTExLjU0LTYuMzgtMTkuNwoJCQljMy4yNy04LjE2LDExLjQxLTEyLjU3LDE4LjIxLTkuODVDNDguMzEsMzAuNzcsNTEuMTYsMzkuNiw0Ny45LDQ3Ljc1eiIvPgoJCTxwYXRoIGZpbGw9IiMyRjJGMkYiIGQ9Ik0zOS43Niw0NC42NWMtMC45NiwyLjkyLTMuNzUsNC42OC02LjI0LDMuOTRjLTIuNDktMC43NC0zLjcyLTMuNzEtMi43Ni02LjYzCgkJCWMwLjk1LTIuOTIsMy43NC00LjY5LDYuMjMtMy45NEMzOS40NywzOC43Niw0MC43MSw0MS43MywzOS43Niw0NC42NSIvPgoJCTxwYXRoIGZpbGw9IiMyRjJGMkYiIGQ9Ik03OC43NSw0OS42MmMtMC4zOSwzLjMyLTIuOTcsNS43OS01Ljc4LDUuNTRjLTIuOC0wLjI1LTQuNzYtMy4xNS00LjM4LTYuNDVjMC4zOC0zLjMxLDIuOTgtNS44LDUuNzgtNS41NQoJCQlDNzcuMTcsNDMuNDIsNzkuMTMsNDYuMzEsNzguNzUsNDkuNjIiLz4KCTwvZz4KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDkuMjYsODUuOWMtMC4xNi01LjI2LTUuNDItMTMuNzQtNi40LTEzLjg1Yy0xLjAyLTAuMDYtNS4yOSw2LjU0LTUuODgsMTMuMjcKCQljLTAuNTUsNC44MywyLjE4LDguMjcsNi4wMiw4LjIzQzEwNy4yMyw5My41MSwxMDkuMzMsOTAuNjIsMTA5LjI2LDg1Ljl6Ii8+CjwvZz4KPC9zdmc+Cg==";
}
module.exports = exports['default'];