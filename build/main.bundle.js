/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "end": () => (/* binding */ end)
/* harmony export */ });
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var end = localStorage.getItem('key');
console.log(end);

if (document.title === "Calendar") {
  var arry_sort = "All";
  document.getElementById("sort").addEventListener("click", function () {
    arry_sort = document.getElementById("sort").value;
    console.log(arry_sort);

    if (end != null) {
      for (var i = 0; i < end; i++) {
        var obj = JSON.parse(localStorage.getItem(i));

        if (obj != null) {
          console.log(obj.part);

          if (arry_sort === "All") {
            document.getElementById("".concat(obj.day + obj.time)).innerHTML = "<div class='activEvent'>".concat(obj.name, ". Partion:").concat(obj.part, "</div>");
            document.getElementById("".concat(obj.day + obj.time)).addEventListener('click', function (event) {
              document.querySelector(".modail").classList += " modail__act";
              document.getElementById("no").addEventListener("click", function () {
                document.querySelector(".modail").classList = "modail";
              });
            });
          } else if (arry_sort != "All") {
            console.log(obj.part.includes(arry_sort));
            document.getElementById("".concat(obj.day + obj.time)).innerHTML = "";

            if (obj.part.includes(arry_sort) === true) {
              document.getElementById("".concat(obj.day + obj.time)).innerHTML = "<div class='activEvent'>".concat(obj.name, ". Partion:").concat(obj.part, "</div>");
            }
          }
        }
      }
    }
  });
  console.log(arry_sort);

  if (end != null) {
    var _loop = function _loop(i) {
      var obj = JSON.parse(localStorage.getItem(i));

      if (obj != null) {
        console.log(obj.part);

        if (arry_sort === "All") {
          document.getElementById("".concat(obj.day + obj.time)).innerHTML = "<div class='activEvent' id='".concat(obj.keyId, "'>").concat(obj.name, ". Partion:").concat(obj.part, "</div>");
          document.getElementById("".concat(obj.day + obj.time)).addEventListener('click', function (event) {
            document.getElementById("".concat(obj.day + obj.time)).addEventListener('click', function (event) {
              document.querySelector(".modail").classList += " modail__act";
              var delDiv = event.target;
              var textSpan = event.target.innerText;
              console.log(textSpan);
              document.getElementById("text").innerText = "Are you sure you want to delete \"".concat(textSpan, "\" event?");
              document.getElementById("no").addEventListener("click", function () {
                document.querySelector(".modail").classList = "modail";
              });
              document.getElementById("yas").addEventListener('click', function () {
                delDiv.remove();
                document.querySelector(".modail").classList = "modail";
                localStorage.removeItem("".concat(delDiv.id));
                console.log(delDiv.id);
              });
            });
          });
        }
      }
    };

    for (var i = 0; i < end; i++) {
      _loop(i);
    }
  }
}

(0,_js_app__WEBPACK_IMPORTED_MODULE_0__.newPage)();
(0,_js_app__WEBPACK_IMPORTED_MODULE_0__.createNewEvent)();


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newPage": () => (/* binding */ newPage),
/* harmony export */   "createNewEvent": () => (/* binding */ createNewEvent)
/* harmony export */ });
var iName = document.getElementById('imputName');
var buttonCreate = document.getElementById('create');
var select = document.querySelector('.select');
var partId = "0";
var keyName = localStorage.getItem('key');
var name = NaN;
var dayEvent = NaN;
var timeEvent = NaN;

var nexPage = function nexPage(page) {
  document.location.href = page;
};

var newPage = function newPage() {
  if (document.title === "Calendar") {
    document.querySelector('.new_event_butt').addEventListener('click', function () {
      nexPage("./newEvent.html");
    });
  } else if (document.title === "New Event+") {
    document.querySelector('.cancel').addEventListener('click', function () {
      nexPage("./calendar.html");
    });
  }
}; //---------------------------------------------------------------------------


var createNewEvent = function createNewEvent() {
  if (document.title === "New Event+") {
    document.querySelector('.sel').addEventListener('click', function (event) {
      if (event.target.innerText === "Olga") {
        if (document.getElementById("Olga") === null) {
          select.innerHTML += "<div class='sel_div' id='Olga'>Olga<span class='left'>_</span><span class='right'>_</span> </div>";
          document.querySelector('.sel').classList = "sel";
        } else {
          document.querySelector('.sel').classList = "sel";
        }
      } else if (event.target.innerText === "Alex") {
        if (document.getElementById("Alex") === null) {
          select.innerHTML += "<div class='sel_div' id='Alex'>Alex<span class='left'>_</span><span class='right'>_</span> </div>";
          document.querySelector('.sel').classList = "sel";
        } else {
          document.querySelector('.sel').classList = "sel";
        }
      } else if (event.target.innerText === "Deni") {
        if (document.getElementById("Deni") === null) {
          select.innerHTML += "<div class='sel_div' id='Deni'>Deni<span class='left'>_</span><span class='right'>_</span> </div>";
          document.querySelector('.sel').classList = "sel";
        } else {
          document.querySelector('.sel').classList = "sel";
        }
      }
    }); //---------------------------------------------------------------------------

    document.querySelector('.select').addEventListener('mouseover', function () {
      document.querySelector('.sel').classList = "sel act";
    });
    document.querySelector('.sel').addEventListener('mouseover', function () {
      document.querySelector('.sel').classList = "sel act";
    });
    document.querySelector('.select').addEventListener('mouseout', function () {
      document.querySelector('.sel').classList = "sel";
    });
    document.querySelector('.sel').addEventListener('mouseout', function () {
      document.querySelector('.sel').classList = "sel";
    }); //---------------------------------------------------------------------------

    if (keyName === null) {
      localStorage.setItem('key', 0);
    }

    buttonCreate.addEventListener("click", function () {
      var keyId = Number(localStorage.getItem('key'));
      name = iName.value;
      timeEvent = document.getElementById('time_event').value;
      dayEvent = document.getElementById('day_week').value;
      var arry_parti = [];
      document.querySelectorAll('.sel_div').forEach(function (el) {
        console.log(el.id);
        arry_parti.push("".concat(el.id));
      });
      console.log(arry_parti);
      var object = {
        name: name,
        part: arry_parti,
        time: timeEvent,
        day: dayEvent,
        keyId: keyId
      };
      console.log(object);

      for (var i = 0; i < keyName; i++) {
        var obj = JSON.parse(localStorage.getItem(i));
        console.log(obj);

        if (object.name === '') {
          document.querySelector('.error').innerText = "Please enter event name!";
          document.querySelector('.error').classList += " error__act";
          console.log(3);
        } else if (object.part.length === 0) {
          document.querySelector('.error').innerText = "Please add participants!";
          document.querySelector('.error').classList += " error__act";
          console.log(5);
        } else if (obj === null) {
          var localObjeck = JSON.stringify(object);
          localStorage.setItem("".concat(keyId), localObjeck);
          localStorage.setItem('key', keyId + 1);
          console.log(2);
          nexPage("./calendar.html");
        } else if (object.time === obj.time && object.day === obj.day) {
          document.querySelector('.error').innerText = "Failed to create an event. Time slot is already booked.";
          document.querySelector('.error').classList += " error__act";
          console.log(1);
        } else if (object.time != obj.time || object.day != obj.day) {
          var _localObjeck = JSON.stringify(object);

          localStorage.setItem("".concat(keyId), _localObjeck);
          localStorage.setItem('key', keyId + 1);
          console.log(2);
          nexPage("./calendar.html");
        }
      }
    });
  }
};



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;