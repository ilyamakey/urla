import pictures from "./picturesLoader";
import Template from "../modules/Template";
import {render, removeIn} from "../modules/Display.js";

var searchForm = document.forms.searchActivities;
var searchValue = searchForm.elements.search;

var newData = [];

searchForm.addEventListener('submit', function (evt) {

  evt.preventDefault();

  if(!searchValue.value) {

  removeIn('.JS-tablet', 'div');

  render(
      '.JS-tablet',
      new Template('JS-tablet__slide'),
      pictures.data

    );

    newData = [];

    return

  };

  pictures.data.forEach(function(elem) {

    if(elem.name.search(
      new RegExp(searchValue.value, "i")
    ) != -1 && newData.indexOf(elem) == -1) {

      newData.push(elem);

    }

  });

  searchValue.value = "";

  removeIn('.JS-tablet', 'div');

  if (newData.length == 0) {

    render(

      '.JS-tablet',
      new Template().default('Sorry no activities availabe!', 'warning')

    );

    return;

  };

  render(

    '.JS-tablet',
    new Template('JS-tablet__slide'),
    newData

  );

});
