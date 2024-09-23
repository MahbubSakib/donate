document.getElementById('btn-noakhali').addEventListener('click', function() {
    const inputNoakhaliNumber = getInputFieldValue('input-noakhali');

    const donatedMoneyNoakhaliNumber = getTextFieldValue('donated-money-noakhali');

    let addDonatedMoneyNoakhali = inputNoakhaliNumber + donatedMoneyNoakhaliNumber;

    let accountMoneyNumber = getAccountMoney('account-money')

    
    if (inputNoakhaliNumber <= accountMoneyNumber) {
        const updatedAccountMoney = accountMoneyNumber - inputNoakhaliNumber;
        document.getElementById('account-money').innerText = updatedAccountMoney;
        document.getElementById('donated-money-noakhali').innerText = addDonatedMoneyNoakhali;
        document.getElementById('input-noakhali').value = '';
    }else {
        alert ('You do not have sufficient balance');
        document.getElementById('input-noakhali').value = '';
        return;
    }
});

document.getElementById('btn-feni').addEventListener('click', function() {
    const inputFeniNumber = getInputFieldValue('input-feni');

    const donatedMoneyFeniNumber = getTextFieldValue('donated-money-feni');

    let addDonatedMoneyFeni = inputFeniNumber + donatedMoneyFeniNumber;

    let accountMoneyNumber = getAccountMoney('account-money')

    
    if (inputFeniNumber <= accountMoneyNumber) {
        const updatedAccountMoney = accountMoneyNumber - inputFeniNumber;
        document.getElementById('account-money').innerText = updatedAccountMoney;
        document.getElementById('donated-money-feni').innerText = addDonatedMoneyFeni;
        document.getElementById('input-feni').value = '';
    }else {
        alert ('You do not have sufficient balance');
        document.getElementById('input-feni').value = '';
        return;
    }
});

document.getElementById('btn-quota').addEventListener('click', function() {
    const inputQuotaNumber = getInputFieldValue('input-quota');

    const donatedMoneyQuotaNumber = getTextFieldValue('donated-money-quota');

    let addDonatedMoneyQuota = inputQuotaNumber + donatedMoneyQuotaNumber;

    let accountMoneyNumber = getAccountMoney('account-money')

    
    if (inputQuotaNumber <= accountMoneyNumber) {
        const updatedAccountMoney = accountMoneyNumber - inputQuotaNumber;
        document.getElementById('account-money').innerText = updatedAccountMoney;
        document.getElementById('donated-money-quota').innerText = addDonatedMoneyQuota;
        document.getElementById('input-quota').value = '';
    }else {
        alert ('You do not have sufficient balance');
        document.getElementById('input-quota').value = '';
        return;
    }
});

