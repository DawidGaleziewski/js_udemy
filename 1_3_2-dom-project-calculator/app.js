// Listen for submit
const form = document.getElementById('loan-form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    // Hide results
    document.getElementById('results').style.display = 'none';

    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);
    

});

// Calculate Results
function calculateResults(){
    console.log('Calculating..');
    //UI Vars
    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImonthlyPayment = document.getElementById('monthly-payment');
    const UItotalInterest = document.getElementById('total-interest');
    const UItotalPayment = document.getElementById('total-payment')

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) /100 /12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // compute monthly payments
    const x = Math.pow(1 + calculateInterest, calculatedPayments);
    const monthly = (principal * x* calculateInterest)/(x - 1);

    if(isFinite(monthly)){
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly* calculatedPayments) - principal).toFixed(2)

        //show results
        document.getElementById('results').style.display = 'block';

        //Hide loading
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers');
        //Hide loading
        document.getElementById('loading').style.display = 'none';
    }

}

// Show error
function showError(error){
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Create a div
    const errorDiv = document.createElement('div');

    errorDiv.className = "alert alert-danger";

    // Creating text node
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

//Clear error
function clearError(){
    document.querySelector('.alert').remove()
}