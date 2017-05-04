/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var pics = document.getElementById('pics');

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://api.pixplorer.co.uk/image', true);
	xhr.send();

	xhr.onreadystatechange = function() {
	    if (this.readyState != 4) return;

	    // по окончании запроса доступны:
	    // status, statusText
	    // responseText, responseXML (при content-type: text/xml)

	    if (this.status != 200) {
	        // обработать ошибку
	        alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
	        return;
	    }
	};

	console.log(xhr);



/***/ }
/******/ ]);