function getInputFieldValue(id) {
    const inputField = document.getElementById(id).value;
    const inputFieldNumber = parseFloat(inputField);
    return inputFieldNumber;
}

function getTextFieldValue(id) {
    const inputField = document.getElementById(id).innerText;
    const inputFieldNumber = parseFloat(inputField);
    return inputFieldNumber;
}

function getSection(id) {
    const donation = document.getElementById('donation').classList.add('hidden'); 
    const history = document.getElementById('history').classList.add('hidden'); 

    const showSection = document.getElementById(id).classList.remove('hidden');
}