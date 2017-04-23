//----------------------------------
// Destructuring assignment
//----------------------------------

let destructuringAssignment = {
  //----------------------------------
  // Destructuring assignment
  // - Fail-Soft Destructuring
  //----------------------------------

  failSoft: () => {

    const logLine = expression => {
      let value = eval(expression)
      console.log(">", expression)
      console.log(value)
      return value
    }

    const log = expressions => {
      expressions
        .split('\n')
        .map(line => line.trim())
        .filter(line => line != '')
        .forEach(expression => logLine(expression))
    }

    var list = [ 7, 42 ]
    var [ a = 1, b = 2, c = 3, d ] = list

    log(`
      a === 7
      b === 42
      c === 3
      d === undefined
    `)
  }

}

//----------------------------------
// Modules
//----------------------------------

import * as constants from "./libs/math-constants"
import { sum, multiply } from "./libs/math-functions"

import exp, { PI, E, divide } from "./libs/math"

let modules = {

  //----------------------------------
  // Modules
  // - Value Export/Import
  //----------------------------------
  valueExportImport: () => {
    console.log("π + π = " + sum(constants.PI, constants.PI))
    console.log("10π = " + multiply(10, constants.PI))
  },

  //----------------------------------
  // Modules
  // - Default and Wildcards
  //----------------------------------
  defaultAndWildcards: () => {
    console.log("e^{π} / 2 = " + divide(exp(PI), 2))
  }
}

//----------------------------------
// Classes
//----------------------------------

