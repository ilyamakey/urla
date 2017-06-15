var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/images';
var tablet = document.querySelector('.JS-tablet');
var xhr = new XMLHttpRequest();
var data = ['Gop', 'TOP', 'Hlop'];
var template = function (obj) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  var heading = '<h3>' + cutString(obj.name) + '</h3>';

  function cutString (str) {
    if (str.length > 10) {
      var modifiedString = str.substr(0, 15) + '...';
      return modifiedString;
    }
    else return str
  };

  div.className = "JS-tablet__slide";
  img.setAttribute('src', obj.html_url + '?raw=true');

  div.appendChild(img);
  div.insertAdjacentHTML('beforeEnd', heading);

  return div;
};

xhr.open('GET', url, true);

xhr.onload = function() {
  var data = JSON.parse(xhr.response);
  data.forEach(function(elem) {
    tablet.appendChild(template(elem));
    console.log(elem);
  });
};

// xhr.send();
