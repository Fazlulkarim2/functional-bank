/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
console.log(first, second);
 */
function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field 
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // get and update  deposit total
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// handle deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposite button clicked');
    /* 
        const depositInput = document.getElementById('deposit-input');
        const depositAmountText = depositInput.value;
        const depositAmount = parseFloat(depositAmountText) */
    // console.log(depositAmount);
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

    // get and update  deposit total
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotal = parseFloat(depositTotalText);
     depositTotal.innerText = previousDepositTotal + depositAmount; */
    // console.log(depositTotalText);
    // updateTotalField('deposit-total', depositAmount);

    // update balance 
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    // clear input field 
    // depositInput.value = '';

    // updateBalance(depositAmount, true);
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdrw button clicked')
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrwAmountText = withdrawInput.value;
    // console.log(withdrwAmountText);
    // const withdrawAmount = parseFloat(withdrwAmountText);
    // console.log(withdrawAmount);

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
    //get update withdraw total

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotaltext = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotaltext);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // updateTotalField('withdraw-total', withdrawAmount)

    // update balance after withdraw 
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    // updateBalance(withdrawAmount, false);

    // clear withdraw field 
    // withdrawInput.value = '';
});