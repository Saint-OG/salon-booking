const form = document.getElementById("booking-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

const salonNumber = "2347038484729"; 

const message = `Hello! I'd like to book a ${service} on ${date} at ${time}. My name is ${name}.`;

const link = "https://wa.me/" + salonNumber + "?text=" + encodeURIComponent(message);

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