const continueEvent = document.querySelector("#continue-button");
const passwordFields = document.querySelector("#password-fields");
// const lengthErrorPasswordFields = document.querySelector(
//   "#length-error-password-fields"
// );

continueEvent.addEventListener("click", checkPassword);

let passwordMinimumLength = 8;
let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

// console.log(passwordInput);

// function showPasswordLengthError(password) {
//   if (password.length < passwordMinimumLength) {
//     console.log("nope");
//   } else {
//     console.log("ok");
//   }
// }

// function removeClass(classToHide) {
//   classToHide.classList.remove("no-display");
// }

// function addClass(classToAdd) {
//   classToAdd.classList.add("no-display");
// }

function checkPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password");
  let confirmPasswordInput = document.querySelector("#confirm-password");
  console.log(passwordInput.value.length);
  if (passwordInput.value.length < passwordMinimumLength) {
    passwordFields.innerHTML = `<div id="password-fields">
        <div class="govuk-form-group govuk-form-group--error">
          <h1 class="govuk-label-wrapper">
            <label class="govuk-label govuk-label--l" for="event-name">
              Create a password for your account
            </label>
          </h1>
          <div id="event-name-hint" class="govuk-hint">
            Password must contain 8 digits, at least one number and one special
            character
          </div>
          <p id="event-name-error" class="govuk-error-message" data-cy="event-name-error">
            <span class="govuk-visually-hidden" >Error:</span> Enter a password
            with a minimum of 8 characters
          </p>
          <input
            class="govuk-input govuk-input--width-20 govuk-input--error"
            id="event-name"
            name="event-name"
            type="text"
            data-cy="length-error-password-input"
            aria-describedby="event-name-hint event-name-error"
          />
          <br />
          <br />
          <label class="govuk-label" for="confirm-password">
            Confirm password
          </label>
          <input
            class="govuk-input govuk-input--width-20"
            id="confirm-password"
            name="confirm-password"
            type="text"
            data-cy="length-error-confirm-password-input"
          />
        </div>
      </div>`;
  } else if (!passwordInput.value.match(passwordRegex)) {
    passwordFields.innerHTML = `<div id="password-fields">
        <div class="govuk-form-group govuk-form-group--error">
          <h1 class="govuk-label-wrapper">
            <label class="govuk-label govuk-label--l" for="event-name">
              Create a password for your account
            </label>
          </h1>
          <div id="event-name-hint" class="govuk-hint">
            Password must contain 8 digits, at least one number and one special
            character
          </div>
          <p id="event-name-error" class="govuk-error-message" data-cy="event-name-error">
            <span class="govuk-visually-hidden" >Error:</span> Enter a password with
            at least one number and one special character
          </p>
          <input
            class="govuk-input govuk-input--width-20 govuk-input--error"
            id="event-name"
            name="event-name"
            type="text"
            data-cy="length-error-password-input"
            aria-describedby="event-name-hint event-name-error"
          />
          <br />
          <br />
          <label class="govuk-label" for="confirm-password">
            Confirm password
          </label>
          <input
            class="govuk-input govuk-input--width-20"
            id="confirm-password"
            name="confirm-password"
            type="text"
            data-cy="length-error-confirm-password-input"
          />
        </div>
      </div>`;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    passwordFields.innerHTML = `<div id="password-fields">
        <div class="govuk-form-group govuk-form-group--error">
          <h1 class="govuk-label-wrapper">
            <label class="govuk-label govuk-label--l" for="event-name">
              Create a password for your account
            </label>
          </h1>
          <div id="event-name-hint" class="govuk-hint">
            Password must contain 8 digits, at least one number and one special
            character
          </div>
          <p id="event-name-error" class="govuk-error-message" data-cy="event-name-error">
            <span class="govuk-visually-hidden" >Error:</span> Both passwords should match
          </p>
          <input
            class="govuk-input govuk-input--width-20 govuk-input--error"
            id="event-name"
            name="event-name"
            type="text"
            data-cy="length-error-password-input"
            aria-describedby="event-name-hint event-name-error"
          />
          <br />
          <br />
          <label class="govuk-label" for="confirm-password">
            Confirm password
          </label>
          <input
            class="govuk-input govuk-input--width-20"
            id="confirm-password"
            name="confirm-password"
            type="text"
            data-cy="length-error-confirm-password-input"
          />
        </div>
      </div>`;
  }
}
