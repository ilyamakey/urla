var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/images';

import AjaxRequest from "./components/AjaxRequest";
import Template from "./components/Template";
import slides from "./slides";

var pictures = new AjaxRequest();

pictures.load(url, function() {

    return pictures.render(

      '.JS-tablet',
      new Template('JS-tablet__slide')

    );

});

var but = document.getElementById('but');
var newData = [];

function getInputData(field) {
  var input = document.getElementById(field);

  return input.value;
};

// console.log(!getInputData('input'));

but.addEventListener('click', function() {

  // if(!getInputData('input')) return;

  pictures.data.forEach(function(elem) {

    if(elem.name.search(
      new RegExp(getInputData('input'), "i")
    ) != -1) {

      console.log(elem.name);
      newData.push(elem);

    }

  });

  pictures.data = newData;

  pictures.clear('.JS-tablet').render(
    '.JS-tablet',
    new Template('JS-tablet__slide')
  );



});
