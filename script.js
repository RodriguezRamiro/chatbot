document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");

    window.sendMessage = function () {  // Attach to global scope
        const text = userInput.value.trim();
        if (text === "") return;

        addMessage(text, "user");
        userInput.value = "";

        setTimeout(() => {
            botReply(text);
        }, 1000);
    };

    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("messages", sender);
        messageDiv.innerHTML = text;

        const timeStamp = document.createElement("div");
        timeStamp.classList.add("timestamp");
        timeStamp.innerText = new Date().toLocaleTimeString();

        messageDiv.appendChild(timeStamp);
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botReply(userMessage) {
        const responses = {
            "hello": "Hi there! How can I assist you?",
            "how are you": "I'm just a bot, but I'm doing great! What about you?",
            "bye": "Goodbye! Have a great day!",
            "default": "I didn't understand that. Can you try again?"
        };

        let reply = responses[userMessage.toLowerCase()] || responses["default"];
        addMessage(reply, "bot");
    }

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });
});
