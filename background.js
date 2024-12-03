let isActive = false;

// Listen for toggle from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleBlock") {
        isActive = request.isActive;
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: toggleSwiperBlocking,
                args: [isActive]
            });
        });
    }
    sendResponse({ status: "success" });
});

// Function to be injected into the content script
function toggleSwiperBlocking(activate) {
    if (activate) {
        window.swiperObserver = new MutationObserver(() => {
            document.querySelectorAll('.swiper-wrapper').forEach(el => el.style.display = 'none');
        });
        window.swiperObserver.observe(document.body, { childList: true, subtree: true });
    } else {
        if (window.swiperObserver) {
            window.swiperObserver.disconnect();
            delete window.swiperObserver;
        }
        document.querySelectorAll('.swiper-wrapper').forEach(el => el.style.display = '');
    }
}
