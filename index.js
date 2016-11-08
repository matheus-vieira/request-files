'use strict';
const resolve = require('path').resolve;
const sync = require('glob').sync;

/**
 * Require files sync and execute a callback after require
 * @param {string} path the pattern to find the file(s)
 * @param {function} callback an callbck to execute for each file
 */
module.exports = (path, callback = x => x) =>
    sync(path)
      .map((p) => resolve(p))
      .map((p) => require(p))
      .map(callback)
};