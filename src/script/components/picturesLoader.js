import AjaxRequest from "../source/AjaxRequest";
import {render, removeIn} from "../source/Display.js";
import Template from "../source/Template";

var pictures = new AjaxRequest();

var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/images';

pictures.load(url, function() {

    return render(

      '.JS-tablet',
      new Template('JS-tablet__slide'),
      pictures.data

    );

});

export default pictures;
