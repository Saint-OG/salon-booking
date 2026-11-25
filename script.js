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

console.log(link);
});