'use strict';

const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;
const mkdirpSync = require('mkdirp').sync;

exports.path = {
  dirname: path.dirname,
  basename: path.basename,
  extname: path.extname,
  normalize: path.normalize,
  relative: path.relative,
  resolve: path.resolve,
  join: path.join,
  isAbsolute: path.isAbsolute,
  sep: path.sep
};
exports.fs = {
  readFileSync: (file) => fs.readFileSync(file),
  writeFileSync: (file, contents) => fs.writeFileSync(file, contents),
  existsSync: (file) => fs.existsSync(file),
  realpathSync: (file) => fs.realpathSync(file),
  mkdirpSync: mkdirpSync,
  readdirSync: fs.readdirSync
};

// NOTE: uses `cwd` option
exports.execSync = execSync;

exports.process = {
  env: process.env,
  cwd: () => process.cwd(),
  platform: process.platform,
  arch: process.arch,
  exit: (code) => process.exit(code)
};

exports.log = function log(message) {
  process.stdout.write(message + '\n');
};

exports.error = function error(message) {
  process.stderr.write(message + '\n');
};

Object.defineProperty(exports, 'win', {
  get: function get() {
    // ====== a late require ========
    const getter = require('windows-autoconf');
    // We just need all the binding to be set on `exports`
    getter.setBindings(exports);
    return {
      getMSVSVersion: getter.getMSVSVersion,
      getOSBits: getter.getOSBits,
      resolveDevEnvironment: getter.resolveDevEnvironment
    };
  }
});
