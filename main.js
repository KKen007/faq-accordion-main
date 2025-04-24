const minus_2 = document.querySelector(".minus-2");
const answers_2 = document.querySelector(".answer-2");

const minus_3 = document.querySelector(".minus-3");
const answers_3 = document.querySelector(".answer-3");

const minus_4 = document.querySelector(".minus-4");
const answers_4 = document.querySelector(".answer-4");

minus_2.addEventListener("click", () => {
    if (answers_2.getAttribute("class") === "answer-2") {
        answers_2.setAttribute("class", "answer-after-click");
        minus_2.setAttribute("src", "assets/images/icon-minus.svg");
    }

    else {
        answers_2.setAttribute("class", "answer-2");
        minus_2.setAttribute("src", "assets/images/icon-plus.svg");
    }
});

minus_3.addEventListener("click", () => {
    if (answers_3.getAttribute("class") === "answer-3") {
        answers_3.setAttribute("class", "answer-after-click");
        minus_3.setAttribute("src", "assets/images/icon-minus.svg");
    }

    else {
        answers_3.setAttribute("class", "answer-3");
        minus_3.setAttribute("src", "assets/images/icon-plus.svg");
    }
});

minus_4.addEventListener("click", () => {
    if (answers_4.getAttribute("class") === "answer-4") {
        answers_4.setAttribute("class", "answer-after-click");
        minus_4.setAttribute("src", "assets/images/icon-minus.svg");
    }

    else {
        answers_4.setAttribute("class", "answer-4");
        minus_4.setAttribute("src", "assets/images/icon-plus.svg");
    }
});