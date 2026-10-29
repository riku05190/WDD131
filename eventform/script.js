const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const dynamicField = document.querySelector("#dynamicField");
const dynamicLabel = document.querySelector("#dynamicLabel");
const dynamicInput = document.querySelector("#dynamicInput");
const errorMessage = document.querySelector("#errorMessage");
const output = document.querySelector("#output");

// Toggle dynamic field based on user type selection
function handleTypeChange() {
  const selectedType = typeSelect.value;

  if (selectedType === "Student") {
    dynamicField.hidden = false;
    dynamicLabel.textContent = "Student #";
    dynamicInput.value = "";
    dynamicInput.placeholder = "123456789";
  } else if (selectedType === "Guest") {
    dynamicField.hidden = false;
    dynamicLabel.textContent = "Access Code";
    dynamicInput.value = "";
    dynamicInput.placeholder = "EVENT131";
  } else {
    dynamicField.hidden = true;
    dynamicInput.value = "";
  }
}

// Check if chosen date is strictly later than the current date
function isPastOrToday(dateString) {
  if (!dateString) return true;
  const [year, month, day] = dateString.split("-").map(Number);
  const chosenDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return chosenDate <= today;
}

// Display error message below the form
function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add("active");
  output.innerHTML = "";
}

// Clear active error message
function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.remove("active");
}

// Event listener for type select dropdown
typeSelect.addEventListener("change", handleTypeChange);

// Handle form submission and validations
form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearError();
  output.innerHTML = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const dynamicVal = dynamicInput.value.trim();

  // Validate required basic fields
  if (!firstName) {
    displayError("Please enter your first name.");
    return;
  }

  if (!lastName) {
    displayError("Please enter your last name.");
    return;
  }

  if (!email) {
    displayError("Please enter a valid email address.");
    return;
  }

  if (!type) {
    displayError("Please select a ticket type.");
    return;
  }

  // Validate date is later than today
  if (!eventDate || isPastOrToday(eventDate)) {
    displayError("Please choose a date later than the current date.");
    return;
  }

  // Validate student # or guest access code
  if (type === "Student") {
    const isNineDigits = /^\d{9}$/.test(dynamicVal);
    if (!isNineDigits) {
      displayError("Student # must be 9 digits");
      return;
    }
  } else if (type === "Guest") {
    if (dynamicVal !== "EVENT131") {
      displayError("Access Code must be EVENT131");
      return;
    }
  }

  // Generate ticket output details
  output.innerHTML = `
    <div class="ticket-info">
      <h2>Ticket Created</h2>
      <p>${firstName} ${lastName}</p>
      <p>${type.toLowerCase()}</p>
      <p>${eventDate}</p>
    </div>
  `;

  // Reset form and reset dynamic field state
  form.reset();
  dynamicField.hidden = true;
  dynamicInput.value = "";
});
