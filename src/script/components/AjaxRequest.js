function AjaxRequest() {
  this.xhr = new XMLHttpRequest();
};

AjaxRequest.prototype.render = function (node, template) {

  var node = document.querySelector(node);

  this.data.forEach(function(elem) {
    node.appendChild(template.create(elem));
  });

};

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
