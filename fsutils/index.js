let fs  = require('fs');

/**
 * 
 * @param {String} file 
 * @param {String} newFile 
 * @param {Function} cd 
 */
function reName(file, newFile, cd) {
  fs.rename(file, newFile, error => {
    error && (console.log(error));
    (typeof cd === 'function') && cd();
  })
}


module.exports = {
  reName
}