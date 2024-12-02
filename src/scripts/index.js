// globals
form = document.getElementById("bmi-form");
metric = document.getElementById("metric");
metricContainer = document.getElementById("metric-inputs");
impreialContainer = document.getElementById("impreial-inputs");


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
    
    // Hide the unchecked unit inputs
    if(metric.checked){ 
        metricContainer.classList.remove("hide");
        impreialContainer.classList.add("hide");
    }else{
        metricContainer.classList.add("hide");
        impreialContainer.classList.remove("hide");
    } 
    
    // Calculate the BMI based in the unit checked
    if(metric.checked && heightCS.value != 0 && weightKG.value != 0){
        bmiValue = weightKG.value/heightCS.value/heightCS.value * 10000;
    }else{
        height = (heightFT.value * 12) + (heightIN.value*1);
        weight = (weightST.value * 14) + (weightLBS.value*1);
        bmiValue = weight/(height*height)*703;
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

    if(metric.checked){
        bmiTxt = `Your BMI suggests you’re a ${bmiResult}. Your ideal weight is between <b> ${(heightCS.value*heightCS.value/10000*18.5).toFixed(1)} kg - ${(heightCS.value*heightCS.value/10000*24.9).toFixed(1)} kg. </b>`
    }else{
        stValueMin = ((18.5/703*height*height)/14).toFixed(0);
        lbsValueMin = ((18.5/703*height*height)/14).toString().split(".")[1].slice(0,2);

        stValueMax = ((24.9/703*height*height)/14).toFixed(0);
        lbsValueMax = ((24.9/703*height*height)/14).toString().split(".")[1].slice(0,2);
        
        bmiTxt = `Your BMI suggests you’re a ${bmiResult}. Your ideal weight is between <b> ${stValueMin}st ${lbsValueMin}lbs - ${stValueMax}st ${lbsValueMax}lbs. </b>`
    }

    bmiResultParent.innerHTML = `
    <div class="d-flex-col p-2">
          <h6>${bmiHeading}</h6>
          <div class="flex-row-container" id="bmi-result-container">
            <p id="bmi-result">${bmiValue? bmiValue.toFixed(1): 0.0}</p>
            <p id="bmi-suggestion" style="color: white;">${bmiTxt}</p>
          </div>
        </div>`;


});