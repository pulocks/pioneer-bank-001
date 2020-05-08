const submit = document.getElementById('submit-btn');
submit.addEventListener('click', () => {
    
    if(document.getElementById('email').value === '' || document.getElementById('pass').value === '') {
        const error = document.getElementById('error');
        error.style.display = 'block';
        error.style.color = 'red';
    }
    else {
        document.getElementById('login-area').style.display = 'none';
        document.getElementById('transaction-area').style.display = 'block';
    }
        
})

const deposit = document.getElementById('add-deposit');
deposit.addEventListener('click', () => {
    displayStatus('deposit-amount' ,'deposit-display', 1);
})

const withdraw = document.getElementById('add-withdraw');
withdraw.addEventListener('click', () => {
    displayStatus('withdraw-amount' ,'withdraw-display', -1);
})

function displayStatus(amountId, displayId, multiplier) {
    let pushAmount = parseFloat(document.getElementById(amountId).value);
    let displayOne = parseFloat(document.getElementById(displayId).innerText);
    let displayTotal = parseFloat(document.getElementById('balance').innerText);

    if(isNaN(pushAmount)) {
        alert('Please enter a valid number...');
    }
    else if(pushAmount > displayTotal && multiplier === -1) {
        alert('Sorry! You have not available balance...')
    }
    else{
        displayOne = displayOne + pushAmount; 
        displayTotal = displayTotal + pushAmount * multiplier;

        document.getElementById(displayId).innerText = displayOne;
        document.getElementById('balance').innerText = displayTotal;
    }

    document.getElementById(amountId).value = '';
}