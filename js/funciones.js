var slider_content = document.getElementById('imagen');

var image = ["slider-1", "slider-2", "slider-3", "slider-4", "slider-5", "slider-6", "slider-7", "slider-8"];

var i = image.length;

function nextImage() {
    if (i < image.length) {
        i = i + 1;
        if (i == image.length) {
            i = 0;
        }
    } else {
        i = 0;
    }
    slider_content.innerHTML = "<img src=img/" + image[i] + ".jpg>";
}

function beforeImage() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    slider_content.innerHTML = "<img src=img/" + image[i - 1] + ".jpg>";
}