var btnTranslate = document.querySelector("#btn");
var inputTxt = document.querySelector("#text-input");
var outputTxt = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/minion.json";
var testServerURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong, Please try again later sometime");
}
function clickHandler() {
    //  inputTxt.value;
    fetch(getTranslationURL(inputTxt.value))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputTxt.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);