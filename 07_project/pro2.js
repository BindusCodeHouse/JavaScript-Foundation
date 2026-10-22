
// Get HTML elements using DOM
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
// const suggetion = document.getElementById("suggetion");

// Get BMI table rows 
    const rows = document.querySelectorAll("tbody tr td");
    for (let i = 0; i < rows.length; i++) {
        const element = rows[i];
        console.log(element.textContent);
    }

// Add click event to Calculate button
calculate.addEventListener("click", function () {

    // Get values from input fields
    const heightValue = Number(height.value);
    const weightValue = Number(weight.value);

    // Check if input fields are empty
    if (heightValue === 0 || weightValue === 0) {
        result.innerHTML = "Please enter height and weight";
        return;
    }

    // Convert height from cm to meters
    const heightInMeter = heightValue / 100;

    // Calculate BMI
    const bmi = weightValue / (heightInMeter * heightInMeter);

    // Display BMI
    result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;


});
