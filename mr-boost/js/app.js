(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const navMemesItem = document.querySelector(".memes-item");
    const linkAbout = document.querySelector(".link-about");
    const linkHowtobuy = document.querySelector(".link-howtobuy");
    const linkMemeswall = document.querySelector(".link-memeswall");
    window.addEventListener("load", (() => {
        if (window.screen.width < 769) navMemesItem.textContent = "memes";
    }));
    window.addEventListener("resize", (() => {
        if (window.screen.width < 769) navMemesItem.textContent = "memes"; else navMemesItem.textContent = "wall of memes";
    }));
    function scrollToElement(elementId) {
        var element = document.getElementById(elementId);
        if (element) element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    linkAbout.addEventListener("click", (() => {
        scrollToElement("about");
    }));
    linkHowtobuy.addEventListener("click", (() => {
        scrollToElement("howtobuy");
    }));
    linkMemeswall.addEventListener("click", (() => {
        scrollToElement("memeswall");
    }));
    window["FLS"] = true;
    isWebp();
})();