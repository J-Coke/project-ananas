
// get divs from postcode html
// store them in variables
// write functions to hide tabs
// write css class to apply to divs

const postcodeInput = document.querySelector("#postcode-input");
const addressSelect = document.querySelector("#address-select");

const findAddressButton = document.querySelector("#find-address-button");

// function nextTab(tabToHide, tabToShow) {
//   console.log("hello");
//   tabToHide.classList.add("no-display");
//   tabToShow.classList.remove("no-display");
// }

// findAddressButton.addEventListener(
//   "click",
//   nextTab(postcodeInput, addressSelect)
// );

findAddressButton.addEventListener("click", function () {
  postcodeInput.classList.add("no-display");
  addressSelect.classList.remove("no-display");
});

const changeButton = document.querySelector("#change-postcode-button");

changeButton.addEventListener("click", function () {
  postcodeInput.classList.remove("no-display");
  addressSelect.classList.add("no-display");
});
console.log()
const addressManualEntry = document.querySelector("#address-manual-entry");
const cannotFindAddressButton = document.querySelector("#cannot-find-address");

cannotFindAddressButton.addEventListener("click", function () {
  addressManualEntry.classList.remove("no-display");
  addressSelect.classList.add("no-display");
});

// const submitAddressSelection = document.querySelector("#submit-address-selection");
// const addressSelectionError = document.querySelector("#address-selection-error");

// const select = document.getElementById('address');
// const value = select.value
// console.log(value)

// submitAddressSelection.addEventListener("click", function (event) {
//     if (value === "choose") {
//         event.preventDefault()
//         addressSelectionError.classList.remove('no-display')
//     } else {
        
//     }
//   });