const SALON_NUMBER = "2347038484729"; 

const form = document.getElementById("booking-form");

const dateInput = document.getElementById("date");
dateInput.min = new Date().toISOString().split("T")[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value; 

const message = `Hello! I'd like to book a ${service} on ${date} at ${time}. My name is ${name}.`;

const link = "https://wa.me/" + SALON_NUMBER + "?text=" + encodeURIComponent(message);

const confirmation = document.getElementById("confirmation");
confirmation.textContent = "";

const note = document.createElement("p");
note.textContent = `Almost done, ${name}! Tap the button to confirm on WhatsApp.`;

const button = document.createElement("a");
button.href = link;
button.textContent = "Confirm on WhatsApp";
button.className = "whatsapp-button";
button.target = "_blank";

confirmation.append(note, button);
});