let classes = {

  //----------------------------------
  // Classes
  // - Class Definition
  //----------------------------------
  classDefinition: () => {

    class Shape {
        constructor (id, x, y) {
            this.id = id
            this.move(x, y)
        }
        move (x, y) {
            this.x = x
            this.y = y
        }
    }

    console.log(new Shape("Shape", 10, 20))

  },

  //----------------------------------
  // Classes
  // - Class Inheritance
  //----------------------------------
  classInheritance: () => {

    class Shape {
        constructor (id, x, y) {
            this.id = id
            this.move(x, y)
        }
        move (x, y) {
            this.x = x
            this.y = y
        }
    }

    class Rectangle extends Shape {
        constructor (id, x, y, width, height) {
            super(id, x, y)
            this.width  = width
            this.height = height
        }
    }

    class Circle extends Shape {
        constructor (id, x, y, radius) {
            super(id, x, y)
            this.radius = radius
        }
    }

    console.log(new Shape("Shape", 10, 20))
    console.log(new Rectangle("Rectangle", 10, 20, 30, 40))
    console.log(new Circle("Circle", 10, 20, 2))

  },

  //----------------------------------
  // Classes
  // - Class Inheritance, From Expressions
  //----------------------------------
  classInheritanceFromExpressions: () => {

    var aggregation = (baseClass, ...mixins) => {
        let base = class _Combined extends baseClass {
            constructor (...args) {
                super(...args)
                mixins.forEach((mixin) => {
                    mixin.prototype.initializer.call(this)
                })
            }
        }
        let copyProps = (target, source) => {
            Object.getOwnPropertyNames(source)
                .concat(Object.getOwnPropertySymbols(source))
                .forEach((prop) => {
                if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    return
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
            })
        }
        mixins.forEach((mixin) => {
            copyProps(base.prototype, mixin.prototype)
            copyProps(base, mixin)
        })
        return base
    }

    class Colored {
        initializer ()     { this._color = "white" }
        get color ()       { return this._color }
        set color (v)      { this._color = v }
    }

    class ZCoord {
        initializer ()     { this._z = 0 }
        get z ()           { return this._z }
        set z (v)          { this._z = v }
    }

    class Shape {
        constructor (x, y) { this._x = x; this._y = y }
        get x ()           { return this._x }
        set x (v)          { this._x = v }
        get y ()           { return this._y }
        set y (v)          { this._y = v }
    }

    class Rectangle extends aggregation(Shape, Colored, ZCoord) {}

    let rect   = new Rectangle(7, 42)
    rect.z     = 1000
    rect.color = "red"
    console.log(rect.x, rect.y, rect.z, rect.color)

  },

  //----------------------------------
  // Classes
  // - Base Class Access
  //----------------------------------
  baseClassAccess: () => {

    class Shape {
      constructor (id, x, y) {
          this.id = id
          this.move(x, y)
      }
      move (x, y) {
          this.x = x
          this.y = y
      }
      toString () {
          return `Shape(${this.id})`
      }
    }

    class Rectangle extends Shape {
      constructor (id, x, y, width, height) {
          super(id, x, y)
          this.width  = width
          this.height = height
      }
      toString () {
          return "Rectangle > " + super.toString()
      }
    }

    class Square extends Rectangle {
      constructor(id, x, y, side) {
        super(id, x, y, side, side)
      }
      toString() {
        return `Square > ${super.toString()}`
      }
    }

    class Circle extends Shape {
      constructor (id, x, y, radius) {
          super(id, x, y)
          this.radius = radius
      }
      toString () {
          return "Circle > " + super.toString()
      }
    }

    console.log(new Shape("Shape", 10, 20).toString())
    console.log(new Rectangle("Rectangle", 10, 20, 30, 40).toString())
    console.log(new Circle("Circle", 10, 20, 2).toString())
    console.log(new Square("Square", 10, 20, 5).toString())

  },

  //----------------------------------
  // Classes
  // - Static Members
  //----------------------------------
  staticMembers: () => {

    class Shape {
      constructor (id, x, y) {
          this.id = id
          this.move(x, y)
      }
      move (x, y) {
          this.x = x
          this.y = y
      }
    }

    class Rectangle extends Shape {
      constructor (id, x, y, width, height) {
          super(id, x, y)
          this.width  = width
          this.height = height
      }
      static makeDefault () {
          return new Rectangle("rect-default", 0, 0, 100, 100)
      }
    }

    class Circle extends Shape {
      constructor (id, x, y, radius) {
          super(id, x, y)
          this.radius = radius
      }
      static makeDefault () {
          return new Circle("circle-default", 0, 0, 100)
      }
    }

    let defRectangle = Rectangle.makeDefault()
    let defCircle    = Circle.makeDefault()

    console.log(defRectangle)
    console.log(defCircle)

  },

  //----------------------------------
  // Classes
  // - Getter/Setter
  //----------------------------------
  getterSetter: () => {

    class Rectangle {
      constructor (width, height) {
          this._width  = width
          this._height = height
      }
      set width  (width)  { this._width = width               }
      get width  ()       { return this._width                }
      set height (height) { this._height = height             }
      get height ()       { return this._height               }
      get area   ()       { return this._width * this._height }
    }

    let rect = new Rectangle(50, 20)
    console.log('rect', rect)
    console.log('rect.width =', rect.width)
    console.log('rect.height =', rect.height)
    console.log('rect.area =', rect.area)

  }

}

//==================================

window.onload = () => {

  let bindFunction = (selector, fn) => {
    let link = document.querySelector(selector)
    link.href = "javascript:void(0)"
    link.onclick = () => {
      console.clear()
      fn()
    }
  }

  let bindList = [
    ["#da-fsd", destructuringAssignment.failSoft],
    ["#m-dw",   modules.defaultAndWildcards],
    ["#m-vei",  modules.valueExportImport],
    ["#c-cd",   classes.classDefinition],
    ["#c-ci",   classes.classInheritance],
    ["#c-cife", classes.classInheritanceFromExpressions],
    ["#c-bca",  classes.baseClassAccess],
    ["#c-sm",   classes.staticMembers],
    ["#c-gs",   classes.getterSetter]
  ]

  bindList.forEach(([selector, fn]) => bindFunction(selector, fn))
}
