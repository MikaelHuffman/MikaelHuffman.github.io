class Painting {
  constructor(title, artist, filename, framed = false) {
    this.title = title;
    this.artist = artist;
    this.filename = filename;
    this.framed = framed;
  }

  get item() {
    const section = document.createElement("section");
    section.classList.add("painting");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    const artistP = document.createElement("p");
    artistP.classList.add("artist");
    artistP.textContent = `by ${this.artist}`;
    section.append(artistP);

    const img = document.createElement("img");
    img.src = `images/${this.filename}`;
    section.append(img);

    section.addEventListener("click", (clicked) => {
      showModal(this);
    });

    return section;
  };
};

const paintings = [
  new Painting("The Franklin", "Douglas", "the-franklin.jpg", true),
  new Painting("The Child", "Franklin", "the-child.jpg", false),
  new Painting("Two Children", "Douglin", "two-children.jpg", false),
  new Painting("Animals and Children", "Franklas", "animals-and-children.jpg", false),
  new Painting("Relaxation", "Mike", "relaxation.jpg", true)
];

const gallery = document.getElementById("gallery");
paintings.forEach((p) => {
    gallery.appendChild(p.item)
});

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

function showModal(painting) {
  modalBody.innerHTML = "";

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("modal-image");
  if (painting.framed) imgWrapper.classList.add("framed");

  const img = document.createElement("img");
  img.src = `images/${painting.filename}`;
  imgWrapper.append(img);

  const details = document.createElement("div");
  details.classList.add("modal-details");

  const h2 = document.createElement("h2");
  h2.innerHTML = painting.title;
  details.append(h2);

  const paintingArtist = document.createElement("p");
  paintingArtist.innerHTML = `<strong>Artist:</strong> ${painting.artist}`;
  details.append(paintingArtist);

  modalBody.append(imgWrapper);
  modalBody.append(details);

  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
}

if (modalClose) {
  modalClose.addEventListener("click", hideModal);
}