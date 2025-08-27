
// Dark Mode Toggle
const toggle = document.querySelector(".mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Chatbot
const chatbot = document.getElementById("chatbot");
const toggleChat = document.querySelector(".chat-toggle");
const messages = document.getElementById("messages");

toggleChat.addEventListener("click", () => {
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  // User message
  messages.innerHTML += <div class="user">${msg}</div>;
  input.value = "";

  // Bot replies
  let reply = "";
  const text = msg.toLowerCase();

  if (text.includes("name")) reply = "My name is Manikandan M.";
  else if (text.includes("skills")) reply = "Java, MySQL, HTML, CSS, Hibernate.";
  else if (text.includes("education")) reply = "BE-CSE, Final Year at Mahendra Institute of Technology.";
  else if (text.includes("project")) reply = "Library Management System using Java & MySQL.";
  else if (text.includes("email")) reply = "<a href='mailto:manikandanmayil2004@gmail.com' target='_blank'>📧 Email Me</a>";
  else if (text.includes("whatsapp")) reply = "<a href='https://wa.me/916381988818' target='_blank'>💬 WhatsApp Me</a>";
  else if (text.includes("linkedin")) reply = "<a href='https://www.linkedin.com/in/manikandan-m-a56077339' target='_blank'>🔗 LinkedIn Profile</a>";
  else reply = "I can tell you about my name, skills, education, projects, email, WhatsApp, and LinkedIn.";

  messages.innerHTML += <div class="bot">${reply}</div>;
  messages.scrollTop = messages.scrollHeight;
}