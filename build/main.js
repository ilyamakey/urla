/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeIn; });
function render(node, template, data) {

  var node = document.querySelector(node);

  if(!data) {

    node.appendChild(template);

    return;

  };

  data.forEach(function(elem) {

    node.appendChild(template.create(elem));

  });

};

function removeIn(/*@string*/ node, /* @string */ target) {
  var node = document.querySelector(node);
  var target = node.getElementsByTagName(target);

  for (var i = 0; i < target.length; /* no interator needed*/) {

    node.removeChild(target[i]);

  };

};




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Template(className) {
  this.className = className;
};

Template.prototype.cutString = function(str, limit) {
  if (str.length > limit) {
    var modifiedString = str.substr(0, limit) + '...';
    return modifiedString;
  }
  else return str;
};

Template.prototype.create = function(object) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  var heading = '<h3>' + this.cutString(object.name, 15) + '</h3>';

  div.className = this.className;
  img.setAttribute('src', object.html_url + '?raw=true');

  div.appendChild(img);
  div.insertAdjacentHTML('beforeEnd', heading);

  return div;

};

Template.prototype.default = function(text, className) {
  var div = document.createElement('div');
  var heading = text;

  div.className = className;
  div.insertAdjacentHTML('beforeEnd', heading);

  return div;

};

/* harmony default export */ __webpack_exports__["a"] = (Template);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_slides__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_searchActivity__ = __webpack_require__(6);




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var backgroundImages = [

  "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url('/src/pics/slide-legs-desktop.png')",
  "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url(/src/pics/slide-pc-desktop.png)",
  "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url(/src/pics/slide-car-desktop.png)"

];

/* harmony default export */ __webpack_exports__["a"] = (backgroundImages);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_AjaxRequest__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Display_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Template__ = __webpack_require__(1);




var pictures = new __WEBPACK_IMPORTED_MODULE_0__modules_AjaxRequest__["a" /* default */]();

var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/images';

pictures.load(url, function() {

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_Display_js__["b" /* render */])(

      '.JS-tablet',
      new __WEBPACK_IMPORTED_MODULE_2__modules_Template__["a" /* default */]('JS-tablet__slide'),
      pictures.data

    );

});

/* harmony default export */ __webpack_exports__["a"] = (pictures);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picturesLoader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Template__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Display_js__ = __webpack_require__(0);




var searchForm = document.forms.searchActivities;
var searchValue = searchForm.elements.search;

var newData = [];

searchForm.addEventListener('submit', function (evt) {

  evt.preventDefault();

  if(!searchValue.value) {

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_Display_js__["a" /* removeIn */])('.JS-tablet', 'div');

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_Display_js__["b" /* render */])(
      '.JS-tablet',
      new __WEBPACK_IMPORTED_MODULE_1__modules_Template__["a" /* default */]('JS-tablet__slide'),
      __WEBPACK_IMPORTED_MODULE_0__picturesLoader__["a" /* default */].data

    );

    newData = [];

    return

  };

  __WEBPACK_IMPORTED_MODULE_0__picturesLoader__["a" /* default */].data.forEach(function(elem) {

    if(elem.name.search(
      new RegExp(searchValue.value, "i")
    ) != -1 && newData.indexOf(elem) == -1) {

      newData.push(elem);

    }

  });

  searchValue.value = "";

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_Display_js__["a" /* removeIn */])('.JS-tablet', 'div');

  if (newData.length == 0) {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_Display_js__["b" /* render */])(

      '.JS-tablet',
      new __WEBPACK_IMPORTED_MODULE_1__modules_Template__["a" /* default */]().default('Sorry no activities availabe!', 'warning')

    );

    return;

  };

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modules_Display_js__["b" /* render */])(

    '.JS-tablet',
    new __WEBPACK_IMPORTED_MODULE_1__modules_Template__["a" /* default */]('JS-tablet__slide'),
    newData

  );

});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Slider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backgroundImages__ = __webpack_require__(4);



var sliderLeft = new __WEBPACK_IMPORTED_MODULE_0__modules_Slider__["a" /* default */]('.slider__slide--img1', __WEBPACK_IMPORTED_MODULE_1__backgroundImages__["a" /* default */]);

sliderLeft.loadSlide(0);

sliderLeft.slide.addEventListener("click", function (evt) {

  return sliderLeft.changeSlide(evt);

});

var sliderMiddle = new __WEBPACK_IMPORTED_MODULE_0__modules_Slider__["a" /* default */]('.slider__slide--img2', __WEBPACK_IMPORTED_MODULE_1__backgroundImages__["a" /* default */]);

sliderMiddle.loadSlide(1);

sliderMiddle.slide.addEventListener("click", function (evt) {

  return sliderMiddle.changeSlide(evt);

});

var sliderRight = new __WEBPACK_IMPORTED_MODULE_0__modules_Slider__["a" /* default */]('.slider__slide--img3', __WEBPACK_IMPORTED_MODULE_1__backgroundImages__["a" /* default */]);

sliderRight.loadSlide(2);

sliderRight.slide.addEventListener("click", function (evt) {

  return sliderRight.changeSlide(evt);

});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function AjaxRequest(data) {
  this.xhr = new XMLHttpRequest();
  this.data = data; //delete
};

AjaxRequest.prototype.load = function(url, callback) {
  var self = this;

  this.xhr.open('GET', url, true);

  this.xhr.onload = function() {

    self.data = JSON.parse(self.xhr.response);

    callback();

  }

  this.xhr.send();

};

/* harmony default export */ __webpack_exports__["a"] = (AjaxRequest);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Slider(slide, images) {
  this.slide = document.querySelector(slide);
  this.images = images;
  this.styles = getComputedStyle(this.slide);
  this.currentSlide;

};

Slider.prototype.loadSlide = function(slideNumber) {

  var defaultSlide = 0;

  if(slideNumber >= this.images.length) throw new SyntaxError("Can't load more slides than it has");

  this.slide.style.backgroundImage = this.images[slideNumber];
  this.currentSlide = slideNumber;

};

Slider.prototype.changeSlide = function (evt) {

  var side = evt.target.value;

  var self = this;

  function moveSlide(side) {

    if (!side) return;

    if (side == "left" && self.currentSlide > 0) {

      self.currentSlide--;
      self.slide.style.backgroundImage = self.images[self.currentSlide];

    } else if (side == "right" && self.currentSlide < self.images.length - 1) {

      self.currentSlide++;
      self.slide.style.backgroundImage = self.images[self.currentSlide];

    }

  };

  moveSlide(side);

};

/* harmony default export */ __webpack_exports__["a"] = (Slider);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);