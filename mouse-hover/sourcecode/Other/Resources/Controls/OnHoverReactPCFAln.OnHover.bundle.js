/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./OnHover/Hover.tsx":
/*!***************************!*\
  !*** ./OnHover/Hover.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Hover = void 0;\n/*import * as React from \"react\";\r\n\r\nexport interface IHoverProps {\r\n  label?: string,\r\n  height?: string,\r\n  width?: string,\r\n  initEvents: (e:HTMLDivElement) => void\r\n}\r\n\r\nexport class Hover extends React.Component<IHoverProps> {\r\n  \r\n    private _element: HTMLDivElement;\r\n  \r\n    componentDidMount(): void {\r\n        //wait 1 second before initializing events\r\n        setTimeout(()=>{\r\n            this.props.initEvents(this._element);\r\n        }, 1000);\r\n    }\r\n    public render(): React.ReactNode {\r\n\r\n        return (\r\n        \r\n            <div ref={(ref) => this._element = ref!}  style={{ height: this.props.height + \"px\", width: this.props.width+ \"px\" }}\r\n            >\r\n                {this.props.label}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n*/\nvar React = __webpack_require__(/*! react */ \"react\");\nvar Hover = /** @class */function (_super) {\n  __extends(Hover, _super);\n  function Hover() {\n    var _this = _super !== null && _super.apply(this, arguments) || this;\n    _this._element = null;\n    return _this;\n  }\n  Hover.prototype.componentDidMount = function () {\n    var _a;\n    var targetElement = (_a = this._element) === null || _a === void 0 ? void 0 : _a.closest(\"[data-control-name=\\\"\".concat(this.props.parentContainerId, \"\\\"]\"));\n    if (targetElement) {\n      targetElement.addEventListener(\"mouseenter\", this.props.onMouseEnter);\n      targetElement.addEventListener(\"mouseleave\", this.props.onMouseLeave);\n    }\n  };\n  Hover.prototype.componentWillUnmount = function () {\n    var _a;\n    var targetElement = (_a = this._element) === null || _a === void 0 ? void 0 : _a.closest(\"[data-control-name=\\\"\".concat(this.props.parentContainerId, \"\\\"]\"));\n    if (targetElement) {\n      targetElement.removeEventListener(\"mouseenter\", this.props.onMouseEnter);\n      targetElement.removeEventListener(\"mouseleave\", this.props.onMouseLeave);\n    }\n  };\n  Hover.prototype.render = function () {\n    var _this = this;\n    var _a = this.props,\n      label = _a.label,\n      height = _a.height,\n      width = _a.width;\n    return React.createElement(\"div\", {\n      ref: function ref(_ref) {\n        return _this._element = _ref;\n      },\n      style: {\n        height: \"\".concat(height, \"px\"),\n        width: \"\".concat(width, \"px\")\n      }\n    }, label);\n  };\n  return Hover;\n}(React.Component);\nexports.Hover = Hover;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./OnHover/Hover.tsx?");

/***/ }),

/***/ "./OnHover/index.ts":
/*!**************************!*\
  !*** ./OnHover/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.OnHover = void 0;\nvar Hover_1 = __webpack_require__(/*! ./Hover */ \"./OnHover/Hover.tsx\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar OnHover = /** @class */function () {\n  function OnHover() {\n    this._isHovered = false;\n  }\n  OnHover.prototype.init = function (context, notifyOutputChanged, state) {\n    this._notifyOutputChanged = notifyOutputChanged;\n    context.mode.trackContainerResize(true);\n  };\n  OnHover.prototype.updateView = function (context) {\n    var _this = this;\n    var width = parseInt(context.mode.allocatedWidth.toString());\n    var height = parseInt(context.mode.allocatedHeight.toString());\n    var handleMouseEnter = function handleMouseEnter() {\n      _this._isHovered = true;\n      _this._notifyOutputChanged();\n    };\n    var handleMouseLeave = function handleMouseLeave() {\n      _this._isHovered = false;\n      _this._notifyOutputChanged();\n    };\n    var props = {\n      label: \"\",\n      height: height.toString(),\n      width: width.toString(),\n      parentContainerId: context.parameters.ParentContainerId.raw,\n      onMouseEnter: handleMouseEnter,\n      onMouseLeave: handleMouseLeave\n    };\n    return React.createElement(Hover_1.Hover, props);\n  };\n  OnHover.prototype.getOutputs = function () {\n    return {\n      IsHovered: this._isHovered\n    };\n  };\n  OnHover.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return OnHover;\n}();\nexports.OnHover = OnHover;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./OnHover/index.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./OnHover/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('OnHoverReactPCFAln.OnHover', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.OnHover);
} else {
	var OnHoverReactPCFAln = OnHoverReactPCFAln || {};
	OnHoverReactPCFAln.OnHover = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.OnHover;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}