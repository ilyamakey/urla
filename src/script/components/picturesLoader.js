import AjaxRequest from "../modules/AjaxRequest";
import {render, removeIn} from "../modules/Display.js";
import Template from "../modules/Template";

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
