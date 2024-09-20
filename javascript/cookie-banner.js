document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  // Check if cookies have been accepted
  if (localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "none";
  }

  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  declineButton.addEventListener("click", function () {
    cookieBanner.style.display = "none";
  });
});
