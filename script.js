const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
const calculateButton = document.getElementById("calculateBtn");

calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
  resultDiv.textContent = "";
  errorDiv.textContent = "";

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    errorDiv.textContent = "Please enter a valid weight and height.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    category = "Normal weight";
  } else if (25 <= bmi && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
    errorDiv.textContent =
      "You are classified as obese. Please consult a healthcare provider.";
    return;
  }

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
