// variable to store all rating numbers
const rating = document.querySelectorAll('.rating');
// console.log(rating); 

// iterate over each rating element and assign an event listerner when clicked, run the function 
rating.forEach((number) =>
number.addEventListener("click", handleClick)
);

/*
we need to record which rating number was clicked first. Use let variable as this will be constantly reassigned. note that the variable has no starting value, but we dynamically assign it below when lastClicked == this ()
*/
let firstClicked;

function handleClick() {
    firstClicked = this;
// console.log(firstClicked);
this.style.backgroundColor = "orange";
}

const someDomStuff = `<div><h1>I'm a div- put the rating out of 5 here with template literal dollar and curly brackets</h1></div>`;

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", handleSubmit);
function handleSubmit () {
    const cardWrapper = document.querySelector(".inner-wrapper");
    const submittedCardWrapper = document.querySelector(".submitted-card-wrapper");
    let testelement = document.getElementById('test');
    console.log(cardWrapper);
    cardWrapper.style.display = "none";
    submittedCardWrapper.style.display = "block";
    submittedCardWrapper.innerHTML += someDomStuff;
}
