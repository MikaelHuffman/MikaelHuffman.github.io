class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href="#";
        arrow.innerHTML = "&#x2964";
        h3.append(arrow);

        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        const imgContainer = document.createElement("div");
        columnContainer.append(this.picture(this.pic));

        const textContainer = document.createElement("div");
        columnContainer.append(textContainer);
        textContainer.append(this.description("Breed", this.breed));
        textContainer.append(this.description("Size", this.size));
        textContainer.append(this.description("Age", this.age));

        textContainer.classList.add("transparent");

        arrow.onclick = (e) => {
            e.preventDefault();
            textContainer.classList.toggle("transparent");
        }


        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/classes/${filename}`;
        return img;
    }

    description(key, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        return p;
        
    }
}

const dogs = [];
dogs.push(new Dog("Franklin", "Yorkie", "Black", 6, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "large", "pitt-bull.jpg"));

//on page load
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
});