Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach('#camera');

function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "capture_image" src = "' + data_uri + '"/>'
    });
}
