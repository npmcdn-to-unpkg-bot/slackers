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
        text: text || "",
        backgroundImage: icon()
      });
    }
  }]);

  return Slacker;
}(_preact.Component);

exports.default = Slacker;


function icon() {
  return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPScxMzJweCcgaGVpZ2h0PScxMzJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtZ2VhcnMiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAsLTIwKSI+PHBhdGggZD0iTTc5LjksNTIuNkM4MCw1MS44LDgwLDUwLjksODAsNTBzMC0xLjgtMC4xLTIuNmwtNS4xLTAuNGMtMC4zLTIuNC0wLjktNC42LTEuOC02LjdsNC4yLTIuOWMtMC43LTEuNi0xLjYtMy4xLTIuNi00LjUgTDcwLDM1Yy0xLjQtMS45LTMuMS0zLjUtNC45LTQuOWwyLjItNC42Yy0xLjQtMS0yLjktMS45LTQuNS0yLjZMNTkuOCwyN2MtMi4xLTAuOS00LjQtMS41LTYuNy0xLjhsLTAuNC01LjFDNTEuOCwyMCw1MC45LDIwLDUwLDIwIHMtMS44LDAtMi42LDAuMWwtMC40LDUuMWMtMi40LDAuMy00LjYsMC45LTYuNywxLjhsLTIuOS00LjFjLTEuNiwwLjctMy4xLDEuNi00LjUsMi42bDIuMSw0LjZjLTEuOSwxLjQtMy41LDMuMS01LDQuOWwtNC41LTIuMSBjLTEsMS40LTEuOSwyLjktMi42LDQuNWw0LjEsMi45Yy0wLjksMi4xLTEuNSw0LjQtMS44LDYuOGwtNSwwLjRDMjAsNDguMiwyMCw0OS4xLDIwLDUwczAsMS44LDAuMSwyLjZsNSwwLjQgYzAuMywyLjQsMC45LDQuNywxLjgsNi44bC00LjEsMi45YzAuNywxLjYsMS42LDMuMSwyLjYsNC41bDQuNS0yLjFjMS40LDEuOSwzLjEsMy41LDUsNC45bC0yLjEsNC42YzEuNCwxLDIuOSwxLjksNC41LDIuNmwyLjktNC4xIGMyLjEsMC45LDQuNCwxLjUsNi43LDEuOGwwLjQsNS4xQzQ4LjIsODAsNDkuMSw4MCw1MCw4MHMxLjgsMCwyLjYtMC4xbDAuNC01LjFjMi4zLTAuMyw0LjYtMC45LDYuNy0xLjhsMi45LDQuMiBjMS42LTAuNywzLjEtMS42LDQuNS0yLjZMNjUsNjkuOWMxLjktMS40LDMuNS0zLDQuOS00LjlsNC42LDIuMmMxLTEuNCwxLjktMi45LDIuNi00LjVMNzMsNTkuOGMwLjktMi4xLDEuNS00LjQsMS44LTYuN0w3OS45LDUyLjYgeiBNNTAsNjVjLTguMywwLTE1LTYuNy0xNS0xNWMwLTguMyw2LjctMTUsMTUtMTVzMTUsNi43LDE1LDE1QzY1LDU4LjMsNTguMyw2NSw1MCw2NXoiIGZpbGw9IiM4ZjdmNTkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSI5MCA1MCA1MCIgdG89IjAgNTAgNTAiIGR1cj0iMC45cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLDIwKSByb3RhdGUoMTUgNTAgNTApIj48cGF0aCBkPSJNNzkuOSw1Mi42QzgwLDUxLjgsODAsNTAuOSw4MCw1MHMwLTEuOC0wLjEtMi42bC01LjEtMC40Yy0wLjMtMi40LTAuOS00LjYtMS44LTYuN2w0LjItMi45Yy0wLjctMS42LTEuNi0zLjEtMi42LTQuNSBMNzAsMzVjLTEuNC0xLjktMy4xLTMuNS00LjktNC45bDIuMi00LjZjLTEuNC0xLTIuOS0xLjktNC41LTIuNkw1OS44LDI3Yy0yLjEtMC45LTQuNC0xLjUtNi43LTEuOGwtMC40LTUuMUM1MS44LDIwLDUwLjksMjAsNTAsMjAgcy0xLjgsMC0yLjYsMC4xbC0wLjQsNS4xYy0yLjQsMC4zLTQuNiwwLjktNi43LDEuOGwtMi45LTQuMWMtMS42LDAuNy0zLjEsMS42LTQuNSwyLjZsMi4xLDQuNmMtMS45LDEuNC0zLjUsMy4xLTUsNC45bC00LjUtMi4xIGMtMSwxLjQtMS45LDIuOS0yLjYsNC41bDQuMSwyLjljLTAuOSwyLjEtMS41LDQuNC0xLjgsNi44bC01LDAuNEMyMCw0OC4yLDIwLDQ5LjEsMjAsNTBzMCwxLjgsMC4xLDIuNmw1LDAuNCBjMC4zLDIuNCwwLjksNC43LDEuOCw2LjhsLTQuMSwyLjljMC43LDEuNiwxLjYsMy4xLDIuNiw0LjVsNC41LTIuMWMxLjQsMS45LDMuMSwzLjUsNSw0LjlsLTIuMSw0LjZjMS40LDEsMi45LDEuOSw0LjUsMi42bDIuOS00LjEgYzIuMSwwLjksNC40LDEuNSw2LjcsMS44bDAuNCw1LjFDNDguMiw4MCw0OS4xLDgwLDUwLDgwczEuOCwwLDIuNi0wLjFsMC40LTUuMWMyLjMtMC4zLDQuNi0wLjksNi43LTEuOGwyLjksNC4yIGMxLjYtMC43LDMuMS0xLjYsNC41LTIuNkw2NSw2OS45YzEuOS0xLjQsMy41LTMsNC45LTQuOWw0LjYsMi4yYzEtMS40LDEuOS0yLjksMi42LTQuNUw3Myw1OS44YzAuOS0yLjEsMS41LTQuNCwxLjgtNi43TDc5LjksNTIuNiB6IE01MCw2NWMtOC4zLDAtMTUtNi43LTE1LTE1YzAtOC4zLDYuNy0xNSwxNS0xNXMxNSw2LjcsMTUsMTVDNjUsNTguMyw1OC4zLDY1LDUwLDY1eiIgZmlsbD0iIzlmOWZhYiI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNTAgNTAiIHRvPSI5MCA1MCA1MCIgZHVyPSIwLjlzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvcGF0aD48L2c+PC9zdmc+";
}
module.exports = exports['default'];