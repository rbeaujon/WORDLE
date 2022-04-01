"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.wordleReducer = exports.getinitialState = void 0;

var _wordle = require("./wordle.actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getinitialState = function getinitialState() {
  return {
    attempts: 0,
    hits: 0,
    word: [],
    words: [],
    key: null
  };
};

exports.getinitialState = getinitialState;

var wordleReducer = function wordleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getinitialState();
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload,
      type = action.type;
  var word = state.word,
      words = state.words;

  switch (type) {
    case _wordle.LOG:
      return _objectSpread({}, state, {
        attempts: payload.attempts,
        hits: payload.hits
      });

    case _wordle.TECLADO:
      var cant = word.length;

      if (payload.keyAction === 'DEL') {
        word.pop();
        words.pop();
        var key = 'DEL';
      }

      if (payload.keyAction === 'ENTER') {
        key = 'ENTER';
      }

      if (cant <= 4 & payload.keyAction !== 'ENTER') {
        if (word.length < 30 & payload.keyAction !== 'DEL') {
          //register every letter to be check it
          var obj = {
            letter: payload.keyAction,
            color: 'fill'
          };
          cant = word.push(payload.keyAction);
          var hit = words.push(obj);
        }
      }

      return _objectSpread({}, state, {
        attempts: cant,
        key: key
      });

    case _wordle.SET_WORD:
      var index = payload.index,
          color = payload.color;
      words[index].color = color;
      return _objectSpread({}, state);

    case _wordle.NEW_LINE:
      return _objectSpread({}, state, {
        attempts: 0,
        word: [],
        key: null,
        hits: payload.hits
      });

    case _wordle.END_GAME:
      return _objectSpread({}, state, {
        attempts: 0,
        word: [],
        key: null,
        hits: 0,
        words: []
      });
    // eslint-disable-next-line no-fallthrough

    default:
      return state;
  }
};

exports.wordleReducer = wordleReducer;
var _default = wordleReducer;
exports["default"] = _default;