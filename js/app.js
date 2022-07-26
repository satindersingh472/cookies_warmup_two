function get_src (details){
  let cookies_value = details[`target`].getAttribute(`src`);
  Cookies.set(`image_url`, cookies_value);
  location.href = `display.html`;
}



let images = document.getElementById(`images`);
images[`innerHTML`] += `<img  id="sunset" src="images/sunset.jpg" alt ="sunset"/> 
<img  id="waterfall" src="images/waterfall.jpg" alt ="sunset"/> 
<img  id="crops" src="images/crops.jpg" alt ="sunset"/>    `  ;

let sunset = document.getElementById(`sunset`);
sunset.addEventListener(`click`, get_src);
let waterfall = document.getElementById(`waterfall`);
waterfall = document.addEventListener(`click`,get_src);
let crops = document.getElementById(`crops`);
crops.addEventListener(`click`,get_src);