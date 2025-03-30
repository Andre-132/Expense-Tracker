const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function displayExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.description} - $${expense.amount}
        <button onclick="deleteExpense(${index})">X</button>`;
        expenseList.appendChild(li);
    });
}

function addExpense() {
    const description = descriptionInput.value.trim();
    const amount = amountInput.value.trim();

    if (description === '' || amount === '') {
        alert('Please enter both fields.');
        return;
}

expenses.push({ description, amount});
localStorage.setItem('expenses', JSON.stringify(expenses));
displayExpenses();
descriptionInput.value = '';
amountInput.value = '';
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}
displayExpenses();