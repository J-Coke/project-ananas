

const postcodeInput = document.querySelector("#postcode-input");
const selectAddress = document.querySelector("#address-select");
const manualAddressEntry = document.querySelector("#address-manual-entry");

const postcodeInputBackButton = document.querySelector("#postcode-input-back-button")
const selectAddressBackButton = document.querySelector("#select-address-back-button")
const manualAddressBackButton = document.querySelector("#manual-address-back-button")

const findAddressButton = document.querySelector("#find-address-button");
const changeButton = document.querySelector("#change-postcode-button");
const cannotFindAddressButton = document.querySelector("#cannot-find-address");


function changeTab(tabToHide, tabToShow, backButtonToHide, backButtonToShow) {
    console.log("1")
    tabToHide.classList.add("no-display");
    tabToShow.classList.remove("no-display");
    backButtonToHide.classList.add("no-display");
    backButtonToShow.classList.remove("no-display");
}

function backToPostcodeInput() {
    changeTab(selectAddress, postcodeInput, selectAddressBackButton, postcodeInputBackButton)
  }

findAddressButton.addEventListener("click", function () {
    console.log("3")
    changeTab(postcodeInput, selectAddress, postcodeInputBackButton, selectAddressBackButton)
});

changeButton.addEventListener("click", function () {
    console.log("4")
    backToPostcodeInput()
});

cannotFindAddressButton.addEventListener("click", function () {
    console.log("5")
    changeTab(selectAddress, manualAddressEntry, selectAddressBackButton, manualAddressBackButton);
});

selectAddressBackButton.addEventListener("click", function () {
    console.log("6")
    backToPostcodeInput()
});

manualAddressBackButton.addEventListener("click", function () {
    console.log("6")
    changeTab(manualAddressEntry, selectAddress, manualAddressBackButton, selectAddressBackButton);
});