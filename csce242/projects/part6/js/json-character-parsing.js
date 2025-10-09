const getDecks = async () => {
    const url = "data/decks.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error("Error fetching decks.json:", error);
        return [];
    }
};

const showDecks = async () => {
    const decks = await getDecks();
    const container = document.getElementById("decks-container");

    container.innerHTML = "";

    decks.forEach(deck => {
        const card = document.createElement("div");
        card.className = "image-card deck-card";

        const img = document.createElement("img");
        img.src = deck.img_name;
        img.alt = deck.name;
        const title = document.createElement("h3");
        title.textContent = deck.name;

        const info = document.createElement("p");
        info.innerHTML = `<strong>Type:</strong> ${deck.type} — <strong>Winrate:</strong> ${deck.winrate}`;

        const desc = document.createElement("p");
        desc.textContent = deck.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(info);
        card.appendChild(desc);

        container.appendChild(card);
    });
};

document.addEventListener("DOMContentLoaded", showDecks);