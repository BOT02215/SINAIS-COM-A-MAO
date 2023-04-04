classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6lV7qtwkM/model.json", ModelLoaded)

function ModelLoaded() {
    console.log("Model Loaded")
}

Webcam.set({
    width: 350,
    height: 250,
    imageFormat: "png",
    pngQuality: 100
})

Webcam.attach("#camera")

function tira_fruta() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Foto").innerHTML = "<img id='capturedImage' src='" + data_uri + "'>"
    })
}