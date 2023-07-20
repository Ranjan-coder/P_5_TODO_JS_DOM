const addTaskPopup = document.getElementById("popup")
const cardcontainer = document.getElementById("cardcontainer")
const newCardName = document.getElementById("cardname")

// this line will give us parent element of input tag 
console.log(newCardName.parentNode)

// we are creating a card variable
let cardID=0

// this function for show popupbox when we click on add Task on heading
function showAddTask(){
        addTaskPopup.classList.remove("hide")
}

// this function we use for the close button on popupbox when we click on add item
function hideAddTask(){
    addTaskPopup.classList.add("hide")
}

// this function we use for the parent container of card
function addCard(){
    cardID++;
    // first we create the variable
var newCard = document.createElement("div")
var cardTitle = document.createElement("h2")
var horizantaLline = document.createElement("hr")
var itemList = document.createElement("div")
var deleteButton = document.createElement("button")
var addItem = document.createElement("button")

// after creating the variable we append that variable in first div which is our first child container div
newCard.setAttribute("id",cardID)
newCard.appendChild(cardTitle)
newCard.appendChild(horizantaLline)
newCard.appendChild(itemList)
newCard.appendChild(deleteButton)
newCard.appendChild(addItem)
cardcontainer.appendChild(newCard)

// we can use classList or setAttribute to add css property for that container
newCard.classList.add("card")


// The input we want inside the container for that we write innertext
cardTitle.innerText = newCardName.value
deleteButton.innerText = "Delete"
addItem.innerText = "+"

// deleteButton
// if we want to use function on addEventListener we can use or we will create on that addEventListener
// like below code
deleteButton.addEventListener('click',function(){
    newCard.remove()
})

// we add this function to hide poopupbox after we add child container inside parent container
hideAddTask()
}