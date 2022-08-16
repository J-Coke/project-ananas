const continueButtonClick = document.querySelector("#continue-button");
const passwordFields = document.querySelector("#password-fields");
const passwordFormGroup = document.querySelector(".password-form-group");
const confirmPasswordFormGroup = document.querySelector(
  ".confirm-password-form-group"
);

let passwordMinimumLength = 8;
let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

function addErrorClasses(
  passwordFormGroup,
  confirmPasswordFormGroup,
  passwordInput,
  confirmPasswordInput
) {
  passwordFormGroup.classList.add("govuk-form-group--error");
  confirmPasswordFormGroup.classList.add("govuk-form-group--error");
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

const errorTextSection = document.querySelector("#error");
const errorSummarySection = document.querySelector("#error-summary");

function showError(errorType) {
  addErrorClasses(
    passwordFormGroup,
    confirmPasswordFormGroup,
    passwordInput,
    confirmPasswordInput
  );
  addAriaAttribute(passwordInput, confirmPasswordInput);

  if (errorType === "length") {
    errorMessage = "Password must be 8 characters or more";
  } else if (errorType === "characters") {
    errorMessage =
      "Enter a password with at least one number and one special character";
  } else if (errorType === "unmatched") {
    errorMessage = "Both passwords should match";
  } else {
    return;
  }

  errorTextSection.innerHTML = `<p id="password-error" class="govuk-error-message" data-cy="password-error">
    <span class="govuk-visually-hidden">Error:</span> ${errorMessage}
    </p>`;

  errorSummarySection.innerHTML = `<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" data-module="govuk-error-summary" data-cy="password-error-summary">
  <h2 class="govuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="govuk-error-summary__body">
    <ul class="govuk-list govuk-error-summary__list">
      <li>
        <a href="#password">${errorMessage}</a>
      </li>
    </ul>
  </div>
</div>`;
}

const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

function checkPassword(event) {
  event.preventDefault();
  if (passwordInput.value.length < passwordMinimumLength) {
    showError("length");
  } else if (!passwordInput.value.match(passwordRegex)) {
    showError("characters");
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    showError("unmatched");
  } else {
    location.href = "/document-list";
  }
}

function checkEnterKeyPressed(event) {
  if (event.key === "Enter") {
    checkPassword(event);
  }
}

continueButtonClick.addEventListener("click", checkPassword);
passwordInput.addEventListener("keypress", checkEnterKeyPressed);
confirmPasswordInput.addEventListener("keypress", checkEnterKeyPressed);
