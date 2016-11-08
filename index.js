'use strict';
const resolve = require('path').resolve;
const sync = require('glob').sync;

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function requireFiles(path, callback) {
    sync(path)
      .map((p) => resolve(p))
      .map((p) => require(p))
      .map(callback);
};