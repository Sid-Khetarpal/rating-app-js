var submit = document.getElementById("submit");

let rating;
document.addEventListener("click", function (e) {
    if (e.target.className === "number") {
        rating = e.target.value;
    }
    submit.addEventListener("click", () => {
        grid.innerHTML = `
        <div class="container-thanks">
        <div class="thanks"><img src="./images/illustration-thank-you.svg" alt="thanks"></div>
            <p class="selection">You selected ${rating} out of 5</p>
            <h3>Thank You!</h3>
        <p class="apprec">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
        </div>`;
    })
});