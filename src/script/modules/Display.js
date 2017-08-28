function render(node, template, data) {

  var node = document.querySelector(node);

  if(!data) {

    node.appendChild(template);

    return;

  };

  data.forEach(function(elem) {

    node.appendChild(template.create(elem));

  });

};

function removeIn(/*@string*/ node, /* @string */ target) {
  var node = document.querySelector(node);
  var target = node.getElementsByTagName(target);

  for (var i = 0; i < target.length; /* no interator needed*/) {

    node.removeChild(target[i]);

  };

};

export {render, removeIn}
