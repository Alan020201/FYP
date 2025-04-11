document.getElementById("khalti-button").addEventListener("click", function () {
    const name = document.getElementById("payerName").value;
    const amount = parseInt(document.getElementById("paymentAmount").value);
  
    if (!name || isNaN(amount)) {
      alert("Please fill in your name and a valid amount.");
      return;
    }
  
    // Khalti config
    const config = {
      publicKey: "test_public_key_dc74b6f36c1a43a4a4be2d12a93fdc49", // Replace with your real one in production
      productIdentity: "PadhneYaar-TutorBooking",
      productName: "Tutor Session",
      productUrl: "https://padhneyaar.com/tutorpage.html",
      eventHandler: {
        onSuccess(payload) {
          console.log(payload);
          document.getElementById("successMessage").style.display = "block";
        },
        onError(error) {
          console.error(error);
          alert("Payment failed or canceled.");
        },
        onClose() {
          console.log("Khalti checkout closed.");
        },
      },
      paymentPreference: ["KHALTI", "MOBILE_BANKING", "EBANKING", "CONNECT_IPS"],
    };
  
    const checkout = new KhaltiCheckout(config);
    checkout.show({ amount: amount * 100 }); // Khalti expects amount in paisa
  });
  