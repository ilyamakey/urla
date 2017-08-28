function AjaxRequest(data) {
  this.xhr = new XMLHttpRequest();
  this.data = data; //delete
};

// AjaxRequest.prototype.clear = function(node) {
//   var node = document.querySelector(node);
//   var divs = node.getElementsByTagName('div');
//
//   for (var i = 0; i < divs.length; /* no interator needed*/) {
//     node.removeChild(divs[i]);
//   };
//
//   return this; // for chaining
//
// };
//
// AjaxRequest.prototype.render = function (node, template) {
//
//   var node = document.querySelector(node);
//
//   this.data.forEach(function(elem) {
//     node.appendChild(template.create(elem));
//   });
//
// };

AjaxRequest.prototype.load = function(url, callback) {
  var self = this;

  this.xhr.open('GET', url, true);

  this.xhr.onload = function() {

    self.data = JSON.parse(self.xhr.response);

    callback();

  }

  this.xhr.send();

};

export default AjaxRequest;
