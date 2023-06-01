const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const currentPopup = document.getElementById(popupName);
            closeBurggerMenu();
            popupOpen(currentPopup, popupLink.dataset.closeClass);
            e.preventDefault;
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup, classLock) {
    if (curentPopup && unlock) {

        const popupActive = document.querySelector(".popup.open");
        if (popupActive) {
            popupClose(popupActive, false);
        } else {

            bodyLock(classLock || 'scroll');
            // debugger;
        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__content")) {
                popupClose(e.target.closest(".popup"));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove("open");
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock(classLock) {
    const lockPaddingValue =
        window.innerWidth - document.querySelector(".header__popup") + "px";
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add(classLock);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "px";
        }
        body.style.paddingRight = "px";
        body.classList.remove("_lock");
        body.classList.remove("scroll");
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
// body.classList.add("scroll");
// body.classList.remove("scroll");
document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
    }
});