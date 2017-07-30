var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/images';

import AjaxRequest from "./components/AjaxRequest";


var pictures = new AjaxRequest();
pictures.load(url, pictures.render);
