function Template(className) {
  this.className = className;
};

Template.prototype.cutString = function(str, limit) {
  if (str.length > limit) {
    var modifiedString = str.substr(0, limit) + '...';
    return modifiedString;
  }
  else return str;
};

Template.prototype.create = function(object) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  var heading = '<h3>' + this.cutString(object.name, 15) + '</h3>';

  div.className = this.className;
  img.setAttribute('src', object.html_url + '?raw=true');

  div.appendChild(img);
  div.insertAdjacentHTML('beforeEnd', heading);

  return div;

};

export default Template;
