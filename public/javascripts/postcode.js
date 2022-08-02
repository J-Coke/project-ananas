const postcodeInput = document.querySelector("#postcode-input")
const addressSelect = document.querySelector("#address-select")
const addressManualEntry = document.querySelector("#address-manual-entry")
const findAddressButton = document.querySelector("#find-address-button")

console.log(postcodeInput)
console.log(findAddressButton)

const nextTab = (tabToHide, tabToShow) => {
    console.log("hello")
    // tabToHide.classList.add("no-display");
    tabToShow.classList.remove("no-display");
}

findAddressButton.addEventListener("click", nextTab(postcodeInput, addressSelect));

// get divs from postcode html
// store them in variables
// write functions to hide tabs
// write css class to apply to divs