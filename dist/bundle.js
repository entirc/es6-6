(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathConstants = require('./libs/math-constants');

var constants = _interopRequireWildcard(_mathConstants);

var _mathFunctions = require('./libs/math-functions');

var _math = require('./libs/math');

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//----------------------------------
// Destructuring assignment
//----------------------------------

var destructuringAssignment = {
    //----------------------------------
    // Destructuring assignment
    // - Fail-Soft Destructuring
    //----------------------------------

    failSoft: function failSoft() {

        var logLine = function logLine(expression) {
            var value = eval(expression);
            console.log(">", expression);
            console.log(value);
            return value;
        };

        var log = function log(expressions) {
            expressions.split('\n').map(function (line) {
                return line.trim();
            }).filter(function (line) {
                return line != '';
            }).forEach(function (expression) {
                return logLine(expression);
            });
        };

        var list = [7, 42];
        var _list$ = list[0],
            a = _list$ === undefined ? 1 : _list$,
            _list$2 = list[1],
            b = _list$2 === undefined ? 2 : _list$2,
            _list$3 = list[2],
            c = _list$3 === undefined ? 3 : _list$3,
            d = list[3];


        log('\n      a === 7\n      b === 42\n      c === 3\n      d === undefined\n    ');
    }

};

//----------------------------------
// Modules
//----------------------------------

var modules = {

    //----------------------------------
    // Modules
    // - Value Export/Import
    //----------------------------------
    valueExportImport: function valueExportImport() {
        console.log("π + π = " + (0, _mathFunctions.sum)(constants.PI, constants.PI));
        console.log("10π = " + (0, _mathFunctions.multiply)(10, constants.PI));
    },

    //----------------------------------
    // Modules
    // - Default and Wildcards
    //----------------------------------
    defaultAndWildcards: function defaultAndWildcards() {
        console.log("e^{π} / 2 = " + (0, _math.divide)((0, _math2.default)(_math.PI), 2));
    }
};

//----------------------------------
// Classes
//----------------------------------

var classes = {

    //----------------------------------
    // Classes
    // - Class Definition
    //----------------------------------
    classDefinition: function classDefinition() {
        var Shape = function () {
            function Shape(id, x, y) {
                _classCallCheck(this, Shape);

                this.id = id;
                this.move(x, y);
            }

            _createClass(Shape, [{
                key: 'move',
                value: function move(x, y) {
                    this.x = x;
                    this.y = y;
                }
            }]);

            return Shape;
        }();

        console.log(new Shape("Shape", 10, 20));
    },

    //----------------------------------
    // Classes
    // - Class Inheritance
    //----------------------------------
    classInheritance: function classInheritance() {
        var Shape = function () {
            function Shape(id, x, y) {
                _classCallCheck(this, Shape);

                this.id = id;
                this.move(x, y);
            }

            _createClass(Shape, [{
                key: 'move',
                value: function move(x, y) {
                    this.x = x;
                    this.y = y;
                }
            }]);

            return Shape;
        }();

        var Rectangle = function (_Shape) {
            _inherits(Rectangle, _Shape);

            function Rectangle(id, x, y, width, height) {
                _classCallCheck(this, Rectangle);

                var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, id, x, y));

                _this.width = width;
                _this.height = height;
                return _this;
            }

            return Rectangle;
        }(Shape);

        var Circle = function (_Shape2) {
            _inherits(Circle, _Shape2);

            function Circle(id, x, y, radius) {
                _classCallCheck(this, Circle);

                var _this2 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, id, x, y));

                _this2.radius = radius;
                return _this2;
            }

            return Circle;
        }(Shape);

        console.log(new Shape("Shape", 10, 20));
        console.log(new Rectangle("Rectangle", 10, 20, 30, 40));
        console.log(new Circle("Circle", 10, 20, 2));
    },

    //----------------------------------
    // Classes
    // - Class Inheritance, From Expressions
    //----------------------------------
    classInheritanceFromExpressions: function classInheritanceFromExpressions() {

        var aggregation = function aggregation(baseClass) {
            for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                mixins[_key - 1] = arguments[_key];
            }

            var base = function (_baseClass) {
                _inherits(_Combined, _baseClass);

                function _Combined() {
                    var _ref;

                    _classCallCheck(this, _Combined);

                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    var _this3 = _possibleConstructorReturn(this, (_ref = _Combined.__proto__ || Object.getPrototypeOf(_Combined)).call.apply(_ref, [this].concat(args)));

                    mixins.forEach(function (mixin) {
                        mixin.prototype.initializer.call(_this3);
                    });
                    return _this3;
                }

                return _Combined;
            }(baseClass);
            var copyProps = function copyProps(target, source) {
                Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source)).forEach(function (prop) {
                    if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) return;
                    Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
                });
            };
            mixins.forEach(function (mixin) {
                copyProps(base.prototype, mixin.prototype);
                copyProps(base, mixin);
            });
            return base;
        };

        var Colored = function () {
            function Colored() {
                _classCallCheck(this, Colored);
            }

            _createClass(Colored, [{
                key: 'initializer',
                value: function initializer() {
                    this._color = "white";
                }
            }, {
                key: 'color',
                get: function get() {
                    return this._color;
                },
                set: function set(v) {
                    this._color = v;
                }
            }]);

            return Colored;
        }();

        var ZCoord = function () {
            function ZCoord() {
                _classCallCheck(this, ZCoord);
            }

            _createClass(ZCoord, [{
                key: 'initializer',
                value: function initializer() {
                    this._z = 0;
                }
            }, {
                key: 'z',
                get: function get() {
                    return this._z;
                },
                set: function set(v) {
                    this._z = v;
                }
            }]);

            return ZCoord;
        }();

        var Shape = function () {
            function Shape(x, y) {
                _classCallCheck(this, Shape);

                this._x = x;this._y = y;
            }

            _createClass(Shape, [{
                key: 'x',
                get: function get() {
                    return this._x;
                },
                set: function set(v) {
                    this._x = v;
                }
            }, {
                key: 'y',
                get: function get() {
                    return this._y;
                },
                set: function set(v) {
                    this._y = v;
                }
            }]);

            return Shape;
        }();

        var Rectangle = function (_aggregation) {
            _inherits(Rectangle, _aggregation);

            function Rectangle() {
                _classCallCheck(this, Rectangle);

                return _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).apply(this, arguments));
            }

            return Rectangle;
        }(aggregation(Shape, Colored, ZCoord));

        var rect = new Rectangle(7, 42);
        rect.z = 1000;
        rect.color = "red";
        console.log(rect.x, rect.y, rect.z, rect.color);
    },

    //----------------------------------
    // Classes
    // - Base Class Access
    //----------------------------------
    baseClassAccess: function baseClassAccess() {
        var Shape = function () {
            function Shape(id, x, y) {
                _classCallCheck(this, Shape);

                this.id = id;
                this.move(x, y);
            }

            _createClass(Shape, [{
                key: 'move',
                value: function move(x, y) {
                    this.x = x;
                    this.y = y;
                }
            }, {
                key: 'toString',
                value: function toString() {
                    return 'Shape(' + this.id + ')';
                }
            }]);

            return Shape;
        }();

        var Rectangle = function (_Shape3) {
            _inherits(Rectangle, _Shape3);

            function Rectangle(id, x, y, width, height) {
                _classCallCheck(this, Rectangle);

                var _this5 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, id, x, y));

                _this5.width = width;
                _this5.height = height;
                return _this5;
            }

            _createClass(Rectangle, [{
                key: 'toString',
                value: function toString() {
                    return "Rectangle > " + _get(Rectangle.prototype.__proto__ || Object.getPrototypeOf(Rectangle.prototype), 'toString', this).call(this);
                }
            }]);

            return Rectangle;
        }(Shape);

        var Square = function (_Rectangle) {
            _inherits(Square, _Rectangle);

            function Square(id, x, y, side) {
                _classCallCheck(this, Square);

                return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).call(this, id, x, y, side, side));
            }

            _createClass(Square, [{
                key: 'toString',
                value: function toString() {
                    return 'Square > ' + _get(Square.prototype.__proto__ || Object.getPrototypeOf(Square.prototype), 'toString', this).call(this);
                }
            }]);

            return Square;
        }(Rectangle);

        var Circle = function (_Shape4) {
            _inherits(Circle, _Shape4);

            function Circle(id, x, y, radius) {
                _classCallCheck(this, Circle);

                var _this7 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, id, x, y));

                _this7.radius = radius;
                return _this7;
            }

            _createClass(Circle, [{
                key: 'toString',
                value: function toString() {
                    return "Circle > " + _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'toString', this).call(this);
                }
            }]);

            return Circle;
        }(Shape);

        console.log(new Shape("Shape", 10, 20).toString());
        console.log(new Rectangle("Rectangle", 10, 20, 30, 40).toString());
        console.log(new Circle("Circle", 10, 20, 2).toString());
        console.log(new Square("Square", 10, 20, 5).toString());
    },

    //----------------------------------
    // Classes
    // - Static Members
    //----------------------------------
    staticMembers: function staticMembers() {
        var Shape = function () {
            function Shape(id, x, y) {
                _classCallCheck(this, Shape);

                this.id = id;
                this.move(x, y);
            }

            _createClass(Shape, [{
                key: 'move',
                value: function move(x, y) {
                    this.x = x;
                    this.y = y;
                }
            }]);

            return Shape;
        }();

        var Rectangle = function (_Shape5) {
            _inherits(Rectangle, _Shape5);

            function Rectangle(id, x, y, width, height) {
                _classCallCheck(this, Rectangle);

                var _this8 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, id, x, y));

                _this8.width = width;
                _this8.height = height;
                return _this8;
            }

            _createClass(Rectangle, null, [{
                key: 'makeDefault',
                value: function makeDefault() {
                    return new Rectangle("rect-default", 0, 0, 100, 100);
                }
            }]);

            return Rectangle;
        }(Shape);

        var Circle = function (_Shape6) {
            _inherits(Circle, _Shape6);

            function Circle(id, x, y, radius) {
                _classCallCheck(this, Circle);

                var _this9 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, id, x, y));

                _this9.radius = radius;
                return _this9;
            }

            _createClass(Circle, null, [{
                key: 'makeDefault',
                value: function makeDefault() {
                    return new Circle("circle-default", 0, 0, 100);
                }
            }]);

            return Circle;
        }(Shape);

        var defRectangle = Rectangle.makeDefault();
        var defCircle = Circle.makeDefault();

        console.log(defRectangle);
        console.log(defCircle);
    },

    //----------------------------------
    // Classes
    // - Getter/Setter
    //----------------------------------
    getterSetter: function getterSetter() {
        var Rectangle = function () {
            function Rectangle(width, height) {
                _classCallCheck(this, Rectangle);

                this._width = width;
                this._height = height;
            }

            _createClass(Rectangle, [{
                key: 'width',
                set: function set(width) {
                    this._width = width;
                },
                get: function get() {
                    return this._width;
                }
            }, {
                key: 'height',
                set: function set(height) {
                    this._height = height;
                },
                get: function get() {
                    return this._height;
                }
            }, {
                key: 'area',
                get: function get() {
                    return this._width * this._height;
                }
            }]);

            return Rectangle;
        }();

        var rect = new Rectangle(50, 20);
        console.log('rect', rect);
        console.log('rect.width =', rect.width);
        console.log('rect.height =', rect.height);
        console.log('rect.area =', rect.area);
    }

};

