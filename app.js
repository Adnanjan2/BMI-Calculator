

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let resultElement = document.getElementById("bmiResult");
    
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        resultElement.innerText = "Your BMI: " + bmi;
    } else {
        resultElement.innerText = "Please enter valid weight and height values.";
    }
}