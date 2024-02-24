let nameDisplay = document.querySelector(".nameDisplay")
let nameInput = document.forms["myForm"]["name"]
let numberDisplay = document.querySelector(".numberDisplay")
let numberInput = document.forms["myForm"]["number"]
let monthDisplay = document.querySelector(".monthDisplay")
let monthInput = document.forms["myForm"]["month"]
let yearDisplay = document.querySelector(".yearDisplay")
let yearInput = document.forms["myForm"]["year"]
let cvcDisplay = document.querySelector(".cvcDisplay")
let cvcInput = document.forms["myForm"]["cvc"]
let monthArray = [];
let yearArray = [];
let cvcArray = []
let numberArray = []
let nameArray = [];

let confirm = document.querySelector("button")

nameInput.addEventListener("input", function (e) {
    // Clear the previous recorded values
    nameArray=[]
    
    // Iterate through the characters in the input and record them
    for (let i = 0; i < nameInput.value.length; i++) {
        let char = nameInput.value[i];
        nameArray.push(char.toUpperCase());
    }
    
    // Update the display with the recorded values
    nameDisplay.innerHTML = nameArray.join("");
    console.log(nameArray)
});
numberInput.addEventListener("input", function (e) {
    numberInput.value = numberInput.value.replace(/[^0-9]/g, "");
    numberInput.value = numberInput.value.replace(/(\d{4})/g, "$1 ");
    // Clear the previous recorded values
    numberArray=[]
    
    // Iterate through the characters in the input and record them
    for (let i = 0; i < 19; i++) {

        let number = numberInput.value[i];
        numberArray.push(number);
    }
    
    // Update the display with the recorded values
    numberDisplay.innerHTML = numberArray.join("");
});
monthInput.addEventListener("input", function (e) {
    monthInput.value = monthInput.value.replace(/[^0-9]/g, "");
    // Clear the previous recorded values
    monthArray=[]
    
    // Iterate through the characters in the input and record them
    for (let i = 0; i < 16; i++) {

        let month = monthInput.value[i];
        monthArray.push(month);
    }
    
    // Update the display with the recorded values
    monthDisplay.innerHTML = monthArray.join("");
});
yearInput.addEventListener("input", function (e) {
    yearInput.value = yearInput.value.replace(/[^0-9]/g, "");
    // Clear the previous recorded values
    yearArray=[]
    
    // Iterate through the characters in the input and record them
    for (let i = 0; i < 16; i++) {

        let year = yearInput.value[i];
        yearArray.push(year);
    }
    
    // Update the display with the recorded values
    yearDisplay.innerHTML = yearArray.join("");
});
cvcInput.addEventListener("input", function (e) {
    cvcInput.value = cvcInput.value.replace(/[^0-9]/g, "");
    // Clear the previous recorded values
    cvcArray=[]
    
    // Iterate through the characters in the input and record them
    for (let i = 0; i < 16; i++) {

        let cvc = cvcInput.value[i];
        cvcArray.push(cvc);
    }
    
    // Update the display with the recorded values
    cvcDisplay.innerHTML = cvcArray.join("");
});
    