//==================================

window.onload = function () {

    var bindFunction = function bindFunction(selector, fn) {
        var link = document.querySelector(selector);
        link.href = "javascript:void(0)";
        link.onclick = function () {
            console.clear();
            fn();
        };
    };

    var bindList = [["#da-fsd", destructuringAssignment.failSoft], ["#m-dw", modules.defaultAndWildcards], ["#m-vei", modules.valueExportImport], ["#c-cd", classes.classDefinition], ["#c-ci", classes.classInheritance], ["#c-cife", classes.classInheritanceFromExpressions], ["#c-bca", classes.baseClassAccess], ["#c-sm", classes.staticMembers], ["#c-gs", classes.getterSetter]];

    bindList.forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            selector = _ref3[0],
            fn = _ref3[1];

        return bindFunction(selector, fn);
    });
};

},{"./libs/math":4,"./libs/math-constants":2,"./libs/math-functions":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PI = exports.PI = 3.141593;
var E = exports.E = 2.71828182846;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(x, y) {
  return x + y;
};
var subtract = function subtract(x, y) {
  return x - y;
};
var multiply = function multiply(x, y) {
  return x * y;
};
var divide = function divide(x, y) {
  return x / y;
};

exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mathConstants = require("./math-constants");

Object.keys(_mathConstants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mathConstants[key];
    }
  });
});

var _mathFunctions = require("./math-functions");

Object.keys(_mathFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mathFunctions[key];
    }
  });
});

exports.default = function (x) {
  return Math.exp(x);
};

},{"./math-constants":2,"./math-functions":3}]},{},[1]);
