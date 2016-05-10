'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Base).apply(this, arguments));
  }

  _createClass(Base, [{
    key: 'render',
    value: function render(_ref) {
      var text = _ref.text;
      var backgroundImage = _ref.backgroundImage;
      var children = _ref.children;
      var className = _ref.className;

      var _styles = styles();

      var base = _styles.base;
      var box = _styles.box;
      var icon = _styles.icon;

      icon.backgroundImage = 'url(\'' + backgroundImage + '\')';
      return (0, _preact.h)('div', {
        className: className,
        style: base
      }, (0, _preact.h)('div', { style: box }, (0, _preact.h)('div', { style: icon }), text || '', children));
    }
  }]);

  return Base;
}(_preact.Component);

exports.default = Base;


function styles() {
  return {
    base: {
      backgroundColor: 'rgb(244, 252, 255)',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    box: {
      color: '#ED6C30',
      textAlign: 'center',
      display: 'block',
      fontSize: '44px',
      fontWeight: 'bold',
      position: 'absolute',
      width: 300,
      height: 405,
      margin: 'auto',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    icon: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      width: 230,
      height: 230,
      margin: 'auto'
    }
  };
}
module.exports = exports['default'];