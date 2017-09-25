function AjaxRequest(data) {
  this.xhr = new XMLHttpRequest();
  this.data = data; //delete
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
