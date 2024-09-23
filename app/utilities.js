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

function getAccountMoney(id) {
    const inputField = document.getElementById(id).innerText;
    const inputFieldNumber = parseFloat(inputField);
    return inputFieldNumber;
}