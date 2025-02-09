document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sendButton").addEventListener("click", sendMessage);
    document.getElementById("userInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;
    let chatBox = document.getElementById("chatBox");
    
    let userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = "Você: " + userInput;
    chatBox.appendChild(userMessage);
    
    let botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.innerText = "🤖: Richard Gay";
    chatBox.appendChild(botMessage);
    
    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
