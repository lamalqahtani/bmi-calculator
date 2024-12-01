// globals
form = document.getElementById("bmi-form");
metric = document.getElementById("metric");

heightCS = document.getElementById("height");
weightKG = document.getElementById("weight");

heightFT = document.getElementById("height-ft");
heightIN = document.getElementById("height-in");
weightST = document.getElementById("weight-st");
weightLBS = document.getElementById("weight-lbs");

bmiResultParent = document.getElementById("bmi-result-container");

bmiHeading = "Your BMI is...";
bmiValue = 0;
bmiResult = "";

// Form event listener
form.addEventListener("change", (e)=>{
    if(metric.checked && heightCS.value != 0 && weightKG.value != 0){
        bmiValue = weightKG.value/heightCS.value/heightCS.value * 10000;
    }


    if(bmiValue < 18.5){
        bmiResult = "underweigh"
    }else if(bmiValue <= 24.9 ){
        bmiResult = "healthy weight"
    }else if(bmiValue <= 29.9){
        bmiResult = "overweight"
    }else{
        bmiResult = "obese"
    }

    bmiTxt = `Your BMI suggests you’re a ${bmiResult}. Your ideal weight is between <b> ${(heightCS.value*heightCS.value/10000*18.5).toFixed(1)} - ${(heightCS.value*heightCS.value/10000*24.9).toFixed(1)}. </b>`

    bmiResultParent.innerHTML = `
    <div class="d-flex-col p-2">
          <h6>${bmiHeading}</h6>
          <div class="flex-row-container" id="bmi-result-container">
            <p id="bmi-result">${bmiValue? bmiValue.toFixed(1): 0.0}</p>
            <p id="bmi-suggestion" style="color: white;">${bmiTxt}</p>
          </div>
        </div>`;


});