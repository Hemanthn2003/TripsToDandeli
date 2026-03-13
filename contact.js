/* global document, window */

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ownerPhone = "918431360309"; // ✅ Change to your WhatsApp number

    const name = document.getElementById("name").value;
    const members = document.getElementById("members").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const phone = document.getElementById("phone").value;

    // ✅ Plain text (no line breaks for better reliability)
    const text =
      "New Booking Request | " +
      "Name: " + name + " | " +
      "Members: " + members + " | " +
      "Check-in: " + checkin + " | " +
      "Check-out: " + checkout + " | " +
      "Phone: " + phone;

    // ✅ Perfectly encoded link
    const waLink = "https://api.whatsapp.com/send?phone=" + ownerPhone + "&text=" + encodeURIComponent(text);

    window.location.href = waLink;
  });

});
