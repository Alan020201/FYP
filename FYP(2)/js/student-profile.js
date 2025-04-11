const profileInput = document.getElementById("profile-upload");
const profileImg = document.getElementById("profileImagePreview");
const uploadBtn = document.getElementById("uploadBtn");

if (profileInput && profileImg && uploadBtn) {
  profileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file && file.size < 1_000_000) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImg.src = e.target.result;
        uploadBtn.textContent = "Save";
        uploadBtn.style.backgroundColor = "rgb(0, 180, 100)";
      };
      reader.readAsDataURL(file);
    } else {
      alert("❌ Image must be less than 1MB.");
    }
  });

  uploadBtn.addEventListener("click", function () {
    if (uploadBtn.textContent === "Save") {
      alert("✅ Profile photo updated successfully!");
      uploadBtn.textContent = "Change";
      uploadBtn.style.backgroundColor = "rgb(255, 166, 0)";
    }
  });
}
