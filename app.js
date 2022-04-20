const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", handleClick);
function handleClick () {
    const cardWrapper = document.querySelector(".inner-wrapper");
    const submittedCardWrapper = document.querySelector(".submitted-card-wrapper");
    console.log(cardWrapper);
    cardWrapper.style.display = "none";
    submittedCardWrapper.style.display = "block";
}

const one = document.querySelector('.one');
const test = document.querySelector('.two');
test.addEventListener('mouseleave', () => one.style.backgroundColor = "white");