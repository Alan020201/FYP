// Function to open the offer popup
function openOfferPopup() {
    const tutorPrice = parseFloat(document.getElementById("product-price").getAttribute("data-price"));
    const maxDiscount = 0.10;  // 10% discount
    const minimumOffer = tutorPrice - (tutorPrice * maxDiscount);

    // Show the minimum offer and tutor's price in the popup for user's reference
    document.getElementById("offer-amount").value = '';  // Clear any previous value
    document.getElementById("offer-popup").classList.add("active");

    alert(`Tutor's Price: NPR ${tutorPrice}\nMinimum Offer: NPR ${minimumOffer.toFixed(2)}`);
}

// Function to close the offer popup
function closeOfferPopup() {
    document.getElementById("offer-popup").classList.remove("active");
}

// Function to submit the offer
function submitOffer() {
    const offerAmount = document.getElementById("offer-amount").value;
    const tutorPrice = parseFloat(document.getElementById("product-price").getAttribute("data-price"));
    const maxDiscount = 0.10;
    const minimumOffer = tutorPrice - (tutorPrice * maxDiscount);
    let offerPrice = parseFloat(offerAmount);

    if (isNaN(offerPrice) || offerPrice <= 0) {
        alert("Please enter a valid offer amount.");
        return;
    }

    if (offerPrice > tutorPrice) {
        alert(`You cannot offer more than the set price of NPR ${tutorPrice}.`);
    } else if (offerPrice < minimumOffer) {
        alert(`Your offer is too low. The best possible offer is NPR ${minimumOffer.toFixed(2)}.`);
        document.getElementById("offer-amount").value = minimumOffer.toFixed(2); // Set the best possible offer
    } else {
        alert(`Offer of NPR ${offerPrice.toFixed(2)} sent to the tutor!`);
        revealContactInfo(); // Reveal phone number and address after offer is accepted
        closeOfferPopup();
    }
}

// Function to reveal tutor's contact info after booking or offer acceptance
function revealContactInfo() {
    document.getElementById("tutor-phone").classList.remove("hidden");
    document.getElementById("tutor-location").classList.remove("hidden");
    alert("The tutor's contact details are now available.");
}

// Function to simulate booking a session (optional based on your design)
function bookSession() {
    document.getElementById("tutor-phone").classList.remove("hidden");
    document.getElementById("tutor-location").classList.remove("hidden");
    alert("Session booked successfully! Tutor's contact details are now available.");
}

// Function to set session type dynamically (Online or Offline)
function setSessionType(sessionType) {
    const sessionElement = document.getElementById("session-type");
    sessionElement.textContent = sessionType;
}

// Example: Set session type based on dynamic data
setSessionType('Offline');  // Example: setting the session type to 'Offline'

// You can dynamically fetch the session type from your backend
const tutorSessionType = "Online"; // Fetch this dynamically from the backend
setSessionType(tutorSessionType);

// Redirect to the payment page when the "Book Session" button is clicked
function redirectToPaymentPage() {
    window.location.href = "payment-page.html";  // Replace with your actual payment page URL
}
