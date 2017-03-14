/**
 * @param {HTMLNode | String} content to be copied
 */

function copy(text) {
  let node = null;
  let selection = window.getSelection();
  let range = document.createRange();
  let isText = Object.prototype.toString.call(text) === '[object String]';

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
