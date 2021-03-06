// Generated by CoffeeScript 1.10.0
(function() {
  var _load_dir, debug, fs, logger, path;

  debug = require('debug');

  fs = require('fs');

  path = require('path');

  logger = debug('webapp:helper:load_res');


  /*
    Load files in dir as dependencies
    Async version is harder to control, it doesn't worth
   */

  _load_dir = module.exports = function(dir) {
    var _module;
    _module = {};
    fs.readdirSync(dir).forEach(function(resource) {
      var _ext, _mod, _name, _pwd, _submodule;
      _pwd = path.join(dir, resource);
      if (fs.lstatSync(_pwd).isDirectory()) {
        logger('Loading dir %s', resource);
        _submodule = _load_dir(_pwd);
        if (Object.keys(_submodule).length) {
          return _module[resource] = _submodule;
        }
      } else {
        _ext = path.extname(resource);
        if (_ext === '.js' || _ext === '.coffee') {
          _name = path.basename(resource, _ext);
          _mod = require(_pwd.replace(_ext, ''));
          if (_mod instanceof Function) {
            logger('Loading resource %s', _name);
            return _module[_name] = _mod;
          }
        }
      }
    });
    return _module;
  };

}).call(this);