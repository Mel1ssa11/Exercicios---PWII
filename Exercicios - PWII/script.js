const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {
        input.style.transform = "scale(1.02)";
    });

    input.addEventListener("blur", () => {
        input.style.transform = "scale(1)";
    });

});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.letterSpacing = "2px";
    });

    button.addEventListener("mouseleave", () => {
        button.style.letterSpacing = "1px";
    });

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255,255,255,0.15),
            rgba(255,255,255,0.05)
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,0.08)";

    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1s";
        document.body.style.opacity = "1";

    }, 100);

});