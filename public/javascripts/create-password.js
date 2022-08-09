const continueEvent = document.querySelector("#continue-button");
const passwordFields = document.querySelector("#password-fields");
const formGroup = document.querySelector(".govuk-form-group");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const errorTextSection = document.querySelector("#error");

continueEvent.addEventListener("click", checkPassword);

let passwordMinimumLength = 8;
let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

function addErrorClasses(formGroup, passwordInput, confirmPasswordInput) {
  formGroup.classList.add("govuk-form-group--error");
  passwordInput.classList.add("govuk-input--error");
  confirmPasswordInput.classList.add("govuk-input--error");
}

function addAriaAttribute(passwordInput, confirmPasswordInput) {
  passwordInput.setAttribute(
    "aria-describedby",
    "password-hint password-error"
  );
  confirmPasswordInput.setAttribute(
    "aria-describedby",
    "password-hint password-error"
  );
}

function showError(errorType) {
  addErrorClasses(formGroup, passwordInput, confirmPasswordInput);
  addAriaAttribute(passwordInput, confirmPasswordInput);

  if (errorType === "length") {
    errorMessage = "Enter a password with a minimum of 8 characters";
  } else if (errorType === "characters") {
    errorMessage =
      "Enter a password with at least one number and one special character";
  } else if (errorType === "unmatched") {
    errorMessage = "Both passwords should match";
  } else {
    return;
  }

  errorTextSection.outerHTML = `<p id="password-error" class="govuk-error-message" data-cy="password-error">
    <span class="govuk-visually-hidden">Error:</span> ${errorMessage}
    </p>`;
}

function checkPassword(event) {
  event.preventDefault();
  if (passwordInput.value.length < passwordMinimumLength) {
    showError("length");
  } else if (!passwordInput.value.match(passwordRegex)) {
    showError("characters");
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    showError("unmatched");
  } else {
    location.href = "#";
  }
}
