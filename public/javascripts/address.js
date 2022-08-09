

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
    tabToHide.classList.add("no-display");
    tabToShow.classList.remove("no-display");
    backButtonToHide.classList.add("no-display");
    backButtonToShow.classList.remove("no-display");
}

function backToPostcodeInput() {
    changeTab(selectAddress, postcodeInput, selectAddressBackButton, postcodeInputBackButton)
  }

findAddressButton.addEventListener("click", function () {
    changeTab(postcodeInput, selectAddress, postcodeInputBackButton, selectAddressBackButton)
});

changeButton.addEventListener("click", function () {
    backToPostcodeInput()
});

cannotFindAddressButton.addEventListener("click", function () {
    changeTab(selectAddress, manualAddressEntry, selectAddressBackButton, manualAddressBackButton);
});

selectAddressBackButton.addEventListener("click", function () {
    backToPostcodeInput()
});

manualAddressBackButton.addEventListener("click", function () {
    changeTab(manualAddressEntry, selectAddress, manualAddressBackButton, selectAddressBackButton);
});
