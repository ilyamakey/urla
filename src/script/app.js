// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/ilyamakey/urla/contents/src/pics', true);
//
// var app = new Vue({
//   el: '#root',
//   data: {
//     pics: '',
//   },
//   methods: {
//     loadPics: function () {
//       this.pics = JSON.parse(xhr.response);
//     },
//   },
//   created: function () {
//     xhr.send();
//   },
// });
var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/pics';
var tablet = document.querySelector('.tablet');
var xhr = new XMLHttpRequest();
var data = ['Gop', 'TOP', 'Hlop'];
var template = function (obj) {
  var div = document.createElement('div');
  div.className = "tablet__slide";
  div.innerHTML = '<img src="' + obj.html_url + '"><h3>JOPEN</h3></div>';
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
// console.log(data);
xhr.send();
