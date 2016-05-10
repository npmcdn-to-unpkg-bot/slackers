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
        text: text || "Unauthorized",
        backgroundImage: icon()
      });
    }
  }]);

  return Slacker;
}(_preact.Component);

exports.default = Slacker;


function icon() {
  return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KICAgIDxwYXRoIGZpbGw9IiNGQ0MyMUIiIGQ9Ik0xNi4wMSwzMi45QzM1LjI5LDQuMDIsNjcuNS05LjE1LDEwMS42Myw4LjIyYzIyLjg0LDExLjYzLDMwLjc5LDM5LjIyLDIwLjg2LDcxLjY0CiAgICAgIGMtNC4wOSwxMy4zNyw2LjE0LDE1LjY0LDUuNDgsMjIuNzRjLTEuMjksMTMuODgtMjguNDksMjUuMjctNjMuNjQsMjUuMjdjLTM1LjE2LDAtNjIuNzItMTEuMzYtNjMuNjYtMjUuMjcKICAgICAgQy0xLjIzLDc0LjU0LDMuNzEsNTEuMzUsMTYuMDEsMzIuOSIvPgogIDwvZz4KCTxwYXRoIGZpbGw9IiMyRjJGMkYiIGQ9Ik04OC45Nyw2My44MWwtNS4xNiwxLjkxYy0yLjMxLDAuODgtMy4yNCw0LjU3LTIuMDcsOC4zMWwxMC4yMiwzMi41M2MxLjIzLDMuOSw1LjQ4LDUuOTIsOS41LDQuNTEKCQlsOC45Ni0zLjE3YzQuMDYtMS40NCw1LjY4LTUuNTYsMy41OS05LjJsLTE3LjI3LTMwLjJDOTQuNzgsNjUuMDMsOTEuMyw2Mi45NSw4OC45Nyw2My44MXogTTEwNy41OCwxMDQuODZsLTYuMzIsMi4yNAoJCWMtMi4wNiwwLjczLTQuMzEtMC4zMy01LjA1LTIuMzVjLTAuNzMtMi4wMywwLjIzLTQuMjEsMi4xMy00Ljg5bDUuODgtMi4xMWMxLjkxLTAuNjgsNC4yOCwwLjMzLDUuMjgsMi4yNgoJCUMxMTAuNSwxMDEuOTYsMTA5LjY0LDEwNC4xMywxMDcuNTgsMTA0Ljg2eiIvPgoJPHBhdGggZmlsbD0iIzJGMkYyRiIgZD0iTTQzLjgzLDMyLjA1Yy01LjQzLTEuNDctNi4zOC03LjcyLTMuODYtMTIuMTdjMS45OS0zLjExLDUuMzEtNC43LDguMTEtNC4zNGMyLjk0LDAuNCw1Ljc1LDIuOTQsNS44OCw2Ljc3CgkJQzU0LjE3LDI4LDQ5Ljg1LDMzLjU3LDQzLjgzLDMyLjA1eiIvPgoJPHBhdGggZmlsbD0iIzJGMkYyRiIgZD0iTTc0LjMzLDM2LjY4YzMuOTQsNC40MiwxMC4zNywyLjM4LDEzLjQ1LTIuMWMyLjA2LTMuMzUsMi4wNS03LjIzLDAuMzktOS43MQoJCWMtMS43Ni0yLjU3LTUuNTEtNC4wMi05LjI0LTIuMzRDNzMuMzksMjUuMDQsNzAuMDYsMzEuNzMsNzQuMzMsMzYuNjh6Ii8+Cgk8cGF0aCBmaWxsPSIjMkYyRjJGIiBkPSJNODkuMDksNzMuNGMtMC43NS0wLjA5LTEuNDgtMC41LTEuOTUtMS4xOGwtNy43OC0xMS40M2wtMTAuMDgsMy4wM2MtMS4wMiwwLjMyLTIuMTQtMC4wOC0yLjc4LTAuOTYKCQlsLTYuNDEtOC43MmwtMTIuMiw0LjFjLTEuMDIsMC4zNC0yLjE0LTAuMDMtMi43Ny0wLjkybC00LjgyLTYuNzRsLTguODksNC4wNGMtMC45NiwwLjQ0LTIuMDksMC4xOC0yLjc5LTAuNjRsLTQuMzUtNS4xNAoJCWwtNS42MiwyLjIyYy0xLjIxLDAuNDgtMi41OC0wLjE0LTMuMDQtMS4zOGMtMC40Ny0xLjI1LDAuMTItMi42MywxLjMzLTMuMTJsNy4xNS0yLjg0YzAuOTMtMC4zNywxLjk5LTAuMDksMi42NSwwLjY4bDQuMjksNS4wMwoJCWw5LjAyLTQuMTJjMS4wNC0wLjQ4LDIuMjgtMC4xNCwyLjk2LDAuOEw0Ny45NSw1M2wxMi4xNi00LjExYzEuMDMtMC4zNSwyLjE2LDAuMDIsMi44MSwwLjg5bDYuNDYsOC43MmwxMC4xNS0zLjA3CgkJYzEuMDctMC4zMywyLjI0LDAuMSwyLjg4LDEuMDRsOC45MiwxMy4wMWMwLjgyLDEuMiwwLjU0LDIuNzctMC42MiwzLjUzQzkwLjIyLDczLjM0LDg5LjY1LDczLjQ1LDg5LjA5LDczLjR6Ii8+CjwvZz4KPC9zdmc+Cg==";
}
module.exports = exports['default'];