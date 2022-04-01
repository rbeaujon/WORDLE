"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endGame = exports.newLine = exports.setWord = exports.keyboardAction = exports.Log = exports.END_GAME = exports.NEW_LINE = exports.SET_WORD = exports.TECLADO = exports.LOG = void 0;
var LOG = 'LOG';
exports.LOG = LOG;
var TECLADO = 'TECLADO';
exports.TECLADO = TECLADO;
var SET_WORD = 'SET_WORD';
exports.SET_WORD = SET_WORD;
var NEW_LINE = 'NEW_LINE';
exports.NEW_LINE = NEW_LINE;
var END_GAME = 'END_GAME';
exports.END_GAME = END_GAME;

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

var newLine = function newLine(hits) {
  return {
    type: NEW_LINE,
    payload: {
      hits: hits
    }
  };
};

exports.newLine = newLine;

var endGame = function endGame() {
  return {
    type: END_GAME,
    payload: {}
  };
};

exports.endGame = endGame;