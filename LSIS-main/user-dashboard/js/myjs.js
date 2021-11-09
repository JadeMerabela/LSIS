var currentTab = 0; //current tab is set to be the first tab tab (0)

showTab (currentTab)

function showTab(n){
 //this function will display the specified tab of the form
    var x = document.getElementsByClassName('tab');
    x[n].style.display = 'block';
    //..and fix the previous/next buttons
    if (n == 0) {
        document.getElementById('prevBtn').style.display = 'none';
    } else {
        document.getElementById('prevBtn').style.display = 'block';
    }

    if (n == (x.length - 1)) {
        document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Next';
    }

    //and run a function that will display the correct step indicator
    fixStepIndicator(n);
}

function nextPrev(n) {
    //this function will figure out which tab to display
    var x = document.getElementsByClassName('tab');
    //exit the function if any field in the current tab is invalid
    if (n == 1 && !validateForm()) return false;
    //hide the current tab
    x[currentTab].style.display = 'none';
    //increase or decrease the current tab by 1
    currentTab = currentTab + n;
    //if you have reached the end of the form
    if (currentTab >= x.length) {
        //the form gets submitted
        document.getElementById('regForm'.submit());
        return false;
    }

    //otherwise, display the correct tab
    showTab(currentTab)
}

function validateForm() {
    //this function this with the validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName('tab');
    y = x[currentTab].getElementsByTagName('input');
    //a loop that checks every input field in the current tab
    for (var i = 0; i < y.length; i++) {
        //if a field is empty
        if (y[i].value == '') {
            //add an 'invalid' class to the field
            y[i].className += 'invalid';
            //and set the current valid status to false
            valid = false;
        }
    }
    //if the status is true, mark the step as finished
    if (valid) {
        document.getElementsByClassName('step')[currentTab].className += ' finish';
    }
    return valid; //return the valid status
}

function fixStepIndicator(n) {
    //this function remove the "active" class of all steps
    var i, x = document.getElementsByClassName('step');
    for (i = 0; i < x.length; i++){
        x[i].className = x[i].className.replace(" active", "");
    }
    //and adds the active class on the current step
    x[n].className += ' active';
}