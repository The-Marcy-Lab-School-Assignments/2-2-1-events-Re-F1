// These are your event handlers
const clickCounterHandler = (button) => {
  let num = Number(button.target.dataset.clicks)
num += 1
// console.log(num)
button.target.dataset.clicks = num
if (num === 0) {
  button.target.textContent = "I haven't been clicked"
} else if (num === 1) {
  button.target.textContent = "I've been clicked 1 time."
} else {
  button.target.textContent = `I've been clicked ${num} times!`
}
};


const handleKeydown = (event) => {
  let changed = document.querySelector("#keydown-tracker");
  changed.textContent = `You pressed ${event.code}`
};

// QUESTION 3
const clickCounterHandler3 = (button) => {
  let num = Number(button.target.dataset.clicks)
num += 1
// console.log(num)
button.target.dataset.clicks = num
if (num === 0) {
  button.target.textContent = "I shouldn't been inline"
} else if (num === 1) {
  button.target.textContent = "I've been clicked 1 time."
} else {
  button.target.textContent = `I've been clicked ${num} times!`
}
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if(event.target.tagName === "BUTTON") { //whenever you click a button
  resultSpan.textContent = event.target.textContent; // set the text content to the corresponding text content on the button
  }
};  

// Question 5
const addNewRandomNumber = () => { // we dont need a parameter
  const unorderedL = document.getElementById("random-numbers") // accessing the id randomn num
  const newList = document.createElement("li")
  const randomNum = Math.floor(Math.random() * 100) + 1 ; // round down the random number
  newList.textContent = randomNum
  unorderedL.append(newList) 
};



// Select the elements and attach your event handlers inside main
const main = () => {
  const click = document.getElementById("click-button")
  click.addEventListener('click', clickCounterHandler)
  document.body.addEventListener("keydown", handleKeydown)
  
  const clickCounterHandlerInline = document.getElementById("inline-example")
  clickCounterHandlerInline.addEventListener('click', clickCounterHandler3)
  // addEventListener is like a callback function that access the newly made variable
  
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  // Question 5 : add list
  const addList = document.getElementById("add-random-num") //everytime we click the button "Add random number"
  addList.addEventListener('click', addNewRandomNumber)

  // Question 6 - remove the even listener (ACTION)
  const removeListenerButton = document.querySelector("#remove");
  removeListenerButton.addEventListener('click', () => {
  // To remove an event listener, provide the event type and the handler
  delegationContainer.removeEventListener('click', handleDelegation);
})
};

main();
