const textInput = document.querySelector("#text-input")
const transalateButton = document.querySelector("#btn-translate")
const outputDiv = document.querySelector("#text-output")

transalateButton.addEventListener('click', getTranslation)

// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
let serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getServerURL(text) {
    return serverURL + "?text=" + text
}

function getTranslation(){
    let inputText = textInput.value

    fetch(getServerURL(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerHTML = json.contents.translated)
    .catch(errorHandler)
}

function errorHandler(){
    outputDiv.innerText = "Opps, looks like you reach your limit. Try again later"
    outputDiv.style.fontWeight = "bold"
}