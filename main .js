
function startClassifing() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4pGVFSwi8/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}