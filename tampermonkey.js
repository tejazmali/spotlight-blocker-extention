// ==UserScript==
// @name         Block Swiper Wrapper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide or block elements with the class .swiper-wrapper
// @author       Tejas Mali (tejazmali)
// @match        https://web.snapchat.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to block elements with .swiper-wrapper
    function blockSwiperWrapper() {
        const swiperElements = document.querySelectorAll('.swiper-wrapper');
        swiperElements.forEach(element => {
            element.style.display = 'none'; // Hide the element
        });
    }

    // Observe changes in the DOM to block dynamically loaded content
    const observer = new MutationObserver(blockSwiperWrapper);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial execution
    blockSwiperWrapper();
})();
