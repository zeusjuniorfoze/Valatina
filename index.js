let userName = "";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const heartsContainer = document.querySelector(".hearts");

function showNamePage() {
    changePage("pageGift", "pageName");
    launchPetals();
}


function showQuestion() {
    userName = document.getElementById("nameInput").value.trim();
    if (userName === "") {
        alert("Entre ton prénom 💕");
        return;
    }

    document.getElementById("questionText").innerText =
        `${userName}, tu veux être mon/ma partenaire de Saint-Valentin ? 😄❤️`;

    setupShareLinks(userName);
    changePage("pageName", "pageQuestion");
}

function changePage(from, to) {
    document.getElementById(from).classList.remove("active");
    document.getElementById(to).classList.add("active");
}

/* Bouton OUI */
yesBtn.addEventListener("click", () => {
    result.innerHTML = `💖 ${userName}, fais battre d’autres cœurs… partage cette surprise sur WhatsApp 💌`;
    launchHearts();
});

/* Bouton NON intelligent */
document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) moveNoButton();
});

function moveNoButton() {
    const padding = 15;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
document.addEventListener("touchstart", () => {
    moveNoButton();
});

/* Cœurs */
function launchHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = Math.random() * 25 + 15 + "px";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
    }
}

/* Partage */
function setupShareLinks(name) {
const text = encodeURIComponent(`Joyeuse Saint-Valentin 💘 ! J’ai une surprise pour toi 😄 clique ici`);

    const url = encodeURIComponent(window.location.href);

    document.getElementById("whatsappShare").href =
        `https://wa.me/?text=${text}%20${url}`;

    document.getElementById("facebookShare").href =
        `https://www.facebook.com/sharer/sharer.php?u=${url}`;
}

function launchPetals() {
    const petalsContainer = document.querySelector(".petals");

    for (let i = 0; i < 25; i++) {
        const petal = document.createElement("span");
        petal.innerHTML = "🌸";
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.fontSize = Math.random() * 14 + 14 + "px";
        petal.style.animationDuration = Math.random() * 4 + 6 + "s";

        petalsContainer.appendChild(petal);

        setTimeout(() => petal.remove(), 9000);
    }
}