"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWord = exports.keyboardAction = exports.Log = exports.SET_WORD = exports.TECLADO = exports.LOG = void 0;
var LOG = 'LOG';
exports.LOG = LOG;
var TECLADO = 'TECLADO';
exports.TECLADO = TECLADO;
var SET_WORD = 'SET_WORD';
exports.SET_WORD = SET_WORD;

var Log = function Log(attempts, hits) {
  return {
    type: LOG,
    payload: {
      attempts: attempts,
      hits: hits
    }
  };
};

exports.Log = Log;

var keyboardAction = function keyboardAction(keyAction) {
  return {
    type: TECLADO,
    payload: {
      keyAction: keyAction
    }
  };
};

exports.keyboardAction = keyboardAction;

var setWord = function setWord(index, color) {
  return {
    type: SET_WORD,
    payload: {
      index: index,
      color: color
    }
  };
};

exports.setWord = setWord;