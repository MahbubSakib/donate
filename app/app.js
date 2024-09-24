const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history');

btnHistory.addEventListener('click', function() {
    btnHistory.classList.add('bg-primary-btn', 'text-primary-text');
    btnHistory.classList.remove('text-secondary-text', 'border', 'border-gray-300', 'bg-white');
    
    btnDonation.classList.remove('bg-primary-btn', 'text-primary-text');
    btnDonation.classList.add('border', 'border-solid', 'border-gray-300', 'text-secondary-text', 'bg-white');
});

btnDonation.addEventListener('click', function() {
    btnDonation.classList.add('bg-primary-btn', 'text-primary-text');
    btnDonation.classList.remove('text-secondary-text', 'border', 'border-gray-300', 'bg-white');
    
    btnHistory.classList.remove('bg-primary-btn', 'text-primary-text');
    btnHistory.classList.add('border', 'border-solid', 'border-gray-300', 'text-secondary-text', 'bg-white');
});

window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    
    if (window.scrollY > 10) {
        header.classList.add('bg-opacity-75', 'backdrop-blur-md');
    } else {
        header.classList.remove('bg-opacity-75', 'backdrop-blur-md');
    }
});

const closeModal = document.getElementById('close');

document.getElementById('btn-noakhali').addEventListener('click', function () {
    const inputNoakhaliNumber = getInputFieldValue('input-noakhali');

    const donatedMoneyNoakhaliNumber = getTextFieldValue('donated-money-noakhali');

    let addDonatedMoneyNoakhali = inputNoakhaliNumber + donatedMoneyNoakhaliNumber;

    let accountMoneyNumber = getTextFieldValue('account-money');

    if (isNaN(inputNoakhaliNumber)) {
        alert('Please insert a number.');
        return;
    }


    if (inputNoakhaliNumber <= accountMoneyNumber) {
        const updatedAccountMoney = accountMoneyNumber - inputNoakhaliNumber;
        document.getElementById('account-money').innerText = updatedAccountMoney;
        document.getElementById('donated-money-noakhali').innerText = addDonatedMoneyNoakhali;
        document.getElementById('input-noakhali').value = '';

        // append to history
        const div = document.createElement('div');
        div.classList.add('w-10/12', 'mx-auto', 'mt-5', 'border-solid', 'border', 'border-gray-300', 'rounded-xl', 'px-3', 'py-6');

        const date = new Date();
        div.innerHTML = `
            <h6 class="text-lg font-bold text-black">${inputNoakhaliNumber} Taka is Donated for Flood Relief in Noakhali, Bangladesh</h6>
            <p class="text-sm text-gray-700">Date: ${date}</p>
        `;

        document.getElementById('history').appendChild(div);

        // modal
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        closeModal.addEventListener('click', function() {
            modal.classList.add("hidden");
        });
    } else {
        alert('You do not have sufficient balance');
        document.getElementById('input-noakhali').value = '';
        return;
    }
});

document.getElementById('btn-feni').addEventListener('click', function () {
    const inputFeniNumber = getInputFieldValue('input-feni');

    const donatedMoneyFeniNumber = getTextFieldValue('donated-money-feni');

    let addDonatedMoneyFeni = inputFeniNumber + donatedMoneyFeniNumber;

    let accountMoneyNumber = getTextFieldValue('account-money');

    if (isNaN(inputFeniNumber)) {
        alert('Please insert a number.');
        return;
    }

    if (inputFeniNumber <= accountMoneyNumber) {
        const updatedAccountMoney = accountMoneyNumber - inputFeniNumber;
        document.getElementById('account-money').innerText = updatedAccountMoney;
        document.getElementById('donated-money-feni').innerText = addDonatedMoneyFeni;
        document.getElementById('input-feni').value = '';

        // append to history
        const div = document.createElement('div');
        div.classList.add('w-10/12', 'mx-auto', 'mt-5', 'border-solid', 'border', 'border-gray-300', 'rounded-xl', 'px-3', 'py-6');

        const date = new Date();
        div.innerHTML = `
            <h6 class="text-lg font-bold text-black">${inputFeniNumber} Taka is Donated for Flood Relief in Feni, Bangladesh</h6>
            <p class="text-sm text-gray-700">Date: ${date}</p>
        `;

        document.getElementById('history').appendChild(div);

        // modal
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        closeModal.addEventListener('click', function() {
            modal.classList.add("hidden");
        });
    } else {
        alert('You do not have sufficient balance');
        document.getElementById('input-feni').value = '';
        return;
    }
});

document.getElementById('btn-quota').addEventListener('click', function () {
    const inputQuotaNumber = getInputFieldValue('input-quota');

    const donatedMoneyQuotaNumber = getTextFieldValue('donated-money-quota');

    let addDonatedMoneyQuota = inputQuotaNumber + donatedMoneyQuotaNumber;

    let accountMoneyNumber = getTextFieldValue('account-money');

    if (isNaN(inputQuotaNumber)) {
        alert('Please insert a number.');
        inputQuotaNumber = '';
        return;
    }

    if (inputQuotaNumber <= accountMoneyNumber) {
        const updatedAccountMoney = accountMoneyNumber - inputQuotaNumber;
        document.getElementById('account-money').innerText = updatedAccountMoney;
        document.getElementById('donated-money-quota').innerText = addDonatedMoneyQuota;
        document.getElementById('input-quota').value = '';

        // append to history
        const div = document.createElement('div');
        div.classList.add('w-10/12', 'mx-auto', 'mt-5', 'border-solid', 'border', 'border-gray-300', 'rounded-xl', 'px-3', 'py-6');

        const date = new Date();
        div.innerHTML = `
            <h6 class="text-lg font-bold text-black">${inputQuotaNumber} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h6>
            <p class="text-sm text-gray-700">Date: ${date}</p>
        `;

        document.getElementById('history').appendChild(div);

        // modal
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        closeModal.addEventListener('click', function() {
            modal.classList.add("hidden");
        });
    } else {
        alert('You do not have sufficient balance');
        document.getElementById('input-quota').value = '';
        return;
    }
});

document.getElementById('btn-donation').addEventListener('click', function () {
    getSection('donation');
})


document.getElementById('btn-history').addEventListener('click', function () {
    getSection('history');
})

