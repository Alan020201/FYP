const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const fileInput = document.getElementById("fileInput");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (message) {
    addMessage("sent", message);
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(() => {
      addMessage("received", "Got your message!");
    }, 800);
  }
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const fileLink = document.createElement("a");
    fileLink.href = URL.createObjectURL(file);
    fileLink.textContent = file.name;
    fileLink.target = "_blank";
    const msg = document.createElement("div");
    msg.classList.add("message", "sent", "file");
    msg.appendChild(fileLink);
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

function addMessage(type, text) {
  const message = document.createElement("div");
  message.classList.add("message", type);
  message.textContent = text;
  chatBox.appendChild(message);
}
