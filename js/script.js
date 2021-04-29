// invite button
const addGuestButton = document.querySelector(".invite");
const guestInputLabel = document.querySelector(".add-guest label");
const guestInput = document.querySelector(".add-guest input");
const guestList = document.querySelector(".guest-list");
const guestCount = document.querySelector(".attendance");
const guestFull = document.querySelector(".alert");
//Select Assigned Items & Build an Array
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

//exercise#1
//Add an Event Listener & Create an Element
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

//exercise#2
//clear the input box
const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//exercise#3
//limit the guest list
const updateGuestCount = function () {
  const guest = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guest.length;

  if (guest.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "fruit",
    "drinks",
    "cake",
    "salad",
    "chicken",
    "cheese",
    "macaroni",
    "cheesecake",
    "rice"
  ];

  //Select Elements & Loop Through the Array
  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

//Add an Event Listener & Update PotluckItems Array
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
