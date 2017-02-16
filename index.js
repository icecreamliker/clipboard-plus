/**
 * @param {HTMLNode | String} content to be copied
 */

function copy(text) {
  var node = null;
  var selection = window.getSelection();
  var range = document.createRange();
  var s = Object.prototype.toString;
  var isText = s.call(text) === '[object String]' || s.call(text) === '[object Number]';

  if (isText) {
    node = document.createElement("div");
    node.textContent = text;
    node.setAttribute('style', [
      'position: absolute',
      'top: -100px',
      'width: 0',
      'height: 0'
    ].join(';'));
    document.body.appendChild(node);
  } else {
    node = text;
  }

  range.selectNode(node);
  // In case of discontiguous selection 
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('unable to copy.');
  }

  if (isText) {
    document.body.removeChild(node);
  }
  selection.removeAllRanges();
}

module.exports = copy;
