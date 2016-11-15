/**
 * @param {HTMLNode | String} content to be copied
 */

function copy(node) {
  let range = document.createRange();
  range.selectNode(node);
  window.getSelection().addRange(range);
  try {
    var successful = document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  window.getSelection().removeAllRanges();
}
