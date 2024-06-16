const q7 = () => {
const addOne = document.querySelector("#add-one") // accessing the button "add-one"
const clickCounterResult = document.getElementById("results") // accessing the id results

let countButton = Number(clickCounterResult.textContent)// accessing the 0 text content and making it a number with the number method
countButton += 1
clickCounterResult.textContent = countButton;

}

const index = () => {
    const linkListenerToQ7 = document.querySelector("#add-one")
    linkListenerToQ7.addEventListener('click', q7)
}
index();