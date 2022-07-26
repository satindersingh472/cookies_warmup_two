let get_cookies = Cookies.get(`image_url`);
let box = document.getElementById(`box`);
function show_image(details){
    box[`innerHTML`] += `<a href ="index.html"> Go back to home page</a>`;
box[`innerHTML`] += `<img src="${get_cookies}"/>`;
box[`innerHTML`] += `<button id ="remove">Delete</button>`;
}

function remove_cookies(details){
    Cookies.remove(`image_url`);
    location.href = `index.html`;
}
if(get_cookies){
    show_image();

}

let remove = document.getElementById(`remove`);
remove.addEventListener(`click`,remove_cookies);