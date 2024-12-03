document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");

    let isActive = false;

    toggleButton.addEventListener("click", () => {
        isActive = !isActive;
        toggleButton.textContent = isActive ? "Disable" : "Enable";

        // Send a message to the background script to toggle
        chrome.runtime.sendMessage({ action: "toggleBlock", isActive });
    });
});
