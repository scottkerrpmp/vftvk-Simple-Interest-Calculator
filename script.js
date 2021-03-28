 function compute()
    {   
    // 2. Create a variable called 'principal' and assign to it the value of the input element "principal"
    var principal = document.getElementById("principal").value;
    // 3. Create a variable called rate and assign to it the value of the input element "rate"
    var rate = document.getElementById("rate").value;
    // 4. Create a variable called years and assign to it the value of the input element "years"
    var years = document.getElementById("years").value;
    
    // 15. Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"
    if(principal <= 0){
        alert("Enter a positive number");
        // 16. Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box.
        principal.focus();
        return false;
    }

    // 5. Create a variable called interest and assign to it the value of principal * years * rate / 100
    var interest = principal * years * rate / 100;
    
    // 6. Write the logic to convert the 'No of Years' into the actual year in the future.
    // Get current year
    var future = new Date().getFullYear();
    // Add No. of Years to current year (converting years to a number)
    var futureyears = future + Number(years);
    
    // 10. Includes Get the reference to the element named 'result'
    // 11. When "Compute Interest" is clicked, set its inner html property to the below text
    // 14 Make sure the numbers in the result are highlighted. (<mark></mark>)
    var resulttext = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark>.<br> You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + futureyears + "</mark>";
    document.getElementById("result").innerHTML = resulttext;
}
    // 7. Write a function that reads the value of the range slider and displays it the <span>adjacent to the slider.
    function sliderchange() {
        var xrate = document.getElementById("rate").value;
        sliderrate.innerHTML = xrate + " %";
    } 
