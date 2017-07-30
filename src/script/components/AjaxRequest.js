import Template from "./template";

function AjaxRequest() {
  this.xhr = new XMLHttpRequest();
};

AjaxRequest.prototype.render = function (node, template, data) {

  var node = document.querySelector(node);

  data.forEach(function(elem) {
    node.appendChild(template.create(elem));
  });

};

AjaxRequest.prototype.load = function(url, callback) {
  var self = this;

  this.xhr.open('GET', url, true);

  this.xhr.onload = function() {

    var data = JSON.parse(self.xhr.response);
    // console.log(self);
    callback('.JS-tablet', new Template('JS-tablet__slide'), data)

  }

  this.xhr.send();

};

export default AjaxRequest;
