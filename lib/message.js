module.exports = function message(msg) {
  var node = document.createElement('div');
  node.classList.add('message');
  node.innerHTML = msg;
  document.body.appendChild(node);
};
