'use strict';

module.exports = {
  storage: {
    maxFileSize: 10 * 1024 * 1024,
    getFilename: function(fileInfo) {
      var fileName = fileInfo.name.replace(/\s+/g, '-').toLowerCase();

      return 'image-' + new Date().getTime() + '-' + fileName;
    }
  }
};
